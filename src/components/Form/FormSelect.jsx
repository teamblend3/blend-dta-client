import PropTypes from "prop-types";

function FormSelect({ id, options, disabled, value, handleChange }) {
  return (
    <select
      id={id}
      className="bg-accent-500 border border-accent-300 text-accent-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 disabled:cursor-not-allowed disabled:bg-accent-50"
      disabled={disabled}
      value={value}
      onChange={handleChange}
    >
      {options.map(option => (
        <option value={option.name} key={option.name}>
          {option.name}
        </option>
      ))}
    </select>
  );
}

FormSelect.defaultProps = {
  options: [],
  disabled: false,
};

FormSelect.propTypes = {
  id: PropTypes.string.isRequired,
  options: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
    }),
  ),
  disabled: PropTypes.bool,
  value: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
};

export default FormSelect;
