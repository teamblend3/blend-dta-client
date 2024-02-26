import { useEffect } from "react";

import FloatingInput from "../Form/FloatingInput";
import FormSelect from "../Form/FormSelect";
import FormError from "../Form/FormError";
import useValidateDb from "../../hooks/useValidateDb";
import useProjectStore from "../../stores/useProjectStore";
import Button from "../Button/Button";
import {
  DB_ID,
  DB_PASSWORD,
  DB_TABLENAME,
  DB_URL,
  SHEET_URL,
} from "../../utils/constants";
import { validateField } from "../../utils/validates";
import useAuthStore from "../../stores/useAuthStore";

function MongoSection() {
  const {
    userInfo: { userId },
  } = useAuthStore();
  const {
    projectInfo,
    errors,
    setError,
    setProjectInfo,
    setDisabled,
    disabledFields,
    resetStore,
  } = useProjectStore(state => ({
    projectInfo: state.projectInfo,
    errors: state.errors,
    disabledFields: state.disabledFields,
    setProjectInfo: state.setProjectInfo,
    setDisabled: state.setDisabled,
    setError: state.setError,
    resetStore: state.resetStore,
  }));

  useEffect(() => {
    resetStore();
    if (userId === import.meta.env.VITE_MOCK_AUTH_ID) {
      setProjectInfo(DB_URL, "cluster0.kbk2xmu.mongodb.net");
      setProjectInfo(DB_ID, "teamBlend");
      setProjectInfo(DB_PASSWORD, "HNhA9YPBAiRH68Y6");
      setProjectInfo(SHEET_URL, "MOCK AUTH CAN'T GENERATE GOOGLE SHEET");
      setDisabled(DB_URL, true);
      setDisabled(DB_ID, true);
      setDisabled(DB_PASSWORD, true);
    }
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
          name={DB_URL}
          label="Database Url"
          value={projectInfo.dbUrl}
          handleChange={handleChange(DB_URL)}
          disabled={disabledFields.dbUrl}
        />
        <FloatingInput
          type="text"
          name={DB_ID}
          label="Database Id"
          value={projectInfo.dbId}
          handleChange={handleChange(DB_ID)}
          disabled={disabledFields.dbId}
        />
        <FloatingInput
          type="password"
          name={DB_PASSWORD}
          label="Password"
          value={projectInfo.dbPassword}
          handleChange={handleChange(DB_PASSWORD)}
          disabled={disabledFields.dbPassword}
        />
        <FormSelect
          id="tableName"
          options={dbTableList}
          value={projectInfo.dbTableName}
          handleChange={handleChange(DB_TABLENAME)}
          disabled={!dbTableList.length || Boolean(disabledFields.dbTableName)}
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
