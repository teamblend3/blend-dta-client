import { useState, useRef, useEffect } from "react";

import { Link } from "react-router-dom";
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

  const handleDropdownMouseEnter = () => {
    clearTimeout(closeTimeoutRef.current);
    setIsDropdownOpen(true);
  };

  const handleDropdownMouseLeave = () => {
    setIsDropdownOpen(false);
  };

  const handleChildMouseEnter = () => {
    clearTimeout(closeTimeoutRef.current);
    setIsDropdownOpen(true);
  };

  const handleChildMouseLeave = () => {
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
        className={`flex text-sm dark:bg-primary-800 rounded-full md:me-0 ring-4 ${isDropdownOpen ? "dark:ring-accent-400 ring-primary-600" : "dark:ring-accent-600 ring-primary-800"}`}
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
        <div
          ref={dropdownRef}
          className="absolute top-10 -right-2 list-none dark:bg-accent-400 bg-primary-400 rounded-md shadow divide-y dark:divide-accent-100 divide-primary-100"
          onMouseEnter={handleDropdownMouseEnter}
          onMouseLeave={handleDropdownMouseLeave}
        >
          <div className="p-4">
            <span className="block text-base font-bold dark:text-accent-800 text-primary-800">
              {userInfo.userName}
            </span>
            <span className="block text-sm text-primary-700 dark:text-accent-700 truncate">
              {userInfo.email}
            </span>
          </div>
          <ul className="list-none py-2">
            <Link to="/profile">
              <li
                className="flex px-4 py-2 items-center cursor-pointer hover:bg-primary-800 hover:text-primary-100 dark:hover:bg-accent-800 dark:hover:text-accent-100 text-sm font-bold text-accent-800"
                onMouseEnter={handleChildMouseEnter}
                onMouseLeave={handleChildMouseLeave}
              >
                User Profile
              </li>
            </Link>
            <Link to="/projects/new">
              <li
                className="flex px-4 py-2 items-center cursor-pointer hover:bg-primary-800 hover:text-primary-100 dark:hover:bg-accent-800 dark:hover:text-accent-100 text-sm font-bold text-accent-800"
                onMouseEnter={handleChildMouseEnter}
                onMouseLeave={handleChildMouseLeave}
              >
                Create Project
              </li>
            </Link>
            <Link to="/projects">
              <li
                className="flex px-4 py-2 items-center cursor-pointer hover:bg-primary-800 hover:text-primary-100 dark:hover:bg-accent-800 dark:hover:text-accent-100 text-sm font-bold text-accent-800"
                onMouseEnter={handleChildMouseEnter}
                onMouseLeave={handleChildMouseLeave}
              >
                Project List
              </li>
            </Link>
            <li
              className="flex px-4 py-2 items-center cursor-pointer hover:bg-primary-800 hover:text-primary-100 dark:hover:bg-accent-800 dark:hover:text-accent-100 text-sm font-bold text-accent-800"
              onMouseEnter={handleChildMouseEnter}
              onMouseLeave={handleChildMouseLeave}
            >
              Logout
            </li>
          </ul>
        </div>
      )}
    </div>
  );
}

export default ProfileImage;
