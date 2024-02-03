import { Link } from "react-router-dom";
import PropTypes from "prop-types";

function LinkButtonItem({ to, children }) {
  return (
    <li>
      <button>
        <Link to={to}>{children}</Link>
      </button>
    </li>
  );
}

LinkButtonItem.propTypes = {
  to: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export default LinkButtonItem;
