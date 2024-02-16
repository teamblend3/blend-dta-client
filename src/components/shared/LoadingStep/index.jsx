import { useState } from "react";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";

import Step from "./Step";
import useProjectStore from "../../../stores/useProjectStore";

function LoadingStep() {
  const [stepStatus, setStepStatus] = useState([
    { title: "CONNECTED_DB_DONE", done: false },
    { title: "FETCH_DATA_DONE", done: false },
    { title: "DATA_FORMATTING_DONE", done: false },
    { title: "TRANSFER_DATA_DONE", done: false },
  ]);
  const {
    projectInfo: { sheetUrl },
  } = useProjectStore();

  const query = useQuery({
    queryKey: ["get-taskstatus"],
    queryFn: async () => {
      const url = new URL(sheetUrl);
      const parts = url.pathname.split("/");
      const spreadsheetId = parts[3];
      const res = await axios.get(`/api/projects/${spreadsheetId}/taskstatus`, {
        withCredentials: true,
      });
      if (res.data?.status === "FETCH_DATA_DONE") {
        setStepStatus([
          { title: "CONNECTED_DB_DONE", done: true },
          { title: "FETCH_DATA_DONE", done: true },
          { title: "DATA_FORMATTING_DONE", done: false },
          { title: "TRANSFER_DATA_DONE", done: false },
        ]);
      }
      if (res.data?.status === "DATA_FORMATTING_DONE") {
        setStepStatus([
          { title: "CONNECTED_DB_DONE", done: true },
          { title: "FETCH_DATA_DONE", done: true },
          { title: "DATA_FORMATTING_DONE", done: true },
          { title: "TRANSFER_DATA_DONE", done: false },
        ]);
      }
      if (res.data?.status === "TRANSFER_DATA_DONE") {
        setStepStatus([
          { title: "CONNECTED_DB_DONE", done: true },
          { title: "FETCH_DATA_DONE", done: true },
          { title: "DATA_FORMATTING_DONE", done: true },
          { title: "TRANSFER_DATA_DONE", done: true },
        ]);
      }
      return res.data;
    },
    enabled: true,
    refetchInterval: data => {
      if (data.state.data?.status === "TRANSFER_DATA_DONE") {
        return false;
      }
      return 1000;
    },
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
