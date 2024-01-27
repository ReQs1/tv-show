import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";

function AppLayout() {
  return (
    <>
      <header>
        <Navbar />
      </header>

      <main className="h-dvh">
        <Outlet />
      </main>

      <Footer />
    </>
  );
}

export default AppLayout;
