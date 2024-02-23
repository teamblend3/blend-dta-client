import { useState } from "react";
import Joi from "joi";

import FloatingInput from "../Form/FloatingInput";
import FormError from "../Form/FormError";
import ProfileImage from "../ProfileImage";
import SmallSpinner from "../shared/SmallSpinner";
import useAuthStore from "../../stores/useAuthStore";
import useUpdateProfile from "../../hooks/useUpdateProfile";
import useValidation from "../../hooks/useValidation";
import Button from "../Button/Button";
import { USER_PROFILE_SAVE_BUTTON_STYLE } from "../../utils/styleConstants";

function UserInfo() {
  const { userInfo } = useAuthStore();
  const [form, setForm] = useState({
    email: userInfo.email,
    userName: userInfo.userName,
  });
  const [selectedFile, setSelectedFile] = useState(null);
  const { loading, mutate } = useUpdateProfile();

  const schema = Joi.object({
    email: Joi.string()
      .email({ tlds: { allow: false } })
      .required(),
    userName: Joi.string().min(3).required(),
  });

  const { error: formErrors, validate } = useValidation(form, schema);

  const handleChange = field => e => {
    setForm(prev => ({ ...prev, [field]: e.target.value }));
  };

  const handleSubmit = e => {
    e.preventDefault();
    const errors = validate();
    if (!errors) {
      const formData = new FormData();
      formData.append("email", form.email);
      formData.append("userName", form.userName);

      if (selectedFile) {
        formData.append("avatarUrl", selectedFile);
        formData.append("fileName", selectedFile.name);
      }

      mutate(formData);
    }
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
            value={form.email}
            handleChange={handleChange("email")}
          />
          {formErrors?.email && <FormError errorMessage={formErrors.email} />}
          <FloatingInput
            type="text"
            name="username"
            label="User name"
            value={form.userName}
            handleChange={handleChange("userName")}
          />
          {formErrors?.userName && (
            <FormError errorMessage={formErrors.userName} />
          )}
        </div>
        <Button
          type="submit"
          style={USER_PROFILE_SAVE_BUTTON_STYLE}
          disabled={loading || !!formErrors}
        >
          {loading ? <SmallSpinner /> : "Save"}
        </Button>
      </form>
    </div>
  );
}

export default UserInfo;
