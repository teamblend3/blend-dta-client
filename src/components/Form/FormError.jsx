import PropTypes from "prop-types";
import { BiErrorCircle } from "react-icons/bi";

function FormError({ errorMessage }) {
  return (
    <div
      id="alert-border-2"
      className="flex items-center p-4 mb-4 text-warn-800 border-t-4 border-warn-300 bg-warn-50 dark:text-warn-400 dark:bg-gray-800 dark:border-warn-800"
      role="alert"
    >
      <BiErrorCircle />
      <div className="ms-3 text-sm font-medium">{errorMessage}</div>
    </div>
  );
}

FormError.propTypes = {
  errorMessage: PropTypes.string.isRequired,
};

export default FormError;
