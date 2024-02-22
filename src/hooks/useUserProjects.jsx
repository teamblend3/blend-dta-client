import axios from "axios";
import { useQuery } from "@tanstack/react-query";

const useUserProjects = () => {
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
    refetchOnMount: true,
  });

  return {
    isLoading,
    isError,
    error,
    data,
  };
};

export default useUserProjects;
