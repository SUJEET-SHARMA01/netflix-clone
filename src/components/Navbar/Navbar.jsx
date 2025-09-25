import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react"; // ✅ lightweight icon library

function Navbar() {
  const [show, setShow] = useState(false);   // scroll background
  const [menuOpen, setMenuOpen] = useState(false); // mobile menu toggle

  // scroll listener
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setShow(true);
      } else {
        setShow(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 w-full flex items-center justify-between px-6 py-3 transition-all duration-500 z-50 ${
        show ? "bg-black" : "bg-transparent"
      }`}
    >
      {/* Left - Netflix Logo */}
      <img
        className="w-24 object-contain"
        src="logo.png"
        alt="Netflix Logo"
      />

      {/* Desktop Navigation */}
      <ul className="hidden md:flex gap-10 text-white font-medium">
        <li className="cursor-pointer hover:text-gray-300">Home</li>
        <li className="cursor-pointer hover:text-gray-300">TV Shows</li>
        <li className="cursor-pointer hover:text-gray-300">Movies</li>
        <li className="cursor-pointer hover:text-gray-300">New & Popular</li>
        <li className="cursor-pointer hover:text-gray-300">My List</li>
      </ul>

      {/* Right - Avatar + Menu Icon */}
      <div className="flex items-center gap-4">
        {/* Avatar */}


        {/* Mobile Menu Icon */}
        <button
          className="md:hidden text-white"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu Drawer */}
      {menuOpen && (
        <div className="absolute top-16 right-0 w-48 bg-black text-white p-5 flex flex-col gap-4 md:hidden shadow-lg rounded-l-lg">
          <a href="#" className="hover:text-gray-300">Home</a>
          <a href="#" className="hover:text-gray-300">TV Shows</a>
          <a href="#" className="hover:text-gray-300">Movies</a>
          <a href="#" className="hover:text-gray-300">New & Popular</a>
          <a href="#" className="hover:text-gray-300">My List</a>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
