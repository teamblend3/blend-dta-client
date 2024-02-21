import { useState, useRef, useEffect } from "react";
import DropdownBox from "../Dropdown/DropdownBox";
import useAuthStore from "../../stores/useAuthStore";

function ProfileImage() {
  const { userInfo } = useAuthStore();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const toggleDropdown = () => setIsDropdownOpen(!isDropdownOpen);
  const dropdownRef = useRef(null);
  const closeTimeoutRef = useRef(null);

  const handleMouseEnter = () => {
    setIsDropdownOpen(true);
    clearTimeout(closeTimeoutRef.current);
  };

  const handleMouseLeave = () => {
    closeTimeoutRef.current = setTimeout(() => {
      setIsDropdownOpen(false);
    }, 300);
  };

  useEffect(() => {
    const handleClickOutside = event => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [dropdownRef]);

  return (
    <div
      className="relative flex items-center md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <button
        type="button"
        className={`flex text-sm dark:bg-primary-800 rounded-full md:me-0 ring-4 ${isDropdownOpen ? "dark:ring-accent-400 ring-primary-600" : "dark:ring-accent-600 ring-primary-700"}`}
        id="user-menu-button"
        onClick={toggleDropdown}
      >
        <img
          className="w-8 h-8 rounded-full"
          src={userInfo.avatarUrl}
          alt={`${userInfo.userName} profile`}
        />
      </button>
      {isDropdownOpen && (
        <DropdownBox
          userInfo={userInfo}
          onMouseEnter={() => clearTimeout(closeTimeoutRef.current)}
          onMouseLeave={() => setIsDropdownOpen(false)}
        />
      )}
    </div>
  );
}

export default ProfileImage;
