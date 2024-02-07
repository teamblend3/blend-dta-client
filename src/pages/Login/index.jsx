import axios from "axios";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { useMutation } from "@tanstack/react-query";
import { FaGoogle } from "react-icons/fa";
import { firebaseAuth } from "../../utils/firebaseAuth";
import useAuthStore from "../../stores/useAuthStore";

function Login() {
  const { setUserInfo, setLogin } = useAuthStore();
  const googleProvider = new GoogleAuthProvider();

  const handleGoogleLogin = async () => {
    const result = await signInWithPopup(firebaseAuth, googleProvider);

    const {
      user: { email, displayName, photoURL, uid },
    } = result;

    const userInfoObject = {
      email,
      displayName,
      photoURL,
      uid,
    };

    const response = await axios.post("/api/users/login", userInfoObject);

    return response;
  };

  const { mutate } = useMutation({
    mutationFn: handleGoogleLogin,
    onSuccess: result => {
      const { data } = result;

      setLogin();
      setUserInfo(data.userInfo);
    },
  });

  return (
    <div className="flex h-full justify-center items-center">
      <button
        type="button"
        className="text-text-950 font-bold bg-primary-500 hover:bg-primary-600 focus:ring-4 focus:ring-primary-300 font-medium rounded-sm text-base px-5 py-2.5 flex items-center gap-1"
        onClick={mutate}
      >
        <FaGoogle />
        Login with Google
      </button>
    </div>
  );
}

export default Login;
