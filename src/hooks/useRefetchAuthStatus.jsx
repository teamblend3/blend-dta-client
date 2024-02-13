import { useEffect } from "react";
import useAuthStatus from "./useAuthStatus";

const useRefetchAuthStatus = () => {
  const { refetch } = useAuthStatus();

  useEffect(() => {
    console.log(`hi`);
    refetch();
  }, []);
};

export default useRefetchAuthStatus;
