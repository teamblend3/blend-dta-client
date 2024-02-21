import axios from "axios";
import useAuthStore from "../stores/useAuthStore";

const useLogout = () => {
  const { setUser } = useAuthStore();

  const logout = async () => {
    try {
      await axios.get("/api/users/logout");
      setUser({});
      window.location.href = "/";
    } catch (error) {
      console.error("Logout failed:", error);
    }
  };

  return logout;
};

export default useLogout;
