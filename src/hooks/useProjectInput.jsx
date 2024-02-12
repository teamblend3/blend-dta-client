import { useState } from "react";
import Joi from "joi";
import useProjectStore from "../stores/useProjectStore";

const useProjectInput = ({ name }) => {
  const { projectInfo, setInfoValue, setInfoError, setInfoDisabled } =
    useProjectStore();

  const handleChange = e => {
    setInfoValue({ name, value: e.target.value });

    if (name === "dbUrl") {
      const schema = Joi.string().domain();
      if (schema.validate(e.target.value).error && e.target.value) {
        setInfoError({
          name: "dbUrl",
          error: schema.validate(e.target.value).error.message,
        });
      } else {
        setInfoError({ name: "dbUrl", error: "" });
      }
    }

    if (name === "sheetUrl") {
      const schema = Joi.string().uri();
      if (schema.validate(e.target.value).error && e.target.value) {
        setInfoError({
          name: "sheetUrl",
          error: schema.validate(e.target.value).error.message,
        });
      } else {
        setInfoError({ name: "sheetUrl", error: "" });
      }
    }
  };

  const setValue = value => {
    setInfoValue({ name, value });
  };

  const setError = error => {
    setInfoError({ name, error });
  };

  const setDisabled = disabled => {
    setInfoDisabled({ name, disabled });
  };

  return {
    value: projectInfo[name].value,
    setValue,
    handleChange,
    error: projectInfo[name].error,
    setError,
    disabled: projectInfo[name].disabled,
    setDisabled,
  };
};

export default useProjectInput;
