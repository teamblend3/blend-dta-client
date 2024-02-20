import axios from "axios";
import { useEffect } from "react";
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

  const { isLoading, isError, error, data, refetch } = useQuery({
    queryKey: ["user-projects"],
    queryFn: () => fetchProjects(),
    staleTime: USER_PROJECT_STALE_TIME,
    cacheTime: USER_PROJECT_CACHE_TIME,
    enabled: !queryClient.getQueryData(["user-projects"]),
  });

  useEffect(() => {
    const handleProjectUpdate = async () => {
      try {
        const response = await axios.post("/api/createProject");

        if (response.data.success) {
          await refetch();
        }
      } catch (err) {
        console.err("Project Update failed:", err);
      }
    };

    refetch();
    handleProjectUpdate();
  }, [refetch]);

  return {
    isLoading,
    isError,
    error,
    data,
  };
};

export default useUserProjects;
