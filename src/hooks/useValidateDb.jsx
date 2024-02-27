import axios from "axios";
import { useState } from "react";
import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";

import useAuthStore from "../stores/useAuthStore";
import useProjectStore from "../stores/useProjectStore";
import { DB_ID, DB_PASSWORD, DB_TABLENAME, DB_URL } from "../utils/constants";

const useValidateDb = () => {
  const [dbTableList, setDbTableList] = useState([]);
  const [err, setErr] = useState("");
  const navigate = useNavigate();

  const { projectInfo, setProjectInfo, setError, setDisabled } =
    useProjectStore();
  const {
    userInfo: { userId },
    setUser,
  } = useAuthStore();

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
      setProjectInfo(DB_TABLENAME, databaseList[0].name);
      [DB_URL, DB_ID, DB_PASSWORD].forEach(field => setDisabled(field, true));
      if (userId === import.meta.env.VITE_MOCK_AUTH_ID) {
        setDisabled(DB_TABLENAME, true);
      }
      setError(DB_URL, "");
      setError(DB_TABLENAME, "");
    },
    onError: error => {
      setError(DB_URL, error.message);
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
