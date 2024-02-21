import { useState } from "react";
import axios from "axios";
import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";

import useAuthStore from "../stores/useAuthStore";
import useProjectStore from "../stores/useProjectStore";

const useValidateDb = () => {
  const [dbTableList, setDbTableList] = useState([]);
  const [err, setErr] = useState("");
  const navigate = useNavigate();

  const { projectInfo, setProjectInfo, setError, setDisabled } =
    useProjectStore();
  const { setUser } = useAuthStore();

  const validateDatabase = async data => {
    try {
      const response = await axios.post("/api/projects/validation/db", data);
      return response.data;
    } catch (error) {
      if (error.response) {
        if (error.response.status === 401) {
          setUser(null);
          navigate("/login");
        }
        throw new Error(
          error.response.data.message || error.response.statusText,
        );
      } else {
        throw error;
      }
    }
  };

  const { mutate } = useMutation({
    mutationFn: validateDatabase,
    onSuccess: data => {
      const { databaseList } = data;
      setDbTableList(databaseList);
      setProjectInfo("dbTableName", databaseList[0].name);
      ["dbUrl", "dbId", "dbPassword"].forEach(field =>
        setDisabled(field, true),
      );
      setError("dbUrl", "");
    },
    onError: error => {
      setError("dbUrl", error.message);
      setDbTableList([]);
    },
  });

  const handleDatabaseSubmit = e => {
    e.preventDefault();
    const { dbUrl, dbId, dbPassword } = projectInfo;

    if (dbUrl.error) {
      return;
    }

    mutate({
      dbUrl,
      dbId,
      dbPassword,
    });
  };

  return { dbTableList, err, setErr, handleDatabaseSubmit };
};

export default useValidateDb;
