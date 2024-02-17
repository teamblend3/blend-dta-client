import PropTypes from "prop-types";
import Button from "../../Button/Button";
import { CLOSE_MODAL_BUTTON_STYLE } from "../../../utils/styleConstants";

function ModalFooter({ onCloseModal }) {
  return (
    <div className="flex justify-end items-center p-4 md:p-5 border-t border-secondary-400 rounded-b">
      <Button
        type="button"
        onClick={onCloseModal}
        disabled={false}
        style={CLOSE_MODAL_BUTTON_STYLE}
      >
        Cancel
      </Button>
    </div>
  );
}

ModalFooter.propTypes = {
  onCloseModal: PropTypes.func.isRequired,
};

export default ModalFooter;
