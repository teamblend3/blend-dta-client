import PropTypes from "prop-types";

function FormSelect({ id, options }) {
  return (
    <select
      id={id}
      className="bg-accent-500 border border-accent-300 text-accent-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
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
};

FormSelect.propTypes = {
  id: PropTypes.string.isRequired,
  options: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
    }),
  ),
};

export default FormSelect;
