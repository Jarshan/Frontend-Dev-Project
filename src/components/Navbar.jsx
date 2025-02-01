import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-blue-700 text-white px-6 py-4 flex justify-between items-center relative">
      {/* Logo */}
      <img src="/Images/Logo.png" alt="Company Logo" className="h-10 w-auto" />

      {/* Desktop Menu (Hidden on Small Screens) */}
      <div className="hidden md:flex space-x-6">
        <a href="#" className="hover:underline">
          Services
        </a>
        <a href="#" className="hover:underline">
          About Us
        </a>
        <a href="#" className="hover:underline">
          Contact Us
        </a>
        <a href="#" className="hover:underline">
          Careers
        </a>
      </div>

      {/* Mobile Menu Button (Visible on Small Screens) */}
      <button className="md:hidden focus:outline-none z-20" onClick={toggleMenu}>
        {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
      </button>

      {/* Mobile Menu (Dropdown) */}
      {isOpen && (
        <div className="fixed top-16 left-0 w-full bg-blue-700 text-white flex flex-col items-center space-y-4 py-6 md:hidden z-10">
          <a href="#" className="hover:underline" onClick={toggleMenu}>
            Services
          </a>
          <a href="#" className="hover:underline" onClick={toggleMenu}>
            About Us
          </a>
          <a href="#" className="hover:underline" onClick={toggleMenu}>
            Contact Us
          </a>
          <a href="#" className="hover:underline" onClick={toggleMenu}>
            Careers
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;