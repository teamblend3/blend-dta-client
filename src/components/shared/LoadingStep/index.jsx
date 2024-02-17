import { useState } from "react";

import Step from "./Step";
import useProjectStore from "../../../stores/useProjectStore";
import useTaskStatusQuery from "../../../hooks/useTaskStatus";

function LoadingStep() {
  const {
    projectInfo: { sheetUrl },
  } = useProjectStore();

  const [stepStatus, setStepStatus] = useState([
    { name: "CONNECTED_DB_DONE", done: false },
    { name: "FETCH_DATA_DONE", done: false },
    { name: "DATA_FORMATTING_DONE", done: false },
    { name: "TRANSFER_DATA_DONE", done: false },
  ]);

  const updateStepStatus = status => {
    const stepIndex = stepStatus.findIndex(step => step.name === status);
    const updatedSteps = stepStatus.map((step, index) => {
      if (index <= stepIndex) {
        return { ...step, done: true };
      }
      return step;
    });

    setStepStatus(updatedSteps);
  };

  useTaskStatusQuery(sheetUrl, updateStepStatus);

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

export default LoadingStep;
