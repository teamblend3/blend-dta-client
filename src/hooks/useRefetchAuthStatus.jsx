import { useEffect } from "react";
import useAuthStatus from "./useAuthStatus";

const useRefetchAuthStatus = () => {
  const { refetch } = useAuthStatus();

  useEffect(() => {
    refetch();
  }, []);
};

export default useRefetchAuthStatus;
