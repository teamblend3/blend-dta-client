import { Link } from "react-router-dom";

function ProjectButton() {
  return (
    <Link to="/projects" className="hover:underline me-4 md:me-6">
      <button>My Projects</button>
    </Link>
  );
}

export default ProjectButton;
