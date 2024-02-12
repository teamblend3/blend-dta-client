import { MdOutlineDone } from "react-icons/md";
import PropTypes from "prop-types";
import Spinner from "../Spinner";

function Step({ children, stepInfo }) {
  return (
    <li className="flex flex-col gap-5  items-center w-full ">
      {stepInfo.done ? (
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
  stepInfo: PropTypes.shape({
    title: PropTypes.string.isRequired,
    done: PropTypes.bool.isRequired,
  }).isRequired,
  children: PropTypes.string.isRequired,
};

export default Step;
