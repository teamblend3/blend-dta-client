import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import useThemeStore from "../../stores/useThemeStore";

function Layout() {
  const { isDark } = useThemeStore();

  return (
    <div className={isDark ? "dark" : ""}>
      <Header />
      <main className="mx-auto max-w-screen-xl px-10 pt-16 pb-20">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default Layout;
