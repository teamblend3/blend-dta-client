import { Link } from "react-router-dom";
import PropTypes from "prop-types";

function LinkButton({ to, children }) {
  return (
    <Link to={to}>
      <button
        type="button"
        className="font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center bg-background-200"
      >
        {children}
        <svg
          className="rtl:rotate-180 w-3.5 h-3 ms-2"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 14 10"
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M1 5h12m0 0L9 1m4 4L9 9"
          />
        </svg>
      </button>
    </Link>
  );
}

LinkButton.propTypes = {
  to: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export default LinkButton;
