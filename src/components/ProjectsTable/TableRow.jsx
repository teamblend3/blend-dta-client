import PropTypes from "prop-types";
import { FaExternalLinkAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
import { PROJECTS_PER_PAGE } from "../../utils/constants";
import { formatDate } from "../../utils/dataUtil";

function TableRow({ currentPage, project, index, isProjectsPage }) {
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

  return (
    <tr className={rowClass} key={_id || index}>
      <th className={cellClass}>{itemNumber}</th>
      <td className={cellClass}>
        {_id ? <Link to={`/projects/${_id}`}>{title}</Link> : ""}
      </td>
      {isProjectsPage && (
        <>
          <td className={cellClass}>{dbUrl}</td>
          <td className={cellClass}>
            <a
              href={sheetUrl}
              target="_blank"
              className="inline-block"
              rel="noreferrer"
            >
              {sheetUrl && <FaExternalLinkAlt />}
              <span className="sr-only">Open external link</span>
            </a>
          </td>
        </>
      )}
      <td className={cellClass}>{collectionNames?.length}</td>
      <td className={cellClass}>{formatDate(createdAt)}</td>
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
