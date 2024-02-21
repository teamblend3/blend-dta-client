import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { DROPDOWN_ITEM_STYLE } from "../../utils/styleConstants";

function DropdownItem({ to, label, onClick, onMouseEnter, onMouseLeave }) {
  return (
    <Link to={to} className={DROPDOWN_ITEM_STYLE}>
      <button
        onClick={onClick}
        onMouseEnter={() => onMouseEnter && onMouseEnter(label)}
        onMouseLeave={() => onMouseLeave && onMouseLeave(label)}
        type="button"
      >
        {label}
      </button>
    </Link>
  );
}

DropdownItem.propTypes = {
  to: PropTypes.string,
  label: PropTypes.string,
  onClick: PropTypes.func,
  onMouseEnter: PropTypes.func,
  onMouseLeave: PropTypes.func,
};

DropdownItem.defaultProps = {
  to: "",
  label: "",
  onClick: null,
  onMouseEnter: null,
  onMouseLeave: null,
};

export default DropdownItem;
