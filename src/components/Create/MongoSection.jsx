import { useEffect } from "react";

import FloatingInput from "../Form/FloatingInput";
import FormSelect from "../Form/FormSelect";
import FormError from "../Form/FormError";
import useValidateDb from "../../hooks/useValidateDb";
import useProjectStore from "../../stores/useProjectStore";
import Button from "../Button/Button";
import { DB_URL } from "../../utils/constants";
import { validateField } from "../../utils/validates";

function MongoSection() {
  const {
    projectInfo,
    errors,
    setError,
    setProjectInfo,
    disabledFields,
    resetStore,
  } = useProjectStore(state => ({
    projectInfo: state.projectInfo,
    errors: state.errors,
    disabledFields: state.disabledFields,
    setProjectInfo: state.setProjectInfo,
    setError: state.setError,
    resetStore: state.resetStore,
  }));

  useEffect(() => {
    resetStore();
  }, []);

  const { dbTableList, handleDatabaseSubmit } = useValidateDb();

  const handleChange = field => e => {
    const { value } = e.target;
    const errorMessage = validateField(field, value);
    setProjectInfo(field, value);
    setError(field, errorMessage);
  };

  const isSubmitDisabled = !projectInfo.dbUrl || Boolean(errors[DB_URL]);

  return (
    <section className="p-2">
      <h2 className="font-semi-bold text-xl text-text-950 mb-2">
        1. End Point Definition
      </h2>
      <form
        onSubmit={handleDatabaseSubmit}
        className="sm:flex sm:items-baseline sm:space-x-4 space-y-2 sm:[&>*:first-child]:w-4/12 sm:[&>*:nth-child(2)]:w-2/12 sm:[&>*:nth-child(3)]:w-2/12 sm:[&>*:nth-child(4)]:w-2/12  sm:[&>*:last-child]:w-2/12 mt-4"
      >
        <FloatingInput
          type="text"
          name="dbUrl"
          label="Database Url"
          value={projectInfo.dbUrl}
          handleChange={handleChange("dbUrl")}
          disabled={disabledFields.dbUrl}
        />
        <FloatingInput
          type="text"
          name="dbId"
          label="Database Id"
          value={projectInfo.dbId}
          handleChange={handleChange("dbId")}
          disabled={disabledFields.dbId}
        />
        <FloatingInput
          type="password"
          name="dbPassword"
          label="Password"
          value={projectInfo.dbPassword}
          handleChange={handleChange("dbPassword")}
          disabled={disabledFields.dbPassword}
        />
        <FormSelect
          id="tableName"
          options={dbTableList}
          value={projectInfo.dbTableName}
          handleChange={handleChange("dbTableName")}
          disabled={!(dbTableList.length || disabledFields.dbTableName)}
        />
        <Button type="submit" disabled={isSubmitDisabled}>
          Submit
        </Button>
      </form>
      {errors[DB_URL] && <FormError errorMessage={errors[DB_URL]} />}
    </section>
  );
}

export default MongoSection;
