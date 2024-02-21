import { create } from "zustand";

const getInitialTheme = () => {
  const isDark = localStorage.getItem("isDark");
  return isDark === "true";
};

const useThemeStore = create(set => ({
  isDark: getInitialTheme(),
  toggleTheme: () =>
    set(state => {
      const newIsDark = !state.isDark;
      localStorage.setItem("isDark", newIsDark.toString());
      return { isDark: newIsDark };
    }),
}));

export default useThemeStore;
