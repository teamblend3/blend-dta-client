import Pagination from "../Pagination";
import ProjectTable from "../ProjectsTable";

function UserProject() {
  return (
    <div>
      <h1 className="font-normal text-xl text-secondary-500 uppercase">
        User Projects
      </h1>
      <div className="flex flex-col relative overflow-x-auto justify-center items-center gap-2">
        <ProjectTable />
        <Pagination />
      </div>
    </div>
  );
}

export default UserProject;
