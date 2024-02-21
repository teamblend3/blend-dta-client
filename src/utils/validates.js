import Joi from "joi";

const validateProjectInfo = (projectInfo, setError) => {
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

export default validateProjectInfo;
