import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useGoogleLogin } from "@react-oauth/google";

import useAuthStore from "../stores/useAuthStore";

const useGoogleAuth = () => {
  const navigate = useNavigate();
  const { setUser } = useAuthStore();

  const login = useGoogleLogin({
    onSuccess: async response => {
      const {
        data: { userInfo },
      } = await axios.post("/api/users/login", {
        code: response.code,
      });
      setUser(userInfo);
      navigate("/");
    },
    onError: error => {
      console.error("Google login error:", error);
    },
    scope: import.meta.env.VITE_GOOGLE_SHEET_SCOPE,
    flow: "auth-code",
  });

  return { login };
};

export default useGoogleAuth;
