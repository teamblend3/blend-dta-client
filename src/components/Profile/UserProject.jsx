import { useState } from "react";

import Pagination from "../Pagination";
import ProjectTable from "../ProjectsTable";
import Spinner from "../shared/Spinner";
import useUserProjects from "../../hooks/useUserProjects";

function UserProject() {
  const [currentPage, setCurrentPage] = useState(1);

  const { isLoading, isError, error, data } = useUserProjects();

  if (isLoading) return <Spinner />;
  if (isError) return <div>Error: {error.message}</div>;

  return (
    <div>
      <h1 className="font-normal text-xl text-secondary-500 uppercase">
        User Projects
      </h1>
      <div className="flex flex-col relative overflow-x-auto justify-center items-center gap-2">
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
      </div>
    </div>
  );
}

export default UserProject;
