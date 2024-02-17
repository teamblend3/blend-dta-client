import { useState } from "react";
import { GrLinkNext } from "react-icons/gr";
import { useNavigate } from "react-router-dom";
import Spinner from "../../components/shared/Spinner";
import useUserProjects from "../../hooks/useUserProjects";
import LogViewer from "./LogViewer";
import Button from "../../components/Button/Button";
import Pagination from "../../components/Pagination";
import ProjectTable from "../../components/ProjectsTable";

function Projects() {
  const [currentPage, setCurrentPage] = useState(1);
  const navigate = useNavigate();
  const { isLoading, isError, error, data } = useUserProjects();

  if (isLoading) return <Spinner />;
  if (isError) return <div>Error: {error.message}</div>;

  return (
    <div className="w-8/12 flex-col items-center mx-auto max-w-screen-xl py-5">
      <div className="flex justify-end w-full">
        <Button
          type="button"
          onClick={() => navigate("/projects/new")}
          disabled={false}
        >
          Create New Project <GrLinkNext size={20} />
        </Button>
      </div>

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
      <section className="mt-4">
        <h2 className="font-bold text-lg text-text-950 uppercase">
          Logs Viewer
        </h2>
        <LogViewer />
      </section>
    </div>
  );
}

export default Projects;
