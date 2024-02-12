import { useState } from "react";
import axios from "axios";
import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";

import useAuthStore from "../stores/useAuthStore";
import useProjectStore from "../stores/useProjectStore";

const useValidateDb = () => {
  const DB_URL = "dbUrl";
  const DB_ID = "dbId";
  const DB_PASSWORD = "dbPassword";
  const DB_TABLE_NAME = "dbTableName";

  const [dbTableList, setDbTableList] = useState([]);
  const [err, setErr] = useState("");
  const { projectInfo, setInfoValue, setInfoDisabled } = useProjectStore();
  const { setUser } = useAuthStore();
  const navigate = useNavigate();

  const { mutate } = useMutation({
    mutationFn: data => axios.post("/api/projects/validation/db", data),
    onSuccess: res => {
      setDbTableList(res.data.databaseList);
      setInfoValue({
        name: DB_TABLE_NAME,
        value: res.data.databaseList[0].name,
      });
      setInfoDisabled({ name: DB_URL, disabled: true });
      setInfoDisabled({ name: DB_ID, disabled: true });
      setInfoDisabled({ name: DB_PASSWORD, disabled: true });
      setErr("");
    },
    onError: error => {
      if (error.response && error.response.status === 401) {
        setUser(null);
        setErr(`Error! ${error.response.statusText}`);
        return navigate("/login");
      }
      setErr(`Fail connect Database! ${error.response.data.message}`);
      setDbTableList([]);
      return null;
    },
  });

  const handleDatabaseSubmit = async e => {
    e.preventDefault();
    const {
      dbUrl: { value: dbUrl, error },
      dbId: { value: dbId },
      dbPassword: { value: dbPassword },
    } = projectInfo;

    if (error) {
      return;
    }

    const payload = {
      dbUrl,
      dbId,
      dbPassword,
    };

    mutate(payload);
  };

  return { dbTableList, err, setErr, handleDatabaseSubmit };
};

export default useValidateDb;
