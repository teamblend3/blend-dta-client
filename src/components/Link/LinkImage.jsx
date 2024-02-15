import { FaExternalLinkAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

function LinkImage({ to }) {
  return (
    <Link to={to}>
      <FaExternalLinkAlt></FaExternalLinkAlt>
    </Link>
  );
}

LinkImage.propTypes = {
  to: PropTypes.string.isRequired,
};

export default LinkImage;
