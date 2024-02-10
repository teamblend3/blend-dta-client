import axios from "axios";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { useMutation } from "@tanstack/react-query";
import { IoLogoGoogle } from "react-icons/io";

import { firebaseAuth } from "../../utils/firebaseAuth";
import useAuthStore from "../../stores/useAuthStore";

function Login() {
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

  return (
    <div className="flex h-full justify-center items-center">
      <button
        type="button"
        className="flex gap-2 items-center text-text-950 bg-primary-400 hover:bg-primary-300 focus:ring-4 focus:outline-none focus:ring-primary font-bold rounded-md text-xl w-full sm:w-auto px-6 py-2.5 text-center hover:-translate-y-0.5 hover:shadow-xl transform transition-transform ease-in-out duration-150"
        onClick={mutate}
      >
        <IoLogoGoogle />
        Login with Google
      </button>
    </div>
  );
}

export default Login;
