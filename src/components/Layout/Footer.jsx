import { Link } from "react-router-dom";
import { CgDarkMode } from "react-icons/cg";

import DarkLogo from "../../assets/images/teamblend_logo.png";
import LightLogo from "../../assets/images/teamblend_light_logo.png";
import useThemeStore from "../../stores/useThemeStore";

function Footer() {
  const { isDark, toggleTheme } = useThemeStore();

  return (
    <footer className="w-full bg-white px-4 bg-background">
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
          <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 text-text">
            <li>
              <Link to="/" className="hover:underline me-4 md:me-6">
                Home
              </Link>
            </li>
            <li>
              <Link to="/about" className="hover:underline me-4 md:me-6">
                About
              </Link>
            </li>
            <li>
              <Link
                to="https://github.com/teamblend3/blend-dta-client"
                className="hover:underline me-4 md:me-6"
              >
                Github
              </Link>
            </li>
            <li>
              <Link to="/contact" className="hover:underline">
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
        <hr className="my-6 sm:mx-auto border-text lg:my-8" />
        <span className="block text-sm text-gray-500 sm:text-center text-text">
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
