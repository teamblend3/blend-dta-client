import { useState } from "react";

import ProjectTable from "../../components/ProjectsTable";
import Pagination from "../../components/Pagination";
import useUserProjects from "../../hooks/useUserProjects";
import Loading from "../../components/shared/Loading";

function ProjectsSection() {
  const [currentPage, setCurrentPage] = useState(1);

  const { isLoading, isError, error, data } = useUserProjects();

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
            setCurrentPage={setCurrentPage}
          />
        </>
      ) : (
        <h1>No projects found</h1>
      )}
    </section>
  );
}

export default ProjectsSection;
