import PropTypes from "prop-types";
import { SiGooglesheets } from "react-icons/si";
import { IoCheckmarkDoneCircleSharp } from "react-icons/io5";
import Button from "../../Button/Button";
import useTaskStatus from "../../../hooks/useTaskStatus";
import useProjectStore from "../../../stores/useProjectStore";
import {
  GO_TO_SHEET_BUTTON_STYLE,
  CLOSE_MODAL_BUTTON_STYLE,
} from "../../../utils/styleConstants";
import useAuthStore from "../../../stores/useAuthStore";

function ModalFooter({ onCloseModal }) {
  const {
    userInfo: { userId },
  } = useAuthStore();
  const {
    projectInfo: { sheetUrl },
  } = useProjectStore();
  const stepStatus = useTaskStatus();
  const allStepsDone = stepStatus.every(step => step.done);

  return (
    <div className="flex justify-end items-center p-4 md:p-5 border-t border-secondary-400 rounded-b">
      {allStepsDone ? (
        <div className="flex items-center">
          <p className="text-text-850 mr-2">All Done!</p>
          <IoCheckmarkDoneCircleSharp size={30} />
        </div>
      ) : (
        <Button
          type="button"
          onClick={onCloseModal}
          disabled={false}
          style={CLOSE_MODAL_BUTTON_STYLE}
        >
          Cancel
        </Button>
      )}

      {allStepsDone && (
        <a
          href={sheetUrl}
          target="_blank"
          rel="noreferrer"
          download={
            userId === import.meta.env.VITE_MOCK_AUTH_ID
              ? "sample.xlsx"
              : undefined
          }
        >
          <Button type="button" style={GO_TO_SHEET_BUTTON_STYLE}>
            Check your Sheet
            <SiGooglesheets />
          </Button>
        </a>
      )}
    </div>
  );
}

ModalFooter.propTypes = {
  onCloseModal: PropTypes.func.isRequired,
};

export default ModalFooter;
