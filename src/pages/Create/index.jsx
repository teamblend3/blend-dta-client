import FloatingInput from "../../components/Form/FloatingInput";
import FormButton from "../../components/Form/FormButton";

function CreateProject() {
  return (
    <div className="flex flex-col space-y-4 w-8/12 mx-auto max-w-screen-xl">
      <h1 className="font-bold text-2xl text-text-950 uppercase mb-2">
        Create Project
      </h1>
      <section className="p-2">
        <h1 className="font-semi-bold text-xl text-text-950 mb-2">
          1. End Point Definition
        </h1>
        <form className="[&>*:last-child]:float-right">
          <div className="sm:flex sm:items-center sm:space-x-4 sm:[&>*:first-child]:w-5/12 sm:[&>*:nth-child(2), nth-child(3)]:w-2/12 sm:[&>*:last-child]:w-3/12">
            <FloatingInput
              type="text"
              name="database_url"
              label="Database Url"
            />
            <FloatingInput type="text" name="database_id" label="Database Id" />
            <FloatingInput
              type="password"
              name="database_password"
              label="Database Password"
            />
            <FloatingInput
              type="text"
              name="database_tableName"
              label="Table Name"
            />
          </div>
          <FormButton type="submit">Submit</FormButton>
        </form>
      </section>
      <h1 className="text-accent-500 font-bold">
        description here!!! database connect result information.(create info
        component)
      </h1>
      <section className="p-2">
        <h1 className="font-semi-bold text-xl text-text-950 mb-2">
          2. Google Spread sheet Definition
        </h1>
        <form className="sm:flex sm:items-center sm:space-x-4 sm:[&>*:first-child]:w-10/12 sm:[&>*:last-child]:w-2/12">
          <FloatingInput
            type="text"
            name="database_url"
            label="Google Spread Sheet Url"
          />
          <FormButton type="button">Generate</FormButton>
        </form>
      </section>
    </div>
  );
}

export default CreateProject;
