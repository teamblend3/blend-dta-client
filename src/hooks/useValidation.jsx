import { useState, useEffect } from "react";

const useValidation = (value, schema) => {
  const [error, setError] = useState("");

  useEffect(() => {
    const validation = schema.validate(value);
    if (validation.error) {
      setError(validation.error.details[0].message);
    } else {
      setError("");
    }
  }, [value, schema]);

  return error;
};

export default useValidation;
