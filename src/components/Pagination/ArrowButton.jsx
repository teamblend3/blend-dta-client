import PropTypes from "prop-types";
import ArrowIcon from "./ArrowIcon";

function ArrowButton({ direction, onClick }) {
  return (
    <li>
      <button
        onClick={onClick}
        className={`cursor-pointer flex items-center justify-center px-3 h-8 leading-tight text-primary-500 bg-transparent border border-primary-300 ${direction === "left" ? "rounded-s-lg" : "rounded-e-lg"} hover:bg-primary-400 hover:text-primary-900`}
      >
        <span className="sr-only">
          {direction === "left" ? "Previous" : "Next"}
        </span>
        <ArrowIcon direction={direction} />
      </button>
    </li>
  );
}

ArrowButton.propTypes = {
  direction: PropTypes.oneOf(["left", "right"]).isRequired,
  onClick: PropTypes.func.isRequired,
};

export function PreviousArrow(props) {
  return <ArrowButton {...props} direction="left" />;
}
export function NextArrow(props) {
  return <ArrowButton {...props} direction="right" />;
}
