import useRefetchAuthStatus from "../../hooks/useRefetchAuthStatus";

function UserProfile() {
  useRefetchAuthStatus();

  return <div>UserProfile</div>;
}

export default UserProfile;
