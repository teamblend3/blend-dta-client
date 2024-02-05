import { useState } from "react";

const useInput = init => {
  const [value, setValue] = useState(init);
  const [error, setError] = useState("");

  const handleChange = e => {
    setValue(e.target.value);
  };

  return { value, handleChange, error, setError };
};

export default useInput;
