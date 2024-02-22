import { GrLinkNext } from "react-icons/gr";
import { useNavigate } from "react-router-dom";

import ProjectsSection from "./ProjectsSection";
import LogsSection from "./LogsSection";
import Button from "../../components/Button/Button";
import Container from "../../components/Layout/Container";

function Projects() {
  const navigate = useNavigate();

  return (
    <Container>
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
    </Container>
  );
}

export default Projects;
