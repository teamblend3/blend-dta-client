import { useState } from "react";
import PropTypes from "prop-types";

import useAuthStore from "../../stores/useAuthStore";

function ProfileImage({ setSelectedFile }) {
  const { userInfo } = useAuthStore();
  const [image, setImage] = useState(userInfo.avatarUrl);

  const handleImageChange = e => {
    const file = e.target.files[0];
    setSelectedFile(file);
    const reader = new FileReader();

    reader.onloadend = () => {
      setImage(reader.result);
    };

    if (file) {
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="w-40 text-center my-auto">
      <label htmlFor="file-input" className="cursor-pointer">
        <img
          src={image}
          alt="User profile"
          className="inline-block h-28 w-28 rounded-full ring-2 ring-white"
        />
        <input
          id="file-input"
          type="file"
          className="hidden"
          onChange={handleImageChange}
          accept="image/*"
        />
      </label>
    </div>
  );
}

ProfileImage.propTypes = {
  setSelectedFile: PropTypes.func.isRequired,
};

export default ProfileImage;
