import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import { useParams } from "react-router-dom";

import {
  USER_PROJECT_CACHE_TIME,
  USER_PROJECT_STALE_TIME,
} from "../utils/constants";

const useProject = () => {
  const { projectId } = useParams();
  const [collection, setCollection] = useState(null);

  const { data, error, isLoading, isError } = useQuery({
    queryKey: ["get-project", projectId],
    queryFn: async () => {
      const response = await axios.get(`/api/projects/${projectId}`);
      return response.data;
    },
    staleTime: USER_PROJECT_STALE_TIME,
    cacheTime: USER_PROJECT_CACHE_TIME,
    refetchOnMount: false,
    refetchOnReconnect: "onWindowFocus",
    refetchIntervalInBackground: true,
  });

  return {
    collection,
    setCollection,
    project: data?.project,
    schema: data?.schema,
    dataPreview: data?.dataPreview,
    error,
    isLoading,
    isError,
  };
};

export default useProject;
