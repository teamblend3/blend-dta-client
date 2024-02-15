import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import LinkImage from "../../components/Link/LinkImage";
import TableCell from "../../components/Table/TableCell";

import formatDate from "../../utils/dateUtil";
import { PROJECTS_PER_PAGE } from "../../utils/constants";

function ProjectTable({ currentPage, projects }) {
  return (
    <table className="w-full text-base text-left rtl:text-right text-text-950 my-2 border-2">
      <thead className="text-sm text-center text-text-900 uppercase">
        <tr>
          <th className="px-6 py-2 border-2 border-black">No.</th>
          <th className="px-6 py-2 border-2 border-black">Project name</th>
          <th className="px-6 py-2 border-2 border-black">db Url</th>
          <th className="px-6 py-2 border-2 border-black">sheet Url</th>
          <th className="px-6 py-2 border-2 border-black">collection Count</th>
          <th className="px-6 py-2 border-2 border-black">Created At</th>
        </tr>
      </thead>
      <tbody>
        {projects.map(
          (
            { _id, title, dbUrl, sheetUrl, collectionCount, createdAt },
            index,
          ) => (
            <tr
              key={_id}
              className="bg-transparent border-b-2 border-primary-50 text-center text-sm border-2 border-black"
            >
              <td className="px-6 py-2 font-medium text-primary-900 whitespace-nowrap border-2 border-black">
                {(currentPage - 1) * PROJECTS_PER_PAGE + index + 1}
              </td>
              <TableCell
                label={`project_title_${_id}`}
                link={`/projects/${_id}`}
                content={title}
              />
              <TableCell label={`project_dbUrl_${_id}`} content={dbUrl} />
              <TableCell
                label={`project_sheetUrl_${_id}`}
                content={<LinkImage to={sheetUrl} />}
              />
              <TableCell
                label={`project_collectionCount_${_id}`}
                content={collectionCount}
              />
              <TableCell
                label={`project_createdAt_${_id}`}
                content={formatDate(createdAt)}
              />
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
