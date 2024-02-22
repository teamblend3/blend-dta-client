import PropTypes from "prop-types";
import { useLocation, useNavigate } from "react-router-dom";
import DropdownItem from "./DropdownItem";
import useLogout from "../../hooks/useLogout";
import { DROPDOWN_BOX_STYLE } from "../../utils/styleConstants";

function DropdownBox({ userInfo, onMouseEnter, onMouseLeave }) {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const logout = useLogout();

  const handleLink = link => {
    if (link === pathname) {
      return;
    }
    navigate(link);
  };

  return (
    <div
      className={DROPDOWN_BOX_STYLE}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
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
        <DropdownItem
          label="User Profile"
          isCurrent={pathname === "/profile"}
          onClick={() => handleLink("/profile")}
        />
        <DropdownItem
          label="Create Project"
          isCurrent={pathname === "/projects/new"}
          onClick={() => handleLink("/projects/new")}
        />
        <DropdownItem
          label="Project List"
          isCurrent={pathname === "/projects"}
          onClick={() => handleLink("/projects")}
        />
        <DropdownItem label="Logout" onClick={logout} />
      </ul>
    </div>
  );
}

DropdownBox.propTypes = {
  userInfo: PropTypes.shape({
    userName: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
  }).isRequired,
  onMouseEnter: PropTypes.func.isRequired,
  onMouseLeave: PropTypes.func.isRequired,
};

export default DropdownBox;
