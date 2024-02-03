import { Link } from "react-router-dom";

function LogoutButton() {
  return (
    <Link to="/" className="hover:underline me-4 md:me-6">
      <button>Logout</button>
    </Link>
  );
}

export default LogoutButton;
