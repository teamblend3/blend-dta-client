import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

import Pagination from "../Pagination";
import ProjectTable from "../ProjectsTable";
import useUserProjects from "../../hooks/useUserProjects";
import Loading from "../shared/Loading";

function UserProject() {
  const { search } = useLocation();
  const navigate = useNavigate();
  const params = new URLSearchParams(search);
  const page = params.get("page");
  const [currentPage, setCurrentPage] = useState(page ? parseInt(page, 10) : 1);

  const { isLoading, isError, error, data } = useUserProjects();

  const handlePageChange = newPage => {
    setCurrentPage(newPage);
    params.set("page", newPage);
    navigate(`/profile?${params.toString()}`);
  };

  if (isLoading) return <Loading />;
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
              setCurrentPage={handlePageChange}
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
