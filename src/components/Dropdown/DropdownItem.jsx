import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { DROPDOWN_ITEM_STYLE } from "../../utils/styleConstants";

function DropdownItem({ to, label, onClick, onMouseEnter, onMouseLeave }) {
  const handleClick = () => {
    if (onClick) {
      onClick();
    }
  };

  const handleKeyPress = event => {
    if ((event.key === "Enter" || event.key === " ") && onClick) {
      onClick();
    }
  };

  return (
    <Link to={to} className={DROPDOWN_ITEM_STYLE}>
      <button
        onClick={handleClick}
        onMouseEnter={() => onMouseEnter && onMouseEnter(label)}
        onMouseLeave={() => onMouseLeave && onMouseLeave(label)}
        onKeyPress={handleKeyPress}
        tabIndex={0}
        type="button"
      >
        {label}
      </button>
    </Link>
  );
}

DropdownItem.propTypes = {
  to: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  onMouseEnter: PropTypes.func,
  onMouseLeave: PropTypes.func,
};

DropdownItem.defaultProps = {
  onClick: null,
  onMouseEnter: null,
  onMouseLeave: null,
};

export default DropdownItem;
