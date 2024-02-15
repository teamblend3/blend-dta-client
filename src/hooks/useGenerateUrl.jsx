import axios from "axios";
import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";

import useAuthStore from "../stores/useAuthStore";
import useProjectStore from "../stores/useProjectStore";

const useGenerateUrl = () => {
  const SHEET_URL = "sheetUrl";
  const navigate = useNavigate();
  const { setUser } = useAuthStore();
  const { setProjectInfo, setError, setDisabled } = useProjectStore();

  const generateSheetUrl = async () => {
    const res = await axios.get("/api/projects/generation/sheet", {
      withCredentials: true,
    });
    return res;
  };

  const { mutate } = useMutation({
    mutationFn: generateSheetUrl,
    onSuccess: res => {
      const { sheetUrl } = res.data;
      if (sheetUrl) {
        setProjectInfo(SHEET_URL, sheetUrl);
        setError(SHEET_URL, "");
        setDisabled(SHEET_URL, true);
      } else {
        setError({
          name: SHEET_URL,
          error: "Error! Failed to generate URL.",
        });
      }
    },
    onError: error => {
      let errorMessage = "Error! Something went wrong.";
      if (error.response) {
        if (error.response.status === 401) {
          setUser(null);
          navigate("/login");
          return;
        }
        errorMessage = `Error! ${error.response.data.message || error.response.statusText}`;
      }
      setError(SHEET_URL, errorMessage);
    },
  });

  return { generateUrl: mutate };
};

export default useGenerateUrl;
