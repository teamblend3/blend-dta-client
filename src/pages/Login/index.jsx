import { IoLogoGoogle } from "react-icons/io";

import useGoogleAuth from "../../hooks/useGoogleAuth";
import Button from "../../components/Button/Button";
import { GOOGLE_LOGIN_BUTTON_STYLE } from "../../utils/styleConstants";

function Login() {
  const mutate = useGoogleAuth();

  return (
    <div className="flex h-full justify-center items-center">
      <Button
        type="button"
        onClick={mutate}
        style={GOOGLE_LOGIN_BUTTON_STYLE}
        disabled={false}
      >
        <IoLogoGoogle />
        Login with Google
      </Button>
    </div>
  );
}

export default Login;
