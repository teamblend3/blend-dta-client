import PropTypes from "prop-types";

function FormButton({ type, children, handleClick, disabled }) {
  return (
    <button
      type={type}
      className="text-text-950 bg-primary-400 hover:bg-primary-300 focus:ring-4 focus:outline-none focus:ring-primary font-medium rounded-md text-sm w-full sm:w-auto px-6 py-2.5 text-center hover:-translate-y-0.5 hover:shadow-xl transform transition-transform ease-in-out duration-150 disabled:bg-primary-700 disabled:cursor-not-allowed disabled:hover:-translate-y-0 disabled:hover:bg-primary-400 disabled:hover:shadow-none"
      onClick={handleClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
}

FormButton.defaultProps = {
  disabled: false,
};

FormButton.propTypes = {
  type: PropTypes.string.isRequired,
  children: PropTypes.string.isRequired,
  handleClick: PropTypes.func.isRequired,
  disabled: PropTypes.bool,
};

export default FormButton;
