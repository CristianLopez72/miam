import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";

const Layout = () => {
  return (
    <>
      <div className="min-h-screen bg-gradient-to-r from-[#e75858] to-[#d86023]">
        <Navbar />

        <main className="container mx-auto px-6 py-16 text-center">
          <Outlet />
        </main>
      </div>
    </>
  );
};

export default Layout;
