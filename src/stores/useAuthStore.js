import { create } from "zustand";

const useAuthStore = create(set => ({
  isAuth: false,
}));

export default useAuthStore;
