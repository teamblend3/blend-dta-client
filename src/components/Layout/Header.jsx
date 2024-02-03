import { Link } from "react-router-dom";

import LoginButton from "../Button/LoginButton";
import HomeButton from "../Button/HomeButton";
import ProfileImage from "../Button/ProfileImage";
import DarkLogo from "../../assets/images/teamblend_logo.png";
import LightLogo from "../../assets/images/teamblend_light_logo.png";
import useThemeStore from "../../stores/useThemeStore";

function Header() {
  const { isDark, toggleTheme } = useThemeStore();

  return (
    <header className="w-full bg-white px-4 bg-background">
      <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
        <div className="sm:flex sm:items-center sm:justify-between">
          <Link
            to="/"
            className="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse"
          >
            <img
              src={isDark ? DarkLogo : LightLogo}
              className="h-16"
              alt="Blend Logo"
            />
          </Link>
          <ul className="flex flex-wrap items-center mb-6 text-lg font-medium text-gray-500 sm:mb-0 text-text">
            <li>
              <LoginButton />
              <HomeButton />
              <ProfileImage />
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
}

export default Header;
