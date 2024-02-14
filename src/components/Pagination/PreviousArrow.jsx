import PropTypes from "prop-types";

function PreviousArrow({ onClick }) {
  return (
    <li>
      <button
        onClick={onClick}
        className="cursor-pointer flex items-center justify-center px-3 h-8 ms-0 leading-tight text-primary-500 border border-e-0 border-primary-300 rounded-s-lg hover:bg-primary-400 hover:text-primary-900"
      >
        <span className="sr-only">Previous</span>
        <svg
          className="w-2.5 h-2.5 rtl:rotate-180"
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
            d="M5 1 1 5l4 4"
          />
        </svg>
      </button>
    </li>
  );
}

PreviousArrow.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default PreviousArrow;
