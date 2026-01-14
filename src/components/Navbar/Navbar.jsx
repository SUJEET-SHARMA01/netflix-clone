import React, { useState, useEffect, useRef } from "react";
import { Menu, X } from "lucide-react";

function Navbar() {
  const [show, setShow] = useState(false); // navbar background scroll
  const [menuOpen, setMenuOpen] = useState(false); // mobile menu toggle
  const [dropdownOpen, setDropdownOpen] = useState(false); // avatar dropdown
  const dropdownRef = useRef(null); // reference for dropdown

  // Scroll listener
  useEffect(() => {
    const handleScroll = () => {
      setShow(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <nav
      className={`fixed top-2 w-full flex items-center justify-evenly px-6  transition-all duration-500 z-50 ${
        show ? "bg-black" : "bg-transparent"
      }`}
    >
      {/* Left - Netflix Logo */}
      <img className="w-24 object-contain mr-4" src="logo.png" alt="Netflix Logo" />

      {/* Desktop Navigation */}
      <ul className="hidden md:flex gap-10 text-white font-medium">
        <li className="cursor-pointer hover:text-gray-300">Home</li>
        <li className="cursor-pointer hover:text-gray-300">TV Shows</li>
        <li className="cursor-pointer hover:text-gray-300">Movies</li>
        <li className="cursor-pointer hover:text-gray-300">New & Popular</li>
        <li className="cursor-pointer hover:text-gray-300">My List</li>
      </ul>

      {/* Right - Avatar + Menu Icon */}
      <div className="flex items-center gap-4 relative">
        {/* Avatar (Dropdown Trigger) */}
        <div className="relative" ref={dropdownRef}>
          <img
            className="w-10 h-10 rounded cursor-pointer transition-transform duration-200 hover:scale-110 hover:brightness-110"
            src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
            alt="Netflix Avatar"
            onClick={() => setDropdownOpen(!dropdownOpen)}
          />

          {/* Dropdown Menu */}
          {dropdownOpen && (
            <div className="absolute right-0 mt-2 w-40 bg-black border border-gray-700 rounded-md shadow-lg text-white flex flex-col">
              <button className="px-4 py-2 text-left hover:bg-gray-800">
                Sign In
              </button>
              <button className="px-4 py-2 text-left hover:bg-gray-800">
                Profile
              </button>
              <button className="px-4 py-2 text-left hover:bg-gray-800">
                Settings
              </button>
              <button className="px-4 py-2 text-left hover:bg-gray-800">
                Logout
              </button>
            </div>
          )}
        </div>

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
          <a href="#" className="hover:text-gray-300">
            Home
          </a>
          <a href="#" className="hover:text-gray-300">
            TV Shows
          </a>
          <a href="#" className="hover:text-gray-300">
            Movies
          </a>
          <a href="#" className="hover:text-gray-300">
            New & Popular
          </a>
          <a href="#" className="hover:text-gray-300">
            My List
          </a>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
