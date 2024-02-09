import PropTypes from "prop-types";

function ModalFooter({ onCloseModal }) {
  return (
    <div className="flex justify-end items-center p-4 md:p-5 border-t border-secondary-400 rounded-b">
      <button
        data-modal-hide="default-modal"
        type="button"
        className="ms-3 text-text-500 bg-secondary-200 hover:bg-secondary-400 focus:ring-4 focus:outline-none focus:ring-secondary-600 rounded-lg border border-secondary-400 text-sm font-medium px-5 py-2.5 hover:text-text-900 focus:z-10"
        onClick={onCloseModal}
      >
        Cancel
      </button>
    </div>
  );
}

ModalFooter.propTypes = {
  onCloseModal: PropTypes.func.isRequired,
};

export default ModalFooter;
