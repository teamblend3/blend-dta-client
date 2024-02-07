import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import useAuthStore from "../stores/useAuthStore";

const useAuthStatus = () => {
  const { setLogin, setLogout, setUser } = useAuthStore();

  const { isLoading } = useQuery({
    queryKey: ["authStatus"],
    queryFn: async () => {
      const res = await axios.get("/api/users/validate", {
        withCredentials: true,
      });

      const { success, userInfo } = res.data;

      if (success) {
        setLogin();
        setUser(userInfo);
      } else {
        setLogout();
        setUser({});
      }

      return res.data;
    },

    retry: false,
    staleTime: 60 * 1000,
    refetchOnWindowFocus: false,
  });

  return { isLoading };
};

export default useAuthStatus;
