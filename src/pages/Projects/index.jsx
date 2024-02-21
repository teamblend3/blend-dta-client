import { GrLinkNext } from "react-icons/gr";
import { useNavigate } from "react-router-dom";

import ProjectsSection from "./ProjectsSection";
import LogsSection from "./LogsSection";
import Button from "../../components/Button/Button";

function Projects() {
  const navigate = useNavigate();

  return (
    <div className="flex justify-center items-center h-full">
      <div className="flex flex-col xl:w-8/12 2xl:w-6/12 mx-auto max-w-screen-xl">
        <div className="flex justify-end w-full">
          <Button
            type="button"
            onClick={() => navigate("/projects/new")}
            disabled={false}
          >
            Create New Project <GrLinkNext size={20} />
          </Button>
        </div>
        <ProjectsSection />
        <LogsSection />
      </div>
    </div>
  );
}

export default Projects;
