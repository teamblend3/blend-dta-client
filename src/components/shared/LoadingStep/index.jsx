import { useState } from "react";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";

import Step from "./Step";

function LoadingStep() {
  const [stepStatus, setStepStatus] = useState([
    { title: "CONNECTED_DB", done: false },
    { title: "FETCH_DATA", done: false },
    { title: "DATA_FORMATTING", done: false },
    { title: "TRANSFER_DATA", done: false },
    { title: "DONE", done: false },
  ]);

  const { data, refetch } = useQuery({
    queryKey: ["get-status"],
    queryFn: async () => {
      const res = await axios.get("/api/projects/tasks/id", {
        withCredentials: true,
      });
      setStepStatus("connectDb");
    },
    enabled: false,
    refetchInterval: 1000,
  });

  return (
    <ol className="w-full flex">
      {stepStatus.map(step => (
        <Step key={step.title} stepInfo={step}>
          {step.title.split("_").join(" ")}
        </Step>
      ))}
    </ol>
  );
}

export default LoadingStep;
