import axios from "axios";
import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";

import useAuthStore from "../stores/useAuthStore";

const useUpdateProfile = () => {
  const { userInfo, setUser } = useAuthStore();
  const navigate = useNavigate();

  const updateProfile = async formData => {
    const { data } = await axios.post(
      `/api/users/${userInfo.userId}/profile`,
      formData,
      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      },
    );
    return data;
  };

  const { isPending, mutate } = useMutation({
    mutationFn: updateProfile,
    onSuccess: res => {
      const { _id: userId, email, userName, avatarUrl } = res.updatedUser;

      setUser({ userId, email, userName, avatarUrl });
      navigate("/profile");
    },
    onError: error => {
      console.log("Error updating profile:", error.message);
    },
  });

  return { loading: isPending, mutate };
};

export default useUpdateProfile;
