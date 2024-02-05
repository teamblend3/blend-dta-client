import { useNavigate } from "react-router-dom";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth } from "../../firebaseConfig";
import ServiceInfo from "../../components/Info/ServiceInfo";
import useAuthStore from "../../stores/useAuthStore";

function Login() {
  const navigate = useNavigate();

  const handleGoogleLogin = async () => {
    try {
      const provider = new GoogleAuthProvider();
      const result = await signInWithPopup(auth, provider);
      const { user } = result;

      useAuthStore.setState({ isAuth: true });

      const { email, displayName, photoURL, metadata } = user;
      const idToken = await user.getIdToken();

      const dataToSend = {
        idToken,
        email,
        displayName,
        avatarUrl: photoURL,
        createdAt: metadata.creationTime,
      };

      navigate("/projects");
    } catch (err) {
      console.log("Google Login Failed", err.message);
    }
  };

  return (
    <div className="w-7/12 xl:flex flex-cole items-center justify-center space-x-20 xl:w-8/12 2xl:w-6/12 mx-auto py-20 max-w-screen-xl">
      <div className="mt-20 font-bold text-center">
        <ServiceInfo />
        <button
          type="button"
          className="text-lg text-text-50 bg-[#4285F4] hover:bg-[#4285F4]/90 focus:ring-4 focus:outline-none focus:ring-[#4285F4]/50 font-medium rounded-lg px-10 py-4 text-center inline-flex items-center dark:focus:ring-[#4285F4]/55 me-2 mt-5"
          onClick={handleGoogleLogin}
        >
          <svg
            className="w-4 h-4 me-2"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 18 19"
          >
            <path
              fillRule="evenodd"
              d="M8.842 18.083a8.8 8.8 0 0 1-8.65-8.948 8.841 8.841 0 0 1 8.8-8.652h.153a8.464 8.464 0 0 1 5.7 2.257l-2.193 2.038A5.27 5.27 0 0 0 9.09 3.4a5.882 5.882 0 0 0-.2 11.76h.124a5.091 5.091 0 0 0 5.248-4.057L14.3 11H9V8h8.34c.066.543.095 1.09.088 1.636-.086 5.053-3.463 8.449-8.4 8.449l-.186-.002Z"
              clipRule="evenodd"
            />
          </svg>
          Login with Google
        </button>
      </div>
    </div>
  );
}

export default Login;
