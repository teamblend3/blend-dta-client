import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

import useAuthStore from "../stores/useAuthStore";

const useUpdateProfile = () => {
  const [loading, setLoading] = useState(false);
  const { userInfo, setUser } = useAuthStore();
  const navigate = useNavigate();

  const updateProfile = async formData => {
    setLoading(true);
    try {
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
    } catch (error) {
      throw new Error(
        error.response?.data?.message || "Failed to update profile",
      );
    } finally {
      setLoading(false);
    }
  };

  const { mutate } = useMutation({
    mutationFn: updateProfile,
    onSuccess: res => {
      const { _id: userId, email, userName, avatarUrl } = res.updatedUser;

      setUser({ userId, email, userName, avatarUrl });
      navigate("/profile");
    },
    onError: error => {
      console.error("Error updating profile:", error.message);
    },
  });

  return { loading, mutate };
};

export default useUpdateProfile;
