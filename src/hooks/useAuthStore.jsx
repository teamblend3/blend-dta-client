import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import useAuthStore from "../stores/useAuthStore";

const useAuthStatus = () => {
  const { setUser } = useAuthStore();

  const { isLoading } = useQuery({
    queryKey: ["authStatus"],
    queryFn: async () => {
      const res = await axios.get("/api/users/validate", {
        withCredentials: true,
      });
      const { success, userInfo } = res.data;

      if (success) {
        setUser(userInfo);
      } else {
        setUser(null);
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
