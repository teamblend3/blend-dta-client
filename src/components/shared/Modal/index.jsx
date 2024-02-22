import { useState } from "react";
import axios from "axios";
import { AiOutlineSync } from "react-icons/ai";
import { useMutation } from "@tanstack/react-query";

import ModalFooter from "./ModalFooter";
import ModalHeader from "./ModalHeader";
import useProjectStore from "../../../stores/useProjectStore";
import LoadingStep from "../LoadingStep";
import validateProjectInfo from "../../../utils/validates";
import Button from "../../Button/Button";
import { SYNCHRONIZE_BUTTON_STYLE } from "../../../utils/styleConstants";
import { DUPLICATE_MESSAGE, SHEET_URL } from "../../../utils/constants";

function Modal() {
  const [show, setShow] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const { projectInfo, errors, setError, setDisabled } = useProjectStore(
    state => ({
      projectInfo: state.projectInfo,
      errors: state.errors,
      disabledFields: state.disabledFields,
      setProjectInfo: state.setProjectInfo,
      setError: state.setError,
      setDisabled: state.setDisabled,
    }),
  );

  const { mutate } = useMutation({
    mutationFn: async data => {
      const response = await axios.post("/api/projects/sync", data, {
        withCredentials: true,
      });
      return response.data;
    },
    onSuccess: data => {
      setErrorMessage("");
      setShow(true);
    },
    onError: err => {
      if (err.response.data.error === DUPLICATE_MESSAGE) {
        setErrorMessage(DUPLICATE_MESSAGE);
        setShow(false);
      }
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
    setDisabled(SHEET_URL, true);
  };

  const handleDisAppearModal = () => {
    setShow(false);
    // delete sheet
  };

  return (
    <>
      <Button
        type="button"
        style={SYNCHRONIZE_BUTTON_STYLE}
        onClick={handleSynchronize}
        disabled={false}
      >
        <AiOutlineSync className="font-bold text-base" />
        Synchronize
      </Button>

      {errorMessage && (
        <div className="text-center font-bold text-warn-500 p-2 underline">
          {errorMessage}
        </div>
      )}

      <div
        className={`${!show && "hidden"} overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-full max-h-full flex bg-black bg-opacity-50`}
      >
        <div className="relative p-4 w-full max-w-2xl max-h-full z-10">
          <div className="relative bg-secondary-100 rounded-lg shadow">
            <ModalHeader onCloseModal={handleDisAppearModal} />
            <div className="p-4 md:p-5 space-y-4">
              <LoadingStep show={show} />
            </div>
            <ModalFooter onCloseModal={handleDisAppearModal} />
          </div>
        </div>
      </div>
    </>
  );
}

export default Modal;
