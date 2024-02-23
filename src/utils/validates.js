import Joi from "joi";

export const validateField = (field, value) => {
  let schema;
  switch (field) {
    case "dbUrl":
      schema = Joi.string().domain().allow("");
      break;
    default:
      schema = Joi.string();
      break;
  }
  const { error } = schema.validate(value);
  return error ? error.message : null;
};

export const validateProjectInfo = (projectInfo, setError) => {
  const fieldsToValidate = ["sheetUrl", "dbUrl"];
  let isValid = true;

  fieldsToValidate.forEach(field => {
    const schema =
      field === "dbUrl" ? Joi.string().domain() : Joi.string().uri();
    const { error } = schema.validate(projectInfo[field]);
    if (error?.message) {
      setError(field, error.message);
      isValid = false;
    }
  });

  return isValid;
};
