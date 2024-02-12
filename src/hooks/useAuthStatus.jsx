import axios from "axios";
import { useQuery } from "@tanstack/react-query";

import useAuthStore from "../stores/useAuthStore";

const useAuthStatus = () => {
  const { setUser } = useAuthStore();

  const { isLoading, refetch } = useQuery({
    queryKey: ["authStatus"],
    queryFn: async () => {
      try {
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
      } catch (error) {
        if (error.response && error.response.status === 401) {
          setUser(null);
        }
        return null;
      }
    },

    retry: false,
    staleTime: Infinity,
    refetchOnWindowFocus: false,
    refetchInterval: import.meta.env.VITE_AUTH_REFRESH_INTERVAL,
  });

  return { isLoading, refetch };
};

export default useAuthStatus;
