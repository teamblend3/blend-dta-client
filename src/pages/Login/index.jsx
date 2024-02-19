import { GoogleOAuthProvider } from "@react-oauth/google";

import LoginButton from "../../components/Button/LoginButton";

function Login() {
  return (
    <div className="flex h-full justify-center items-center">
      <GoogleOAuthProvider clientId={import.meta.env.VITE_GOOGLE_CLIENT_ID}>
        <LoginButton />
      </GoogleOAuthProvider>
    </div>
  );
}

export default Login;
