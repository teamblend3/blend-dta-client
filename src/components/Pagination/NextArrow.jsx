import PropTypes from "prop-types";

function NextArrow({ onClick }) {
  return (
    <li>
      <button
        onClick={onClick}
        className="cursor-pointer flex items-center justify-center px-3 h-8 leading-tight text-primary-500 bg-transparent border border-primary-300 rounded-e-lg hover:bg-primary-400 hover:text-primary-900"
      >
        <span className="sr-only">Next</span>
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
            d="m1 9 4-4-4-4"
          />
        </svg>
      </button>
    </li>
  );
}

NextArrow.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default NextArrow;
