import useRefetchAuthStatus from "../../hooks/useRefetchAuthStatus";

function Projects() {
  useRefetchAuthStatus();

  return <div>Projects</div>;
}

export default Projects;
