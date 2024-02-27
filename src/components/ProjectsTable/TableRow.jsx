import axios from "axios";
import PropTypes from "prop-types";
import { FaExternalLinkAlt, FaDownload } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { Link } from "react-router-dom";
import { useMutation } from "@tanstack/react-query";

import { PROJECTS_PER_PAGE } from "../../utils/constants";
import { formatDate } from "../../utils/dataUtil";
import useAuthStore from "../../stores/useAuthStore";
import LoadingLine from "../shared/LoadingLine";

function TableRow({ currentPage, project, index, isProjectsPage }) {
  const {
    userInfo: { userId },
  } = useAuthStore();
  const { _id, title, dbUrl, sheetUrl, collectionNames, createdAt } = project;

  const itemNumber = _id
    ? (currentPage - 1) * PROJECTS_PER_PAGE + index + 1
    : "";

  const rowClass = isProjectsPage
    ? "bg-transparent border-b-[1px] text-center text-sm border-[1px] border-black dark:border-white h-10"
    : "bg-transparent border-b-2 border-primary-50 text-center h-11";

  const cellClass = isProjectsPage
    ? "py-2 font-medium whitespace-nowrap border-[1px] border-black dark:border-white"
    : "px-6 py-2 text-sm font-medium text-primary-600 whitespace-nowrap";

  const { mutate, isPending } = useMutation({
    mutationKey: ["get-mock-download"],
    mutationFn: async () => {
      const res = await axios.get(`/api/projects/${_id}/download`, {
        responseType:
          userId === import.meta.env.VITE_MOCK_AUTH_ID ? "blob" : "json",
        withCredentials: true,
      });
      return res.data;
    },
    onSuccess: data => {
      const url = window.URL.createObjectURL(new Blob([data]));
      const link = document.createElement("a");
      link.href = url;
      link.setAttribute("download", "sample.xlsx");
      document.body.appendChild(link);
      link.click();
      link.parentNode.removeChild(link);
    },
    onError: error => {
      console.error("Download error:", error);
    },
  });

  const handleDownLoad = async () => {
    mutate();
  };

  const handleDelete = async () => {
    const res = await axios.delete(`/api/projects/${_id}`);

    if (res.data.success) {
      window.location.reload();
    }
  };

  const renderDownloadButtonOrLink = () => {
    if (sheetUrl && userId === import.meta.env.VITE_MOCK_AUTH_ID) {
      if (isPending) {
        return <LoadingLine px={20} />;
      }
      return (
        <button onClick={handleDownLoad} aria-label="download-file">
          <FaDownload />
        </button>
      );
    }
    if (sheetUrl) {
      return (
        <a
          href={sheetUrl}
          target="_blank"
          className="inline-block"
          rel="noreferrer"
        >
          <FaExternalLinkAlt />
          <span className="sr-only">Open external link</span>
        </a>
      );
    }
    return null;
  };

  return (
    <tr className={rowClass} key={_id || index}>
      <th className={cellClass}>{itemNumber}</th>
      <td className={cellClass}>
        {_id ? <Link to={`/projects/${_id}`}>{title}</Link> : ""}
      </td>
      {isProjectsPage && (
        <>
          <td className={cellClass}>{dbUrl}</td>
          <td className={cellClass}>{renderDownloadButtonOrLink()}</td>
        </>
      )}
      <td className={cellClass}>{collectionNames?.length}</td>
      <td className={cellClass}>{formatDate(createdAt)}</td>
      {isProjectsPage && _id && (
        <td className={cellClass}>
          <button onClick={handleDelete} aria-label="Delete project">
            <MdDelete size={18} />
          </button>
        </td>
      )}
    </tr>
  );
}

TableRow.propTypes = {
  currentPage: PropTypes.number.isRequired,
  project: PropTypes.shape({
    _id: PropTypes.string,
    title: PropTypes.string,
    dbUrl: PropTypes.string,
    sheetUrl: PropTypes.string,
    collectionNames: PropTypes.arrayOf(PropTypes.string),
    createdAt: PropTypes.string,
  }).isRequired,
  index: PropTypes.number.isRequired,
  isProjectsPage: PropTypes.bool.isRequired,
};

export default TableRow;
