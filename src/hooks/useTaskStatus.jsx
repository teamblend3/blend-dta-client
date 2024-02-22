import { useState, useEffect } from "react";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { TRANSFER_DATA_DONE } from "../utils/constants";

const useTaskStatus = (show, dbUrl, dbTableName) => {
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

  const fetchTaskStatus = async () => {
    const response = await axios.get(
      `/api/projects/taskstatus?db=${dbUrl}&table=${dbTableName}`,
      {
        withCredentials: true,
      },
    );

    updateStepStatus(response.data.status);

    return response.data;
  };

  const { data, status } = useQuery({
    queryKey: ["get-taskStatus"],
    queryFn: fetchTaskStatus,
    enabled: Boolean(show && dbUrl && dbTableName),
    refetchInterval: result =>
      result.state.data?.status === TRANSFER_DATA_DONE ? false : 1000,
  });

  useEffect(() => {
    if (status === "success" && data?.status) {
      updateStepStatus(data.status);
    }
  }, [data, status]);

  return stepStatus;
};

export default useTaskStatus;
