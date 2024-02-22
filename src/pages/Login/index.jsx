import { GoogleOAuthProvider } from "@react-oauth/google";

import LoginButton from "../../components/Button/LoginButton";
import Container from "../../components/Layout/Container";

function Login() {
  return (
    <Container>
      <GoogleOAuthProvider clientId={import.meta.env.VITE_GOOGLE_CLIENT_ID}>
        <LoginButton />
      </GoogleOAuthProvider>
    </Container>
  );
}

export default Login;
