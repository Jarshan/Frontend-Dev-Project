import React from "react";

const Navbar = () => {
    console.log("in nav comp")
  return (
    <nav className=" bg-blue-700 bg-pri text-white px-6 py-4 flex justify-between items-center">
    <img src= "/Images/Logo.png" alt="Company Logo" className="h-10 w-auto" />
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
