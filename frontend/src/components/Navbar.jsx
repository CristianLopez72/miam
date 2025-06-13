import { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <header className="w-full py-4 px-14">
      <nav className="container mx-auto flex items-center justify-between">
        <div className="flex items-center gap-4">
          <div className="bg-white rounded-full p-2 h-16 w-16 flex items-center justify-center">
            <span className="text-[#ff3a3a] font-bold text-xl">Miam</span>
          </div>
          <h1 className="hidden md:flex text-white font-bold text-2xl">
            COMÉ A TU <br/> MANERA
          </h1>
        </div>
        <div className="hidden md:flex items-center gap-6">
          <Link href="#" className="text-white hover:underline">
            Ayuda
          </Link>
          <div className="h-6 border border-white/50"></div>
          <Link href="#" className="text-white hover:underline">
            Quiero registrar mi restaurante
          </Link>
        </div>

        {isOpen && (
          <div
            className={`fixed top-0 right-0 h-full w-[300px] sm:w-[400px] bg-white shadow-xl z-50 transform transition-transform duration-300 ${
              isOpen ? "translate-x-0" : "translate-x-full"
            }`}
          >
            <div className="flex justify-end m-8">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="md:hidden p-2 rounded hover:bg-gray-100 text-orange-600"
              >
                ✕
              </button>
            </div>
            <div className="flex flex-col space-y-4 mt-8 p-4">
              <Link
                href="#"
                className="text-lg font-medium text-gray-700 hover:text-orange-500 transition-colors py-2"
                onClick={() => setIsOpen(false)}
              >
                Ayuda
              </Link>
              <Link
                href="#"
                className="text-lg font-medium text-gray-700 hover:text-orange-500 transition-colors py-2"
                onClick={() => setIsOpen(false)}
              >
                Quiero registrar mi restaurante
              </Link>

              <div className=" pt-4 mt-4">2025 MIAM</div>
            </div>
          </div>
        )}

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden hover:bg-gray-100 text-black bg-white p-2 px-4 rounded-full"
        >
          ✕
        </button>
      </nav>
    </header>
  );
};

export default Navbar;
