import PropTypes from "prop-types";
import { Link } from "react-router-dom";

import { FaExternalLinkAlt } from "react-icons/fa";
import formatDate from "../../utils/dateUtil";
import { PROJECTS_PER_PAGE } from "../../utils/constants";

function ProjectTable({ currentPage, projects }) {
  const getCurrentPageItems = () => {
    const startIndex = (currentPage - 1) * PROJECTS_PER_PAGE;
    const endIndex = currentPage * PROJECTS_PER_PAGE;
    return projects.slice(startIndex, endIndex);
  };

  const fillEmptyItems = currentPageItems => {
    const filledItems = Array(PROJECTS_PER_PAGE).fill("");
    return currentPageItems.concat(filledItems.slice(currentPageItems.length));
  };

  const currentPageItems = getCurrentPageItems();
  const filledItems = fillEmptyItems(currentPageItems);

  return (
    <table className="w-full text-base text-left text-text-950 my-2 border-[1px]">
      <thead className="text-sm text-center text-text-500 uppercase">
        <tr>
          <th className="py-2 border-[1px] border-black dark:border-white w-1/12">
            No.
          </th>
          <th className="py-2 border-[1px] border-black dark:border-white w-2/12">
            Project name
          </th>
          <th className="py-2 border-[1px] border-black dark:border-white w-4/12">
            db Url
          </th>
          <th className="py-2 border-[1px] border-black dark:border-white w-1/12">
            sheet
          </th>
          <th className="py-2 border-[1px] border-black dark:border-white w-2/12">
            collections
          </th>
          <th className="py-2 border-[1px] border-black dark:border-white w-2/12">
            Created At
          </th>
        </tr>
      </thead>
      <tbody>
        {filledItems.map(
          (
            { _id, title, dbUrl, sheetUrl, collectionCount, createdAt },
            index,
          ) => (
            <tr
              key={_id || index}
              className="bg-transparent border-b-[1px] text-center text-sm border-[1px] border-black dark:border-white h-10"
            >
              <td className="py-2 font-medium whitespace-nowrap border-[1px] border-black dark:border-white">
                {_id ? (currentPage - 1) * PROJECTS_PER_PAGE + index + 1 : ""}
              </td>
              <td className="py-2 border-[1px] border-black dark:border-white">
                {_id ? <Link to={`/projects/${_id}`}>{title}</Link> : ""}
              </td>
              <td className="py-2 border-[1px] border-black dark:border-white">
                {_id ? dbUrl : ""}
              </td>
              <td className="py-2 border-[1px] border-black dark:border-white">
                {_id ? (
                  <Link to={sheetUrl} className="inline-block">
                    <FaExternalLinkAlt />
                    <span className="sr-only">Open external link</span>
                  </Link>
                ) : (
                  ""
                )}
              </td>
              <td className="py-2 border-[1px] border-black dark:border-white">
                {_id ? collectionCount : ""}
              </td>
              <td className="py-2 border-[1px] border-black dark:border-white">
                {_id ? formatDate(createdAt) : ""}
              </td>
            </tr>
          ),
        )}
      </tbody>
    </table>
  );
}

ProjectTable.propTypes = {
  currentPage: PropTypes.number.isRequired,
  projects: PropTypes.arrayOf(
    PropTypes.shape({
      _id: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      sheetUrl: PropTypes.string.isRequired,
      dbUrl: PropTypes.string.isRequired,
      createdAt: PropTypes.string.isRequired,
      collectionCount: PropTypes.number.isRequired,
    }),
  ).isRequired,
};

export default ProjectTable;
