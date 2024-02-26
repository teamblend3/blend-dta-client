import { useRef, useState } from "react";
import axios from "axios";
import { AiOutlineSync } from "react-icons/ai";
import { useMutation } from "@tanstack/react-query";
import { v4 as uuidv4 } from "uuid";

import ModalFooter from "./ModalFooter";
import ModalHeader from "./ModalHeader";
import useProjectStore from "../../../stores/useProjectStore";
import LoadingStep from "../LoadingStep";
import { validateProjectInfo } from "../../../utils/validates";
import Button from "../../Button/Button";
import { SYNCHRONIZE_BUTTON_STYLE } from "../../../utils/styleConstants";
import { DUPLICATE_MESSAGE, SHEET_URL } from "../../../utils/constants";
import useAuthStore from "../../../stores/useAuthStore";

function Modal() {
  const [show, setShow] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const {
    userInfo: { userId },
  } = useAuthStore();
  const statusId = useRef(uuidv4());

  const { projectInfo, setProjectInfo, setError } = useProjectStore(state => ({
    projectInfo: state.projectInfo,
    errors: state.errors,
    disabledFields: state.disabledFields,
    setProjectInfo: state.setProjectInfo,
    setError: state.setError,
    setDisabled: state.setDisabled,
  }));

  const { mutate } = useMutation({
    mutationFn: async data => {
      const response = await axios.post(
        userId === import.meta.env.VITE_MOCK_AUTH_ID
          ? "/api/projects/mock-sync"
          : "/api/projects/sync",
        data,
        {
          responseType:
            userId === import.meta.env.VITE_MOCK_AUTH_ID ? "blob" : "json",
          withCredentials: true,
        },
      );
      return response.data;
    },
    onSuccess: data => {
      if (userId === import.meta.env.VITE_MOCK_AUTH_ID) {
        const blob = new Blob([data], {
          type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
        });
        const url = window.URL.createObjectURL(blob);
        setProjectInfo(SHEET_URL, url);
      } else {
        setProjectInfo(SHEET_URL, data.project.sheetUrl);
        setErrorMessage("");
      }
    },
    onError: err => {
      if (err.response.data.message === DUPLICATE_MESSAGE) {
        setErrorMessage(DUPLICATE_MESSAGE);
        setShow(false);
      }
    },
    onSettled: () => {},
  });

  const handleSynchronize = e => {
    e.preventDefault();
    setShow(true);
    const isMock = userId === import.meta.env.VITE_MOCK_AUTH_ID;
    const isValid = validateProjectInfo(projectInfo, setError, isMock);

    if (!isValid) {
      return;
    }
    mutate({ ...projectInfo, statusId: statusId.current });
  };

  const handleDisAppearModal = () => {
    setShow(false);
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
              <LoadingStep show={show} statusId={statusId} />
            </div>
            <ModalFooter onCloseModal={handleDisAppearModal} />
          </div>
        </div>
      </div>
    </>
  );
}

export default Modal;
