import PropTypes from "prop-types";
import { IoMdClose } from "react-icons/io";

function ModalHeader({ onCloseModal }) {
  return (
    <div className="flex items-center justify-between p-4 md:p-5 border-secondary-400 border-b rounded-t">
      <h3 className="text-xl font-semibold text-text-900">
        Synchronize DB to Sheet
      </h3>
      <button
        type="button"
        aria-label="Close modal"
        className="text-text-400 bg-transparent hover:bg-secondary-200 hover:text-text-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center"
        data-modal-hide="default-modal"
        onClick={onCloseModal}
      >
        <IoMdClose />
      </button>
    </div>
  );
}

ModalHeader.propTypes = {
  onCloseModal: PropTypes.func.isRequired,
};

export default ModalHeader;
