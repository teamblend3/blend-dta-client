import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";

import ProjectTable from "../../components/ProjectsTable";
import Pagination from "../../components/Pagination";
import useUserProjects from "../../hooks/useUserProjects";
import Loading from "../../components/shared/Loading";

function ProjectsSection() {
  const { search } = useLocation();
  const navigate = useNavigate();
  const { isLoading, isError, error, data } = useUserProjects();
  const params = new URLSearchParams(search);
  const page = params.get("page");

  const [currentPage, setCurrentPage] = useState(page ? parseInt(page, 10) : 1);

  const handlePageChange = newPage => {
    setCurrentPage(newPage);
    params.set("page", newPage);
    navigate(`${window.location.pathname}?${params.toString()}`);
  };

  if (isLoading) return <Loading />;
  if (isError) return <div>Error: {error.message}</div>;

  return (
    <section className="flex flex-col relative overflow-x-auto justify-center items-center mt-4">
      <h2 className="font-bold text-lg text-text-950 uppercase self-start">
        My Projects
      </h2>
      {data ? (
        <>
          <ProjectTable currentPage={currentPage} projects={data.projects} />
          <Pagination
            totalLength={data.projectsLength}
            currentPage={currentPage}
            setCurrentPage={handlePageChange}
          />
        </>
      ) : (
        <h1>No projects found</h1>
      )}
    </section>
  );
}

export default ProjectsSection;
