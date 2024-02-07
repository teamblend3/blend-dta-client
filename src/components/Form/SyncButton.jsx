import PropTypes from "prop-types";
import { AiOutlineSync } from "react-icons/ai";

function SyncButton({ type, children, handleClick }) {
  return (
    <button
      type={type}
      className="text-text-950 bg-secondary-400 hover:bg-secondary-300 focus:ring-4 focus:outline-none focus:ring-secondary font-medium rounded-md text-sm w-full sm:w-auto px-6 py-2.5 text-center hover:-translate-y-0.5 hover:shadow-xl transform transition-transform ease-in-out duration-150"
      onClick={handleClick}
    >
      <span className="flex justify-center items-center font-bold gap-1">
        <AiOutlineSync className="font-bold text-base" />
        {children}
      </span>
    </button>
  );
}

SyncButton.propTypes = {
  type: PropTypes.string.isRequired,
  children: PropTypes.string.isRequired,
  handleClick: PropTypes.func.isRequired,
};

export default SyncButton;
