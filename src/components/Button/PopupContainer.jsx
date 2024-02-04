import LinkButtonItem from "./LinkButtonItem";

function PopupContainer() {
  return (
    <div className="absolute top-12 px-10 bg-background-200 border p-2 rounded-md h-40 z-20">
      <ul className="flex flex-col justify-evenly h-full">
        <LinkButtonItem to="/profile">Profile</LinkButtonItem>
        <LinkButtonItem to="/projects">Projects</LinkButtonItem>
        <LinkButtonItem to="/">Logout</LinkButtonItem>
      </ul>
    </div>
  );
}

export default PopupContainer;
