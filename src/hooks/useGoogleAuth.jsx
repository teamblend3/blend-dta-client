import axios from "axios";
import { useMutation } from "@tanstack/react-query";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";

import useAuthStore from "../stores/useAuthStore";
import extractUserInfo from "../utils/hooksUtils";
import { firebaseAuth } from "../utils/firebaseAuth";

const useGoogleAuth = () => {
  const { setUser } = useAuthStore();

  const googleProvider = new GoogleAuthProvider();
  googleProvider.addScope(import.meta.env.VITE_GOOGLE_SHEET_SCOPE);

  const handleGoogleLogin = async () => {
    try {
      const result = await signInWithPopup(firebaseAuth, googleProvider);
      const userInfo = extractUserInfo(result);

      const { data } = await axios.post("/api/users/login", userInfo);

      return data;
    } catch (error) {
      console.error("Error during Google login:", error);
      throw new Error(error.message);
    }
  };

  const { mutate } = useMutation({
    mutationFn: handleGoogleLogin,
    onSuccess: data => {
      setUser(data.userInfo);
    },
    onError: error => {
      console.error("Google login error:", error);
    },
  });

  return mutate;
};

export default useGoogleAuth;
