import { Outlet } from "react-router-dom";

import Header from "./Header";
import Footer from "./Footer";
import useThemeStore from "../../stores/useThemeStore";

function Layout() {
  const { isDark } = useThemeStore();

  return (
    <div className={isDark ? "dark" : ""}>
      <Header />
      <main className="mx-auto h-[calc(100vh-5rem)] pt-16 bg-background-50 w-full">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default Layout;
