import FloatingInput from "../Form/FloatingInput";
import FormSelect from "../Form/FormSelect";
import FormButton from "../Form/FormButton";
import FormError from "../Form/FormError";
import useProjectInput from "../../hooks/useProjectInput";
import useValidateDb from "../../hooks/useValidateDb";

function MongoSection() {
  const dbUrl = useProjectInput({ name: "dbUrl" });
  const dbId = useProjectInput({ name: "dbId" });
  const dbPassword = useProjectInput({ name: "dbPassword" });
  const dbTableName = useProjectInput({ name: "dbTableName" });

  const { dbTableList, err, setErr, handleDatabaseSubmit } = useValidateDb();

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
            name="database_url"
            label="Database Url"
            {...dbUrl}
          />
          <FloatingInput
            type="text"
            name="database_id"
            label="Database Id"
            {...dbId}
          />
          <FloatingInput
            type="password"
            name="database_password"
            label="password"
            {...dbPassword}
          />
        </div>
        <FormSelect
          id="tableName"
          options={dbTableList}
          {...dbTableName}
          disabled={!dbTableList.length || Boolean(dbUrl.error)}
        />
        <FormButton
          type="submit"
          handleClick={handleDatabaseSubmit}
          disabled={Boolean(dbUrl.error)}
        >
          Submit
        </FormButton>
      </form>
      {(dbUrl.error || err) && (
        <FormError
          errorMessage={dbUrl.error || err}
          setShow={dbUrl.setError || setErr}
        />
      )}
    </section>
  );
}

export default MongoSection;
