import axios from "axios";
import { FiLogIn } from "react-icons/fi";
import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";

import Button from "./Button";
import { MOCK_LOGIN_BUTTON_STYLE } from "../../utils/styleConstants";
import useAuthStore from "../../stores/useAuthStore";

function MockUpLoginButton() {
  const { setUser } = useAuthStore();
  const navigate = useNavigate();

  const { mutate } = useMutation({
    mutationKey: ["post-mock-login"],
    mutationFn: async () => {
      const res = await axios.post("/api/users/mock-login");
      return res.data.userInfo;
    },
    onSuccess: data => {
      setUser(data);
      navigate("/");
    },
    onError: error => {
      console.error("Google login error:", error);
      setUser(null);
    },
  });

  return (
    <Button
      type="button"
      style={MOCK_LOGIN_BUTTON_STYLE}
      disabled={false}
      onClick={() => mutate()}
    >
      <FiLogIn />
      Mockup Login
    </Button>
  );
}

export default MockUpLoginButton;
