import { Link } from "react-router-dom";

function HomeButton() {
  return (
    <Link to="/projects" className="hover:underline me-4 md:me-6">
      <button>Home</button>
    </Link>
  );
}

export default HomeButton;
