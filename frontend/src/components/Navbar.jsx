import { useState } from "react";
import { NavLink } from "react-router-dom";
import { navLinks } from "../data/navLinks";
import { CgMenuGridO } from "react-icons/cg";
import { IoClose } from "react-icons/io5";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md fixed top-0 left-0 w-full z-50">
      <div className="max-w-7xl mx-auto px-6 py-3 flex justify-between items-center">
        
        <h1 className="text-2xl font-bold text-blue-600">PDF Merger</h1>

        
        <ul className="hidden md:flex justify-center items-center space-x-10">
          {navLinks.map((link, index) => (
            <li key={index}>
              <NavLink
                to={link.path}
                className={({ isActive }) =>
                  `text-gray-700 font-medium hover:text-blue-600 transition ${
                    isActive ? "text-blue-600" : ""
                  }`
                }
              >
                {link.name}
              </NavLink>
            </li>
          ))}
        </ul>

        
        <button
          className="md:hidden text-3xl text-blue-600"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <IoClose /> : <CgMenuGridO />}
        </button>
      </div>

      
      {menuOpen && (
        <div className="md:hidden bg-white shadow-md">
          <ul className="flex flex-col items-center space-y-4 py-4">
            {navLinks.map((link, index) => (
              <li key={index}>
                <NavLink
                  to={link.path}
                  onClick={() => setMenuOpen(false)}
                  className={({ isActive }) =>
                    `text-gray-700 font-medium hover:text-blue-600 transition ${
                      isActive ? "text-blue-600" : ""
                    }`
                  }
                >
                  {link.name}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
