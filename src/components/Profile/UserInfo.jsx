import { useState } from "react";
import Joi from "joi";

import FloatingInput from "../Form/FloatingInput";
import ProfileImage from "../ProfileImage";
import SmallSpinner from "../shared/SmallSpinner";

import useAuthStore from "../../stores/useAuthStore";
import useUpdateProfile from "../../hooks/useUpdateProfile";
import FormError from "../Form/FormError";
import useValidation from "../../hooks/useValidation";

function UserInfo() {
  const { userInfo } = useAuthStore();
  const [email, setEmail] = useState(userInfo.email);
  const [userName, setUserName] = useState(userInfo.userName);
  const [selectedFile, setSelectedFile] = useState(null);
  const { loading, mutate } = useUpdateProfile();

  const emailSchema = Joi.string().email({ tlds: { allow: false } });
  const userNameSchema = Joi.string().min(3);

  const emailError = useValidation(email, emailSchema);
  const userNameError = useValidation(userName, userNameSchema);

  const handleSubmit = e => {
    e.preventDefault();

    if (emailError || userNameError) {
      return;
    }

    const formData = new FormData();

    formData.append("email", email);
    formData.append("userName", userName);

    if (selectedFile) {
      formData.append("avatarUrl", selectedFile);
      formData.append("fileName", selectedFile.name);
    }

    mutate(formData);
  };

  const handleChange = setter => e => {
    setter(e.target.value);
  };

  return (
    <div>
      <h1 className="font-normal text-xl text-secondary-700 uppercase my-2">
        User Information
      </h1>
      <form onSubmit={handleSubmit} className="flex w-full gap-5">
        <ProfileImage setSelectedFile={setSelectedFile} />
        <div className="flex flex-col justify-end w-8/12">
          <FloatingInput
            type="text"
            name="email"
            label="User email"
            value={email}
            handleChange={handleChange(setEmail)}
          />
          {emailError && <FormError errorMessage={emailError} />}
          <FloatingInput
            type="text"
            name="username"
            label="User name"
            value={userName}
            handleChange={handleChange(setUserName)}
          />
          {userNameError && <FormError errorMessage={userNameError} />}
        </div>
        <button
          type="submit"
          className="w-20 h-10 text-primary-700 hover:text-white border border-primary-700 hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 dark:border-primary-500 dark:text-primary-500 dark:hover:text-white dark:hover:bg-primary-600 dark:focus:ring-primary-800 uppercase cursor-pointer"
        >
          {loading ? <SmallSpinner /> : "save"}
        </button>
      </form>
    </div>
  );
}

export default UserInfo;
