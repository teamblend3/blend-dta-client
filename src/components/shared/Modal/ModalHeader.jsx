import PropTypes from "prop-types";
import { IoMdClose } from "react-icons/io";

import Button from "../../Button/Button";
import { CLOSE_MODAL_HEADER_BUTTON_STYLE } from "../../../utils/styleConstants";

function ModalHeader({ onCloseModal }) {
  return (
    <div className="flex items-center justify-between p-4 md:p-5 border-secondary-400 border-b rounded-t">
      <h3 className="text-xl font-semibold text-text-900">
        Synchronize DB to Sheet
      </h3>
      <Button
        type="button"
        style={CLOSE_MODAL_HEADER_BUTTON_STYLE}
        onClick={onCloseModal}
      >
        <IoMdClose size={20} />
      </Button>
    </div>
  );
}

ModalHeader.propTypes = {
  onCloseModal: PropTypes.func.isRequired,
};

export default ModalHeader;
