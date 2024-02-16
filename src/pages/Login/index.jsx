import { IoLogoGoogle } from "react-icons/io";

import useGoogleAuth from "../../hooks/useGoogleAuth";

function Login() {
  const mutate = useGoogleAuth();

  return (
    <div className="flex h-full justify-center items-center">
      <button
        type="button"
        className="flex gap-2 items-center text-text-950 bg-primary-400 hover:bg-primary-300 focus:ring-4 focus:outline-none focus:ring-primary font-bold rounded-md text-xl w-full sm:w-auto px-6 py-2.5 text-center hover:-translate-y-0.5 hover:shadow-xl transform transition-transform ease-in-out duration-150"
        onClick={mutate}
      >
        <IoLogoGoogle />
        Login with Google
      </button>
    </div>
  );
}

export default Login;
