import PropTypes from "prop-types";
import DropdownItem from "./DropdownItem";
import useLogout from "../../hooks/useLogout";
import { DROPDOWN_BOX_STYLE } from "../../utils/styleConstants";

function DropdownBox({ userInfo, onMouseEnter, onMouseLeave }) {
  const logout = useLogout();

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
        <DropdownItem to="/profile" label="User Profile" />
        <DropdownItem to="/projects/new" label="Create Project" />
        <DropdownItem to="/projects" label="Project List" />
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
