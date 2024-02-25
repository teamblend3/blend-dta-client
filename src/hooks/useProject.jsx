import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useState } from "react";
import { useParams } from "react-router-dom";

import {
  USER_PROJECT_CACHE_TIME,
  USER_PROJECT_STALE_TIME,
} from "../utils/constants";

const useProject = initialCollection => {
  const { projectId } = useParams();
  const [collection, setCollection] = useState(initialCollection || null);

  const { data, error, isLoading, isError } = useQuery({
    queryKey: ["get-project", projectId, collection],
    queryFn: async () => {
      const encodedCollection = encodeURIComponent(collection);
      const response = await axios.get(
        `/api/projects/${projectId}?collection=${encodedCollection}`,
      );
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
