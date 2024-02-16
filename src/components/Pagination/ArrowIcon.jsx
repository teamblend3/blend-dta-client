import PropTypes from "prop-types";
import {
  MdOutlineArrowBackIosNew,
  MdOutlineArrowForwardIos,
} from "react-icons/md";

function ArrowIcon({ direction }) {
  return direction === "left" ? (
    <MdOutlineArrowBackIosNew />
  ) : (
    <MdOutlineArrowForwardIos />
  );
}

ArrowIcon.propTypes = {
  direction: PropTypes.oneOf(["left", "right"]).isRequired,
};

export default ArrowIcon;
