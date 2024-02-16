import axios from "axios";
import { useQueryClient, useQuery } from "@tanstack/react-query";

import {
  USER_PROJECT_CACHE_TIME,
  USER_PROJECT_STALE_TIME,
} from "../utils/constants";

const useUserProjects = () => {
  const queryClient = useQueryClient();

  const fetchProjects = async () => {
    try {
      const { data } = await axios.get(`/api/users/projects`, {
        withCredentials: true,
      });
      if (!data.success) {
        throw new Error("Fetching projects failed due to server response.");
      }
      return data;
    } catch (error) {
      throw new Error(
        error.response?.data?.message || "Fetching projects failed.",
      );
    }
  };

  const { isLoading, isError, error, data } = useQuery({
    queryKey: ["user-projects"],
    queryFn: () => fetchProjects(),
    staleTime: USER_PROJECT_STALE_TIME,
    cacheTime: USER_PROJECT_CACHE_TIME,
    enabled: !queryClient.getQueryData(["user-projects"]),
  });

  return {
    isLoading,
    isError,
    error,
    data,
  };
};

export default useUserProjects;
