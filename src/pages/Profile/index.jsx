import useRefetchAuthStatus from "../../hooks/useRefetchAuthStatus";
import UserInfo from "../../components/Profile/UserInfo";
import UserProject from "../../components/Profile/UserProject";

function UserProfile() {
  useRefetchAuthStatus();

  return (
    <div className="flex flex-col justify-center items-center h-full mt-4">
      <div className="flex flex-col gap-6 sm:w-6/12 mx-auto max-w-screen-xl">
        <UserInfo />
        <UserProject />
      </div>
    </div>
  );
}

export default UserProfile;
