import PropTypes from "prop-types";
import { DEFAULT_BUTTON_STYLE } from "../../utils/styleConstants";

function Button({ type, children, style, onClick, disabled }) {
  return (
    <button
      type={type}
      className={style || DEFAULT_BUTTON_STYLE}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
}

Button.defaultProps = {
  disabled: false,
  onClick: () => {},
};

Button.propTypes = {
  type: PropTypes.string.isRequired,
  style: PropTypes.string.isRequired,
  children: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  disabled: PropTypes.bool,
};

export default Button;
