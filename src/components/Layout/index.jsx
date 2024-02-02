import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";

function Layout() {
  return (
    <>
      <Header />
      <main className="mx-auto max-w-screen-xl px-10 pt-16 pb-20">
        <Outlet />
      </main>
      <Footer />
    </>
  );
}

export default Layout;
