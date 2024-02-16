import PropTypes from "prop-types";
import { Link } from "react-router-dom";

import formatDate from "../../utils/dateUtil";
import { PROJECTS_PER_PAGE } from "../../utils/constants";

function ProjectTable({ currentPage, projects }) {
  return (
    <table className="w-full text-base text-left rtl:text-right text-primary-500 dark:text-primary-400 my-4">
      <thead className="text-xs text-center text-primary-700 uppercase bg-primary-50">
        <tr>
          <th className="px-6 py-2">No.</th>
          <th className="px-6 py-2">Project name</th>
          <th className="px-6 py-2">Collection</th>
          <th className="px-6 py-2">Created At</th>
        </tr>
      </thead>
      <tbody>
        {projects
          .slice(
            (currentPage - 1) * PROJECTS_PER_PAGE,
            currentPage * PROJECTS_PER_PAGE,
          )
          .map(({ _id, title, collectionCount, createdAt }, index) => (
            <tr
              className="bg-transparent border-b-2 border-primary-50 text-center"
              key={_id}
            >
              <th className="px-6 py-2 font-medium text-primary-900 whitespace-nowrap">
                {(currentPage - 1) * PROJECTS_PER_PAGE + index + 1}
              </th>
              <td className="px-6 py-2 hover:text-secondary-300">
                <Link to={`/projects/${_id}`}>{title}</Link>
              </td>
              <td className="px-6 py-2">{collectionCount}</td>
              <td className="px-6 py-2">{formatDate(createdAt)}</td>
            </tr>
          ))}
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
