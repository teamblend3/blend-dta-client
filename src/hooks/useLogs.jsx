import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const useLogs = () => {
  return useQuery({
    queryKey: ["get-logs"],
    queryFn: async () => {
      const res = await axios.get("/api/users/projects/logs");
      return res.data.logs;
    },
    refetchOnWindowFocus: true,
    refetchOnMount: true,
  });
};

export default useLogs;
