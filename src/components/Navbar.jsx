import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-gray-900 text-white shadow-lg">
      <div className="container mx-auto flex items-center justify-between px-6 py-4">
        {/* Logo */}
        <NavLink
          to="/"
          className="w-12 h-12 rounded-lg bg-gradient-to-r from-blue-500 to-blue-700 flex items-center justify-center font-bold shadow-md"
        >
          <p className="text-white">PM</p>
        </NavLink>

        {/* Desktop Nav */}
        <nav className="hidden md:flex text-lg gap-8 font-medium">
          <NavLink
            to="/about"
            className={({ isActive }) =>
              `transition-colors duration-200 ${
                isActive ? "text-blue-400" : "text-white hover:text-blue-400"
              }`
            }
          >
            About
          </NavLink>
          <NavLink
            to="/projects"
            className={({ isActive }) =>
              `transition-colors duration-200 ${
                isActive ? "text-blue-400" : "text-white hover:text-blue-400"
              }`
            }
          >
            Projects
          </NavLink>
        </nav>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden text-white"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Dropdown with Animation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="md:hidden bg-gray-800 px-6 py-4 space-y-4 overflow-hidden"
          >
            <NavLink
              to="/about"
              onClick={() => setIsOpen(false)}
              className={({ isActive }) =>
                `block transition-colors duration-200 ${
                  isActive ? "text-blue-400" : "text-white hover:text-blue-400"
                }`
              }
            >
              About
            </NavLink>
            <NavLink
              to="/projects"
              onClick={() => setIsOpen(false)}
              className={({ isActive }) =>
                `block transition-colors duration-200 ${
                  isActive ? "text-blue-400" : "text-white hover:text-blue-400"
                }`
              }
            >
              Projects
            </NavLink>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
