import { Link } from "react-router-dom";
import { CgDarkMode } from "react-icons/cg";

import DarkLogo from "../../assets/images/teamblend_logo.png";
import LightLogo from "../../assets/images/teamblend_light_logo.png";
import useThemeStore from "../../stores/useThemeStore";

function Footer() {
  const { isDark, toggleTheme } = useThemeStore();

  return (
    <footer className="w-full bg-background-50 fixed h-20 px-4">
      <div className="w-full max-w-screen-xl mx-auto">
        <div className="flex items-center justify-between">
          <Link
            to="/"
            className="flex items-center mb-0 space-x-3 rtl:space-x-reverse"
          >
            <img
              src={isDark ? DarkLogo : LightLogo}
              className="h-12"
              alt="Blend Logo"
            />
          </Link>
          <ul className="flex flex-wrap items-center mb-0 text-sm font-medium text-gray-500 text-text-950">
            <li>
              <Link
                to="/"
                className="hover:underline hover:text-primary-400 me-4 md:me-6"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="https://github.com/teamblend3/blend-dta-client"
                className="hover:underline hover:text-primary-400 me-4 md:me-6"
              >
                Github
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                className="hover:underline hover:text-primary-400"
              >
                Contact
              </Link>
            </li>
            <li>
              <CgDarkMode
                className="text-2xl ml-2 cursor-pointer"
                onClick={toggleTheme}
              />
            </li>
          </ul>
        </div>
        <hr className="sm:mx-auto border-text-950 lg:my-1" />
        <span className="block text-sm text-text-950 text-center text-text">
          © 2024{" "}
          <Link to="/" className="hover:underline uppercase">
            blend™
          </Link>
          . All Rights Reserved.
        </span>
      </div>
    </footer>
  );
}

export default Footer;
