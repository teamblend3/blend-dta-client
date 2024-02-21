import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { DROPDOWN_ITEM_STYLE } from "../../utils/styleConstants";

function DropdownItem({ to, label, onClick, onMouseEnter, onMouseLeave }) {
  return (
    <Link to={to} className={DROPDOWN_ITEM_STYLE} onClick={onClick}>
      <button
        onMouseEnter={() => onMouseEnter && onMouseEnter(label)}
        onMouseLeave={() => onMouseLeave && onMouseLeave(label)}
        type="button"
      >
        {label}
      </button>
    </Link>
  );
}

DropdownItem.defaultProps = {
  to: "",
  label: "",
  onClick: null,
  onMouseEnter: null,
  onMouseLeave: null,
};

DropdownItem.propTypes = {
  to: PropTypes.string,
  label: PropTypes.string,
  onClick: PropTypes.func,
  onMouseEnter: PropTypes.func,
  onMouseLeave: PropTypes.func,
};

export default DropdownItem;
