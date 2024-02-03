import ProfileButton from "./ProfileButton";
import ProjectButton from "./ProjectButton";
import LogoutButton from "./LogoutButton";

function ButtonList() {
  return (
    <div className="absolute bg-white px-4 bg-background border p-2 mt-2 rounded-md">
      <ul>
        <li>
          <ProfileButton />
        </li>
        <li>
          <ProjectButton />
        </li>
        <li>
          <LogoutButton />
        </li>
      </ul>
    </div>
  );
}

export default ButtonList;
