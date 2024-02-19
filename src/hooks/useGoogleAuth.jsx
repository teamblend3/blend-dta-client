import axios from "axios";
import { useGoogleLogin } from "@react-oauth/google";

import useAuthStore from "../stores/useAuthStore";

const useGoogleAuth = () => {
  const { setUser } = useAuthStore();

  const login = useGoogleLogin({
    onSuccess: async response => {
      const {
        data: { userInfo },
      } = await axios.post("/api/users/login", {
        code: response.code,
      });
      setUser(userInfo);
    },
    onError: error => {
      console.error("Google login error:", error);
    },
    scope: "https://www.googleapis.com/auth/spreadsheets",
    flow: "auth-code",
  });

  return { login };
};

export default useGoogleAuth;
