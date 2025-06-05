import { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <nav className="bg-white/95 border-b border-orange-100 sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <a href="/">
            <div className="w-14 h-14 bg-gradient-to-r from-orange-500 to-red-500 rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-sm">MIAM</span>
            </div>
          </a>

          <div className="hidden md:flex items-center space-x-8">
            <a
              href="#"
              className="text-gray-700 hover:text-orange-500 transition-colors font-medium"
            >
              Ayuda
            </a>
            <a
              href="#"
              className="text-gray-700 hover:text-orange-500 transition-colors font-medium"
            >
              Registrar restaurante
            </a>
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
                <a
                  href="#"
                  className="text-lg font-medium text-gray-700 hover:text-orange-500 transition-colors py-2"
                  onClick={() => setIsOpen(false)}
                >
                  Ayuda
                </a>
                <a
                  href="#"
                  className="text-lg font-medium text-gray-700 hover:text-orange-500 transition-colors py-2"
                  onClick={() => setIsOpen(false)}
                >
                  Registrar restaurante
                </a>

                <div className=" pt-4 mt-4">2025 MIAM</div>
              </div>
            </div>
          )}

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded hover:bg-gray-100 text-orange-600"
          >
            ✕
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
