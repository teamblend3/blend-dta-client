import PropTypes from "prop-types";
import Step from "./Step";
import useProjectStore from "../../../stores/useProjectStore";
import useTaskStatus from "../../../hooks/useTaskStatus";

function LoadingStep({ show }) {
  const {
    projectInfo: { dbUrl, dbTableName },
  } = useProjectStore();

  const stepStatus = useTaskStatus(show, dbUrl, dbTableName);

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
  show: PropTypes.bool.isRequired,
};

export default LoadingStep;
