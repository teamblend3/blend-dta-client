import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import { TRANSFER_DATA_DONE } from "../utils/constants";

const useTaskStatusQuery = (sheetUrl, updateStepStatus) => {
  return useQuery({
    queryKey: ["get-taskstatus"],
    queryFn: async () => {
      const url = new URL(sheetUrl);
      const spreadsheetId = url.pathname.split("/")[3];
      const { data } = await axios.get(
        `/api/projects/${spreadsheetId}/taskstatus`,
        {
          withCredentials: true,
        },
      );
      updateStepStatus(data?.status);
      return data;
    },
    enabled: Boolean(sheetUrl),
    refetchInterval: data =>
      data?.status === TRANSFER_DATA_DONE ? false : 1000,
  });
};

export default useTaskStatusQuery;
