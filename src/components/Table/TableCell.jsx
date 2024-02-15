import { Link } from "react-router-dom";
import PropTypes from "prop-types";

function TableCell({ label, link, content }) {
  return (
    <td className="px-6 py-2 border-2 border-black">
      <label htmlFor={label}>
        {link ? (
          <Link id={label} to={link}>
            {content}
          </Link>
        ) : (
          content
        )}
      </label>
    </td>
  );
}

TableCell.propTypes = {
  label: PropTypes.string.isRequired,
  link: PropTypes.string,
  content: PropTypes.oneOfType([PropTypes.string, PropTypes.element])
    .isRequired,
};

TableCell.defaultProps = {
  link: null,
};

export default TableCell;
