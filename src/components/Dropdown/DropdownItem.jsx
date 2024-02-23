import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { DROPDOWN_ITEM_STYLE } from "../../utils/styleConstants";
import cls from "../../utils/styleUtil";

function DropdownItem({
  label,
  isCurrent,
  onClick,
  onMouseEnter,
  onMouseLeave,
}) {
  return (
    <li
      className={cls(
        DROPDOWN_ITEM_STYLE,
        isCurrent && "bg-primary-800 text-primary-100",
      )}
    >
      <button
        onMouseEnter={() => onMouseEnter && onMouseEnter(label)}
        onMouseLeave={() => onMouseLeave && onMouseLeave(label)}
        onClick={onClick}
        type="button"
        className="w-full h-full text-left px-4"
      >
        {label}
      </button>
    </li>
  );
}

DropdownItem.defaultProps = {
  label: "",
  isCurrent: false,
  onClick: null,
  onMouseEnter: null,
  onMouseLeave: null,
};

DropdownItem.propTypes = {
  label: PropTypes.string,
  isCurrent: PropTypes.bool,
  onClick: PropTypes.func,
  onMouseEnter: PropTypes.func,
  onMouseLeave: PropTypes.func,
};

export default DropdownItem;
