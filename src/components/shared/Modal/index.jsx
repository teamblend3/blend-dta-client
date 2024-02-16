import { useState } from "react";
import axios from "axios";
import { AiOutlineSync } from "react-icons/ai";
import { useMutation } from "@tanstack/react-query";

import ModalFooter from "./ModalFooter";
import ModalHeader from "./ModalHeader";
import useProjectStore from "../../../stores/useProjectStore";
import LoadingStep from "../LoadingStep";
import ModalButton from "./ModalButton";
import validateProjectInfo from "../../../utils/validates";

function Modal() {
  const [show, setShow] = useState(false);

  const { projectInfo, errors, setError } = useProjectStore(state => ({
    projectInfo: state.projectInfo,
    errors: state.errors,
    disabledFields: state.disabledFields,
    setProjectInfo: state.setProjectInfo,
    setError: state.setError,
    setDisabled: state.setDisabled,
  }));

  const { mutate } = useMutation({
    mutationFn: async data => {
      await axios.post("/api/projects/sync", data, {
        withCredentials: true,
      });
    },
    onSuccess: data => {
      console.log(data);
    },
    onError: err => {
      console.log(err);
    },
    onSettled: () => {},
  });

  const handleSynchronize = e => {
    e.preventDefault();
    const isValid = validateProjectInfo(projectInfo, setError);

    if (!isValid) {
      return;
    }
    mutate(projectInfo);
    setShow(true);
  };

  const handleDisAppearModal = () => {
    setShow(false);
    // delete sheet
  };

  return (
    <>
      <ModalButton onOpenModal={handleSynchronize}>
        <AiOutlineSync className="font-bold text-base" />
        Synchronize
      </ModalButton>

      <div
        id="default-modal"
        tabIndex="-1"
        aria-hidden="true"
        className={`${!show && "hidden"} overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-full max-h-full flex bg-black bg-opacity-50`}
      >
        <div className="relative p-4 w-full max-w-2xl max-h-full z-10">
          <div className="relative bg-secondary-100 rounded-lg shadow">
            <ModalHeader onCloseModal={handleDisAppearModal} />
            <div className="p-4 md:p-5 space-y-4">
              <LoadingStep />
            </div>
            <ModalFooter onCloseModal={handleDisAppearModal} />
          </div>
        </div>
      </div>
    </>
  );
}

export default Modal;
