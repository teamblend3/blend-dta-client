import { MdOutlineDone } from "react-icons/md";
import PropTypes from "prop-types";
import Spinner from "../Spinner";

function Step({ children, done }) {
  return (
    <li className="flex flex-col gap-5  items-center w-full ">
      {done ? (
        <MdOutlineDone size={36} className="text-text-500" />
      ) : (
        <Spinner />
      )}
      <span className="uppercase text-text-800 text-center tracking-wider">
        {children}
      </span>
    </li>
  );
}

Step.propTypes = {
  done: PropTypes.bool.isRequired,
  children: PropTypes.string.isRequired,
};

export default Step;
