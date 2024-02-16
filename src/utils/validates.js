const validateProjectInfo = (projectInfo, setError) => {
  const fieldsToValidate = ["sheetUrl", "dbUrl"];
  let isValid = true;

  fieldsToValidate.forEach(field => {
    if (!projectInfo[field]) {
      setError(field, "없다");
      isValid = false;
    }
  });

  return isValid;
};

export default validateProjectInfo;
