import useRefetchAuthStatus from "../../hooks/useRefetchAuthStatus";
import Pagination from "./Pagination";
import ProjectTable from "./ProjectTable";
import Spinner from "../../components/shared/Spinner";
import useUserProjects from "../../hooks/useUserProjects";
import LogViewer from "./LogViewer";
import LinkButton from "../../components/Button/LinkButton";

function Projects() {
  useRefetchAuthStatus();

  const { currentPage, setCurrentPage, isLoading, isError, error, data } =
    useUserProjects();

  if (isLoading) return <Spinner />;
  if (isError) return <div>Error: {error.message}</div>;

  return (
    <div className="w-7/12 flex-col items-center space-y-2 xl:w-8/12 2xl:w-6/12 mx-auto py-5 max-w-screen-xl">
      <div className="flex justify-end w-full">
        <LinkButton to="/projects/new">Create New Project</LinkButton>
      </div>
      <h2 className="font-bold text-lg text-text-950 uppercase">My Projects</h2>
      <div className="flex flex-col relative overflow-x-auto justify-center items-center">
        {data ? (
          <>
            <ProjectTable currentPage={currentPage} projects={data.projects} />
            <Pagination
              totalLength={data.projectsLength}
              currentPage={currentPage}
              setCurrentPage={setCurrentPage}
              style={{ margin: "auto" }}
            />
          </>
        ) : (
          <h1>No projects found</h1>
        )}
      </div>
      <div>
        <h2 className="font-bold text-lg text-text-950 uppercase mt-5">
          Logs Viewer
        </h2>
        <LogViewer />
      </div>
    </div>
  );
}

export default Projects;
