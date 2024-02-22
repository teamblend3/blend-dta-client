import axios from "axios";
import { useQuery } from "@tanstack/react-query";

import useAuthStore from "../stores/useAuthStore";

const fetchUserAuthStatus = async setUser => {
  try {
    const { data } = await axios.get("/api/users/validate", {
      withCredentials: true,
    });
    const { success, userInfo } = data;

    if (success) {
      setUser(userInfo);
    } else {
      setUser(null);
    }

    return data;
  } catch (error) {
    if (error.response?.status === 401) {
      setUser(null);
    }
    throw new Error(error.response?.data?.message || "Authentication failed");
  }
};

const useAuthStatus = () => {
  const { setUser } = useAuthStore();

  const { isLoading, refetch } = useQuery({
    queryKey: ["authStatus"],
    queryFn: () => fetchUserAuthStatus(setUser),
    retry: false,
    staleTime: Infinity,
    refetchInterval: import.meta.env.VITE_AUTH_REFRESH_INTERVAL,
  });

  return { isLoading, refetch };
};

export default useAuthStatus;
