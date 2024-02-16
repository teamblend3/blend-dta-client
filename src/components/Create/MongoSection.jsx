import FloatingInput from "../Form/FloatingInput";
import FormSelect from "../Form/FormSelect";
import FormButton from "../Form/FormButton";
import FormError from "../Form/FormError";
import useValidateDb from "../../hooks/useValidateDb";
import useProjectStore from "../../stores/useProjectStore";
import { DB_URL } from "../../utils/constants";

function MongoSection() {
  const { projectInfo, errors, setError, setProjectInfo, disabledFields } =
    useProjectStore(state => ({
      projectInfo: state.projectInfo,
      errors: state.errors,
      disabledFields: state.disabledFields,
      setProjectInfo: state.setProjectInfo,
      setError: state.setError,
      setDisabled: state.setDisabled,
    }));

  const { dbTableList, handleDatabaseSubmit } = useValidateDb();

  const handleChange = field => event => {
    setProjectInfo(field, event.target.value);
    setError(DB_URL, "");
    // error validate
  };

  return (
    <section className="p-2">
      <h2 className="font-semi-bold text-xl text-text-950 mb-2">
        1. End Point Definition
      </h2>
      <form
        onSubmit={handleDatabaseSubmit}
        className="sm:flex sm:items-baseline sm:space-x-4 space-y-2 sm:[&>*:first-child]:w-8/12 sm:[&>*:nth-child(2)]:w-2/12 sm:[&>*:last-child]:w-2/12 mt-4"
      >
        <div className="sm:flex w-full space-x-4 sm:[&>*:first-child]:w-8/12">
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
            label="password"
            value={projectInfo.dbPassword}
            handleChange={handleChange("dbPassword")}
            disabled={disabledFields.dbPassword}
          />
        </div>
        <FormSelect
          id="tableName"
          options={dbTableList}
          value={projectInfo.dbTableName}
          handleChange={handleChange("dbTableName")}
          disabled={!dbTableList.length || disabledFields.dbTableName}
        />
        <FormButton
          type="submit"
          handleClick={handleDatabaseSubmit}
          disabled={errors.dbUrl}
        >
          Submit
        </FormButton>
      </form>
      {errors[DB_URL] && <FormError errorMessage={errors[DB_URL]} />}
    </section>
  );
}

export default MongoSection;
