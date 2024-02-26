import { GoogleOAuthProvider } from "@react-oauth/google";

import Container from "../../components/Layout/Container";
import MockUpLoginButton from "../../components/Button/MockUpLoginButton";
import LoginButton from "../../components/Button/LoginButton";

function Login() {
  return (
    <Container>
      <MockUpLoginButton />
      <GoogleOAuthProvider clientId={import.meta.env.VITE_GOOGLE_CLIENT_ID}>
        <LoginButton />
      </GoogleOAuthProvider>
    </Container>
  );
}

export default Login;
