import PropTypes from "prop-types";

function FormButton({ type, children }) {
  return (
    <button
      type={type}
      className="text-text-950 bg-primary-400 hover:bg-primary-300 focus:ring-4 focus:outline-none focus:ring-primary font-medium rounded-md text-sm w-full sm:w-auto px-6 py-2.5 text-center hover:-translate-y-0.5 hover:shadow-xl transform transition-transform ease-in-out duration-150"
    >
      {children}
    </button>
  );
}

FormButton.propTypes = {
  type: PropTypes.string.isRequired,
  children: PropTypes.string.isRequired,
};

export default FormButton;
