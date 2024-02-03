import { useState } from "react";

import ButtonList from "./ButtonList";

function ProfileImage() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <li>
      <button
        className="bg-blue-500 text-white py-2 px-4 rounded-md"
        onMouseOver={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onFocus={() => setIsHovered(true)}
      >
        Profile Image
        {isHovered && <ButtonList />}
      </button>
    </li>
  );
}

export default ProfileImage;
