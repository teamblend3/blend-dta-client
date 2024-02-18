import PropTypes from "prop-types";
import { useLocation } from "react-router-dom";
import { PROJECTS_PER_PAGE } from "../../utils/constants";
import TableRow from "./TableRow";
import TableHead from "./TableHead";

function ProjectTable({ currentPage, projects }) {
  const { pathname } = useLocation();

  const calculatePageItems = () => {
    const startIndex = (currentPage - 1) * PROJECTS_PER_PAGE;
    return projects.slice(startIndex, startIndex + PROJECTS_PER_PAGE);
  };

  const isProjectsPage = pathname === "/projects";
  const tableClass = isProjectsPage
    ? "w-full text-base text-left text-text-950 my-2 border-[1px]"
    : "w-full text-base text-left rtl:text-right text-primary-500 dark:text-primary-400 my-4";

  const pageItems = calculatePageItems();

  return (
    <table className={tableClass}>
      <TableHead isProjectsPage={isProjectsPage} />
      <tbody>
        {pageItems.map((project, index) => (
          <TableRow
            key={project._id || `placeholder-${index}`}
            currentPage={currentPage}
            project={project}
            index={index}
            isProjectsPage={isProjectsPage}
          />
        ))}
        {pageItems.length < PROJECTS_PER_PAGE &&
          Array.from(
            { length: PROJECTS_PER_PAGE - pageItems.length },
            (_, index) => (
              <TableRow
                key={`placeholder-${index + pageItems.length}`}
                currentPage={currentPage}
                project={{}}
                index={index + pageItems.length}
                isProjectsPage={isProjectsPage}
              />
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
      _id: PropTypes.string,
      title: PropTypes.string,
      dbUrl: PropTypes.string,
      sheetUrl: PropTypes.string,
      collectionCount: PropTypes.number,
      createdAt: PropTypes.string,
    }),
  ).isRequired,
};

export default ProjectTable;
