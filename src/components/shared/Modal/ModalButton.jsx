import PropTypes from "prop-types";

function ModalButton({ onOpenModal, children }) {
  return (
    <button
      data-modal-target="default-modal"
      data-modal-toggle="default-modal"
      className="text-text-950 bg-secondary-400 hover:bg-secondary-300 focus:ring-4 focus:outline-none focus:ring-secondary font-medium rounded-md text-sm w-full sm:w-auto px-6 py-2.5 text-center hover:-translate-y-0.5 hover:shadow-xl transform transition-transform ease-in-out duration-150"
      onClick={onOpenModal}
    >
      <span className="flex justify-center items-center font-bold gap-1">
        {children}
      </span>
    </button>
  );
}

ModalButton.propTypes = {
  onOpenModal: PropTypes.func.isRequired,
  children: PropTypes.arrayOf(
    PropTypes.oneOfType([PropTypes.element, PropTypes.string]),
  ).isRequired,
};

export default ModalButton;
