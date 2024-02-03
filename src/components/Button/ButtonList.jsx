import LinkButtonItem from "./LinkButtonItem";

function ButtonList() {
  return (
    <div className="absolute bg-white px-4 bg-background border p-2 mt-2 rounded-md">
      <ul>
        <LinkButtonItem to="/profile">Profile</LinkButtonItem>
        <LinkButtonItem to="/projects">Projects</LinkButtonItem>
        <LinkButtonItem to="/">Logout</LinkButtonItem>
      </ul>
    </div>
  );
}

export default ButtonList;
