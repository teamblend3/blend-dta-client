import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import useThemeStore from "../../stores/useThemeStore";

function Layout() {
  const { isDark } = useThemeStore();

  return (
    <div className={isDark ? "dark" : ""}>
      <Header />
      <main className="mx-auto min-h-[100vh] bg-background-50 w-full pt-24 pb-32">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default Layout;
