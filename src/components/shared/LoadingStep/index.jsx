import PropTypes from "prop-types";
import Step from "./Step";
import useTaskStatus from "../../../hooks/useTaskStatus";

function LoadingStep({ show, statusId }) {
  const stepStatus = useTaskStatus(show, statusId.current);
  return (
    <ol className="w-full flex">
      {stepStatus.map(step => (
        <Step key={step.name} done={step.done}>
          {step.name.split("_").join(" ")}
        </Step>
      ))}
    </ol>
  );
}

LoadingStep.propTypes = {
  statusId: PropTypes.shape({
    current: PropTypes.string.isRequired,
  }).isRequired,
  show: PropTypes.bool.isRequired,
};

export default LoadingStep;
