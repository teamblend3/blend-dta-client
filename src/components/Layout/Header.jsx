import { Link, useNavigate } from "react-router-dom";

import ProfileImage from "../Button/ProfileImage";
import DarkLogo from "../../assets/images/teamblend_logo.png";
import LightLogo from "../../assets/images/teamblend_light_logo.png";
import useThemeStore from "../../stores/useThemeStore";
import useAuthStore from "../../stores/useAuthStore";
import useAuthStatus from "../../hooks/useAuthStatus";
import Button from "../Button/Button";

function Header() {
  const { isDark } = useThemeStore();
  const { userInfo } = useAuthStore();
  const { isLoading } = useAuthStatus();
  const navigate = useNavigate();

  return (
    <header className="w-full bg-background-50 px-4 fixed border-b-2 border-b-accent-900 dark:border-b-accent-500 shadow-accent-900 dark:shadow-accent-500 shadow-sm z-10">
      <div className="w-full max-w-screen-xl mx-auto">
        <div className="flex items-center justify-between">
          <Link
            to="/"
            className="flex items-center mb-0 space-x-3 rtl:space-x-reverse"
          >
            <img
              src={isDark ? DarkLogo : LightLogo}
              className="h-16"
              alt="Blend Logo"
            />
          </Link>
          {!isLoading && (
            <ul className="flex flex-wrap items-center mb-0 text-lg font-medium text-text-950 text-text space-x-4">
              {userInfo ? (
                <ProfileImage />
              ) : (
                <Button
                  type="button"
                  onClick={() => navigate("/login")}
                  disabled={false}
                >
                  Login
                </Button>
              )}
            </ul>
          )}
        </div>
      </div>
    </header>
  );
}

export default Header;
