import { create } from "zustand";

const useAuthStore = create(set => ({
  isAuth: false,
  userInfo: {},
  setLogin: () => set(state => ({ isAuth: true })),
  setLogout: () => set(state => ({ isAuth: false })),
  setUser: userInfo => set(state => ({ userInfo })),
}));

export default useAuthStore;
