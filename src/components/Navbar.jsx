import React from "react";

const Navbar = () => {
    console.log("in nav comp")
  return (
    <nav className="bg-blue-700 text-white px-6 py-4 flex justify-between items-center">
      <h1 className="text-xl font-bold">at digital</h1>
      <div className="hidden md:flex space-x-6">
        <a href="#" className="hover:underline">Services</a>
        <a href="#" className="hover:underline">About Us</a>
        <a href="#" className="hover:underline">Contact Us</a>
        <a href="#" className="hover:underline">Careers</a>
      </div>
    </nav>
  );
};

export default Navbar; 
