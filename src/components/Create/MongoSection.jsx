import { useState } from "react";
import axios from "axios";
import { useMutation } from "@tanstack/react-query";

import useInput from "../../hooks/useInput";
import FloatingInput from "../Form/FloatingInput";
import FormSelect from "../Form/FormSelect";
import FormButton from "../Form/FormButton";
import FormError from "../Form/FormError";

function MongoSection() {
  const [tableName, setTableName] = useState([]);
  const databaseUrl = useInput("");
  const databaseId = useInput("");
  const databasePassword = useInput("");
  const validateDb = useMutation({
    mutationFn: data => axios.post("/api/projects/validation/db", data),
    onSuccess: res => {
      setTableName(res.data.databaseList);
      databaseUrl.setError("");
    },
    onError: err => {
      databaseUrl.setError(
        `Fail connect Database! ${err.response.data.message}`,
      );
      setTableName([]);
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
        </div>
        <FormSelect
          id="tableName"
          options={tableName}
          disabled={!tableName.length}
        />
        <FormButton type="submit">Submit</FormButton>
      </form>
      {databaseUrl.error && (
        <FormError
          errorMessage={databaseUrl.error}
          setShow={databaseUrl.setError}
        />
      )}
    </section>
  );
}

export default MongoSection;
