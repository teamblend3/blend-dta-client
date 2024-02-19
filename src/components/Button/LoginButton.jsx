import { IoLogoGoogle } from "react-icons/io";

import Button from "./Button";
import { GOOGLE_LOGIN_BUTTON_STYLE } from "../../utils/styleConstants";
import useGoogleAuth from "../../hooks/useGoogleAuth";

function LoginButton() {
  const { login } = useGoogleAuth();

  return (
    <Button
      type="button"
      onClick={() => login()}
      style={GOOGLE_LOGIN_BUTTON_STYLE}
      disabled={false}
    >
      <IoLogoGoogle />
      Login with Google
    </Button>
  );
}

export default LoginButton;
