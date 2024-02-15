import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useState } from "react";

import {
  USER_PROJECT_CACHE_TIME,
  USER_PROJECT_STALE_TIME,
} from "../utils/constants";

const useUserProjects = () => {
  const [currentPage, setCurrentPage] = useState(1);

  const fetchProjects = async page => {
    try {
      const { data } = await axios.get(`/api/users/projects?page=${page}`, {
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
    queryKey: ["user-projects", currentPage],
    queryFn: () => fetchProjects(currentPage),
    staleTime: USER_PROJECT_STALE_TIME,
    cacheTime: USER_PROJECT_CACHE_TIME,
    keepPreviousData: true,
  });

  return {
    currentPage,
    setCurrentPage,
    isLoading,
    isError,
    error,
    data,
  };
};

export default useUserProjects;
