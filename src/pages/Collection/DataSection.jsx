import PropTypes from "prop-types";

import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useParams } from "react-router-dom";

import Schema from "./Schema";
import TextArea from "../../components/Form/TextArea";
import Loading from "../../components/shared/Loading";

import {
  DATA_PREVIEWER_STYLE,
  UPDATED_PREVIEWER_STYLE,
} from "../../utils/styleConstants";
import { transformData } from "../../utils/dataUtil";

function DataSection({ schema, collection, dataPreview }) {
  const { projectId } = useParams();
  const { result, lastData } = transformData(schema, collection, dataPreview);

  const {
    data: logs,
    isLoading,
    error,
    isError,
  } = useQuery({
    queryKey: ["get-collection-logs"],
    queryFn: async () => {
      const res = await axios.get(`/api/projects/${projectId}/logs`);
      return res.data.logs;
    },
  });

  if (isLoading) return <Loading />;
  if (isError) return <div>Error: {error?.message || "Unknown error"}</div>;

  const filteredLogs = logs?.filter(
    log => log.collectionName === collection || log.collectionName === "all",
  );

  const logsText = filteredLogs
    ?.map(log => {
      const { createdAt, type, message } = log;
      const formattedLogs = `${createdAt.slice(0, 16)} | Type: ${type} | message: "${message}"`;
      return formattedLogs;
    })
    .join("\n");

  return (
    <div className="flex h-[30rem] justify-center items-start mt-5 space-x-5">
      <Schema schemas={result} />
      <div className="w-full h-full flex flex-col space-y-2">
        <h2 className="text-text-800 font-bold">Data Preview</h2>
        <TextArea data={lastData} style={DATA_PREVIEWER_STYLE} />
      </div>
      <div className="w-full h-full flex flex-col space-y-2">
        <h3 className="text-text-800 font-bold">Updated Status</h3>
        <TextArea data={logsText} style={UPDATED_PREVIEWER_STYLE} />
      </div>
    </div>
  );
}

DataSection.defaultProps = {
  dataPreview: [],
  collection: "",
};

DataSection.propTypes = {
  schema: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  collection: PropTypes.string,
  dataPreview: PropTypes.arrayOf(
    PropTypes.arrayOf(PropTypes.oneOfType(PropTypes.string, PropTypes.number)),
  ),
};

export default DataSection;
