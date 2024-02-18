import PropTypes from "prop-types";
import {
  MdOutlineArrowBackIosNew,
  MdOutlineArrowForwardIos,
} from "react-icons/md";
import Button from "./Button";
import { getStyleArrowButton } from "../../utils/styleUtils";

function ArrowButton({ usePage, direction, onClick }) {
  return (
    <li>
      <Button
        type="button"
        onClick={onClick}
        style={getStyleArrowButton(usePage, direction)}
      >
        <span className="sr-only">
          {direction === "left" ? "Previous" : "Next"}
        </span>
        {direction === "left" ? (
          <MdOutlineArrowBackIosNew />
        ) : (
          <MdOutlineArrowForwardIos />
        )}
      </Button>
    </li>
  );
}

ArrowButton.propTypes = {
  usePage: PropTypes.string.isRequired,
  direction: PropTypes.oneOf(["left", "right"]).isRequired,
  onClick: PropTypes.func.isRequired,
};

export function PreviousArrow(props) {
  return <ArrowButton {...props} direction="left" />;
}
export function NextArrow(props) {
  return <ArrowButton {...props} direction="right" />;
}
