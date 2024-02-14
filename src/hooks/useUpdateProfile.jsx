import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import useAuthStore from "../stores/useAuthStore";

const useUpdateProfile = () => {
  const [loading, setLoading] = useState(false);
  const { userInfo, setUser } = useAuthStore();
  const navigate = useNavigate();
  const { mutate: updateProfileMutate } = useMutation({
    mutationFn: async formData => {
      setLoading(true);
      const res = await axios.post(
        `/api/users/${userInfo.userId}/profile`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        },
      );

      return res.data;
    },
    onSuccess: res => {
      const {
        updatedUser: { _id: userId, email, userName, avatarUrl },
      } = res;

      setUser({
        userId,
        email,
        userName,
        avatarUrl,
      });

      setLoading(false);
      navigate("/profile");
    },
    onError: err => {
      console.log(err);
      console.log("error");
    },
  });

  return { loading, updateProfileMutate };
};

export default useUpdateProfile;
