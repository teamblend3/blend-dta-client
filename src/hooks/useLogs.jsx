import axios from "axios";
import { useQuery } from "@tanstack/react-query";

const useLogs = () => {
  return useQuery({
    queryKey: ["get-logs"],
    queryFn: async () => {
      const res = await axios.get("/api/users/projects/logs");
      return res.data.logs;
    },
    refetchOnMount: true,
  });
};

export default useLogs;
