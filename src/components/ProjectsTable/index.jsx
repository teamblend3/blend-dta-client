import PropTypes from "prop-types";
import { Link } from "react-router-dom";

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
    <table className="w-full text-base text-left rtl:text-right text-primary-500 dark:text-primary-400 my-4">
      <thead className="text-sm text-center text-primary-700 uppercase bg-primary-50">
        <tr>
          <th className="px-6 py-2">No.</th>
          <th className="px-6 py-2">Project name</th>
          <th className="px-6 py-2">Collection</th>
          <th className="px-6 py-2">Created At</th>
        </tr>
      </thead>
      <tbody>
        {filledItems.map(
          ({ _id, title, collectionCount, createdAt }, index) => (
            <tr
              className="bg-transparent border-b-2 border-primary-50 text-center h-11"
              key={_id || index}
            >
              <th className="px-6 py-2 font-medium text-primary-900 whitespace-nowrap">
                {_id ? (currentPage - 1) * PROJECTS_PER_PAGE + index + 1 : ""}
              </th>
              <td className="px-6 py-2 hover:text-secondary-300">
                {_id ? <Link to={`/projects/${_id}`}>{title}</Link> : ""}
              </td>
              <td className="px-6 py-2">{_id ? collectionCount : ""}</td>
              <td className="px-6 py-2">{_id ? formatDate(createdAt) : ""}</td>
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
      collectionCount: PropTypes.number.isRequired,
      createdAt: PropTypes.string.isRequired,
    }),
  ).isRequired,
};

export default ProjectTable;
