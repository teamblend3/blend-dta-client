import PropTypes from "prop-types";

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
        <svg
          className="w-3 h-3"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 14 14"
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
          />
        </svg>
      </button>
    </div>
  );
}

ModalHeader.propTypes = {
  onCloseModal: PropTypes.func.isRequired,
};

export default ModalHeader;
