import Joi from "joi";
import { DB_URL, SHEET_URL } from "./constants";

export const validateField = (field, value) => {
  let schema;
  switch (field) {
    case DB_URL:
      schema = Joi.string().domain().allow("");
      break;
    default:
      schema = Joi.string();
      break;
  }
  const { error } = schema.validate(value);
  return error ? error.message : null;
};

export const validateProjectInfo = (projectInfo, setError, isMock) => {
  const fieldsToValidate = [DB_URL, SHEET_URL];
  if (isMock) {
    fieldsToValidate.pop();
  }
  let isValid = true;

  fieldsToValidate.forEach(field => {
    const schema =
      field === DB_URL ? Joi.string().domain() : Joi.string().uri();
    const { error } = schema.validate(projectInfo[field]);
    if (error?.message) {
      setError(field, error.message);
      isValid = false;
    }
  });

  return isValid;
};
