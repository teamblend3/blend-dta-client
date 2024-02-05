import { useNavigate } from "react-router-dom";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";

import GoogleButton from "react-google-button";
import { auth } from "../../firebaseConfig";
import ServiceInfo from "../../components/Info/ServiceInfo";
import useAuthStore from "../../stores/useAuthStore";

function Login() {
  const navigate = useNavigate();

  const googleButtonStyle = {
    display: "flex",
    justifyContent: "center",
    marginTop: "35px",
  };

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
      <div className="mt-40 font-bold text-center">
        <ServiceInfo text="Welcome to Our Service!" className="text-xl" />
        <br />
        <ServiceInfo text="To use our service, you will need to sign in with Google." />
        <br />
        <ServiceInfo text="Try our TeamBlend service with a simple Google login!" />
        <div style={googleButtonStyle}>
          <GoogleButton onClick={handleGoogleLogin} />
        </div>
      </div>
    </div>
  );
}

export default Login;
