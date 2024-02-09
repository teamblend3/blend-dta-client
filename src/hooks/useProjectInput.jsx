import { useState } from "react";
import useProjectStore from "../stores/useProjectStore";

const useProjectInput = ({ name }) => {
  const { projectInfo, setProjectInfo } = useProjectStore();
  const [error, setError] = useState("");

  const handleChange = e => {
    setProjectInfo({ name, value: e.target.value });
  };

  const setValue = value => {
    setProjectInfo({ name, value });
  };

  return { value: projectInfo[name], setValue, handleChange, error, setError };
};

export default useProjectInput;
