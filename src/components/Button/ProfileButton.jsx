import { Link } from "react-router-dom";

function ProfileButton() {
  return (
    <Link to="/profile" className="hover:underline me-4 md:me-6">
      <button>My Profile</button>
    </Link>
  );
}

export default ProfileButton;
