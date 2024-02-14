import PropTypes from "prop-types";

function ArrowIcon({ direction }) {
  return (
    <svg
      className={`w-2.5 h-2.5 ${direction === "left" ? "" : "rotate-180"}`}
      aria-hidden="true"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 6 10"
    >
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d={direction === "left" ? "M5 1 1 5l4 4" : "m1 9 4-4-4-4"}
      />
    </svg>
  );
}

ArrowIcon.propTypes = {
  direction: PropTypes.oneOf(["left", "right"]).isRequired,
};

export default ArrowIcon;
