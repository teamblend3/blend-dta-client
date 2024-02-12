import axios from "axios";
import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import useAuthStore from "../stores/useAuthStore";
import useProjectStore from "../stores/useProjectStore";

const useGenerateUrl = () => {
  const SHEET_URL = "sheetUrl";
  const { setUser } = useAuthStore();
  const { setInfoValue, setInfoError, setInfoDisabled } = useProjectStore();
  const navigate = useNavigate();

  const { mutate } = useMutation({
    mutationFn: () =>
      axios.get("/api/projects/generation/sheet", { withCredentials: true }),
    onSuccess: res => {
      const {
        data: { success },
      } = res;

      if (success) {
        setInfoValue({ name: SHEET_URL, value: res.data.sheetUrl });
        setInfoError({ name: SHEET_URL, error: "" });
        setInfoDisabled({ name: SHEET_URL, disabled: true });
      } else {
        setInfoValue({ name: SHEET_URL, value: "" });
        setInfoError({
          name: SHEET_URL,
          error: "Error! Interval Server Error",
        });
      }
    },
    onError: error => {
      if (error.response && error.response.status === 401) {
        setInfoError({
          name: SHEET_URL,
          error: `Error! ${error.response.statusText}`,
        });
        setUser(null);
        return navigate("/login");
      }
      setInfoError({
        name: SHEET_URL,
        error: `Fail generate sheet! ${error.response.data.message}`,
      });
      return null;
    },
  });
  return { generateUrl: mutate };
};

export default useGenerateUrl;
