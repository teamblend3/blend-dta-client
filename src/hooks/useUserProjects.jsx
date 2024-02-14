import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useState } from "react";

const useUserProjects = () => {
  const [currentPage, setCurrentPage] = useState(1);

  const fetchProjects = async page => {
    const res = await axios.get(`/api/users/projects?page=${page}`, {
      withCredentials: true,
    });
    if (res.data.success) {
      return res.data;
    }
    throw new Error("Fetching projects failed.");
  };

  const { isLoading, isError, error, data } = useQuery({
    queryKey: ["user-projects", currentPage],
    queryFn: () => fetchProjects(currentPage),
    staleTime: 5 * 60 * 1000,
    cacheTime: 30 * 60 * 1000,
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
