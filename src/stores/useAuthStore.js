import { create } from "zustand";

const useAuthStore = create(set => ({
  userInfo: null,
  setUser: userInfo => set(() => ({ userInfo })),
}));

export default useAuthStore;
