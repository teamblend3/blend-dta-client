import PropTypes from "prop-types";

function FloatingInput({ type, name, label, value, handleChange, disabled }) {
  return (
    <div className="relative z-0 mb-5">
      <input
        type={type}
        name={name}
        id={name}
        className="block py-2.5 px-0 w-full text-md text-text-950 bg-transparent border-0 border-b-2 border-text appearance-none focus:outline-none focus:ring-0 focus:border-primary-400 peer disabled:text-gray disabled:border-gray disabled:cursor-not-allowed"
        placeholder=" "
        autoComplete="false"
        value={value}
        onChange={handleChange}
        disabled={disabled}
        required
      />
      <label
        htmlFor={name}
        className="peer-focus:font-medium absolute text-md text-text-950 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-primary-400 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
      >
        {label}
      </label>
    </div>
  );
}

FloatingInput.defaultProps = {
  disabled: false,
};

FloatingInput.propTypes = {
  type: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
  disabled: PropTypes.bool,
};

export default FloatingInput;
