import { Link } from "react-router-dom";
import LinkButtonItem from "../Button/LinkButtonItem";
import ProfileImage from "../Button/ProfileImage";
import DarkLogo from "../../assets/images/teamblend_logo.png";
import LightLogo from "../../assets/images/teamblend_light_logo.png";
import useThemeStore from "../../stores/useThemeStore";
import useAuthStore from "../../stores/useAuthStore";
import useAuthStatus from "../../hooks/useAuthStrore";

function Header() {
  const { isDark } = useThemeStore();
  const { isAuth } = useAuthStore();
  const { isLoading } = useAuthStatus();

  return (
    <header className="w-full bg-background-50 px-4 fixed border-b-2 border-b-accent-900 dark:border-b-accent-500 shadow-accent-900 dark:shadow-accent-500 shadow-sm z-10">
      <div className="w-full max-w-screen-xl mx-auto">
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
          {!isLoading && (
            <ul className="flex flex-wrap items-center mb-6 text-lg font-medium text-text-950 sm:mb-0 text-text space-x-4">
              {isAuth ? (
                <ProfileImage />
              ) : (
                <LinkButtonItem to="/login">Login</LinkButtonItem>
              )}
            </ul>
          )}
        </div>
      </div>
    </header>
  );
}

export default Header;
