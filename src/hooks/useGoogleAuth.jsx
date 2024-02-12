import axios from "axios";
import { useMutation } from "@tanstack/react-query";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";

import { firebaseAuth } from "../utils/firebaseAuth";
import useAuthStore from "../stores/useAuthStore";

const useGoogleAuth = () => {
  const { setUser } = useAuthStore();

  const googleProvider = new GoogleAuthProvider();
  googleProvider.addScope(import.meta.env.VITE_GOOGLE_SHEET_SCOPE);

  const handleGoogleLogin = async () => {
    const result = await signInWithPopup(firebaseAuth, googleProvider);
    const {
      user: { email, displayName, photoURL, uid },
      _tokenResponse: { oauthAccessToken, refreshToken: oauthRefreshToken },
    } = result;
    const userInfoObject = {
      email,
      displayName,
      photoURL,
      uid,
      oauthAccessToken,
      oauthRefreshToken,
    };
    const response = await axios.post("/api/users/login", userInfoObject);

    return response;
  };

  const { mutate } = useMutation({
    mutationFn: handleGoogleLogin,
    onSuccess: result => {
      const { data } = result;

      setUser(data.userInfo);
    },
  });

  return mutate;
};

export default useGoogleAuth;
