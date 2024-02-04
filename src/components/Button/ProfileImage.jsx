import { useState } from "react";
import { FaUserCircle } from "react-icons/fa";

import PopupContainer from "./PopupContainer";

function ProfileImage() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <li>
      <button
        className="flex items-center text-sm bg-gray-800 rounded-full md:mr-0 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600"
        id="user-menu-button"
        aria-expanded="false"
        data-dropdown-toggle="user-dropdown"
        data-dropdown-placement="bottom"
        onMouseOver={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onFocus={() => setIsHovered(true)}
      >
        <FaUserCircle size={40} />
        {isHovered && <PopupContainer />}
      </button>
    </li>
  );
}

export default ProfileImage;
