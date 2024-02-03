import { Link } from "react-router-dom";

function LoginButton() {
  return (
    <Link to="/login" className="hover:underline me-4 md:me-6">
      <button>Login</button>
    </Link>
  );
}

export default LoginButton;
