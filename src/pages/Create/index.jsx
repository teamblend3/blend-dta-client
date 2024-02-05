import { useState } from "react";
import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import FloatingInput from "../../components/Form/FloatingInput";
import FormButton from "../../components/Form/FormButton";
import SyncButton from "../../components/Form/SyncButton";
import useInput from "../../hooks/useInput";
import FormSelect from "../../components/Form/FormSelect";
import FormError from "../../components/Form/FormError";

function CreateProject() {
  const databaseUrl = useInput("");
  const databaseId = useInput("");
  const databasePassword = useInput("");
  const [tableName, setTableName] = useState([]);
  const sheetUrl = useInput("");
  const validateDb = useMutation({
    mutationFn: data => axios.post("/api/projects/validation/db", data),
    onSuccess: res => {
      setTableName(res.data.databaseList);
    },
    onError: err => {
      databaseUrl.setError(err.message);
    },
    onSettled: () => {},
  });

  const handleDatabaseSubmit = async e => {
    e.preventDefault();
    const payload = {
      databaseUrl: databaseUrl.value,
      databaseId: databaseId.value,
      databasePassword: databasePassword.value,
    };
    validateDb.mutate(payload);
  };

  const handleSheetUrlSubmit = e => {
    e.preventDefault();
  };

  const handleSynchronize = e => {
    e.preventDefault();
  };

  const handleGenerateSheetUrl = () => {};

  return (
    <div className="flex justify-center items-center h-full">
      <div className="flex flex-col space-y-4 xl:w-8/12 2xl:w-6/12 mx-auto max-w-screen-xl">
        <h1 className="font-bold text-2xl text-text-950 uppercase mb-2">
          Create Project
        </h1>
        <section className="p-2">
          <h2 className="font-semi-bold text-xl text-text-950 mb-2">
            1. End Point Definition
          </h2>
          <form onSubmit={handleDatabaseSubmit} className="">
            <div className="sm:flex sm:items-baseline sm:space-x-4 space-y-2 sm:[&>*:first-child]:w-4/12 sm:[&>*:nth-child(2), &>*:nth-child(3)]:w-2/12 sm:[&>*:nth-child(4)]:w-2/12 sm:[&>*:last-child]:w-2/12">
              <FloatingInput
                type="text"
                name="database_url"
                label="Database Url"
                {...databaseUrl}
              />
              <FloatingInput
                type="text"
                name="database_id"
                label="Database Id"
                {...databaseId}
              />
              <FloatingInput
                type="password"
                name="database_password"
                label="password"
                {...databasePassword}
              />
              <FormSelect id="tableName" options={tableName} />
              <FormButton type="submit">Submit</FormButton>
            </div>
          </form>
          {databaseUrl.error && <FormError setShow={databaseUrl.setError} />}
        </section>
        <section className="p-2">
          <h2 className="font-semi-bold text-xl text-text-950 mb-2">
            2. Google Spread sheet Definition
          </h2>
          <form
            onSubmit={handleSheetUrlSubmit}
            className="sm:flex sm:items-start sm:space-x-4 space-y-2 sm:[&>*:first-child]:w-8/12 sm:[&>*:nth-child(2)]:w-2/12 sm:[&>*:last-child]:w-2/12"
          >
            <FloatingInput
              type="text"
              name="sheetUrl"
              label="Google Spread Sheet Url"
              {...sheetUrl}
            />
            <FormButton handleClick={handleGenerateSheetUrl} type="button">
              Generate
            </FormButton>
            <FormButton type="submit">Submit</FormButton>
          </form>
          {sheetUrl.error && <FormError setShow={sheetUrl.setError} />}
        </section>
        <SyncButton type="button" handleClick={handleSynchronize}>
          Synchronize
        </SyncButton>
      </div>
    </div>
  );
}

export default CreateProject;
