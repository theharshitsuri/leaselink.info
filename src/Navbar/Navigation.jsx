import React, { useState } from 'react';
import { FiMenu } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import Sidebar from './Sidebar/sidebar';
import logo from '../Images/logo.png';

const Navbar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="pb-20 bg-gray-100">
      {/* Navbar */}
      <nav className="bg-gray-800 p-4 fixed top-0 left-0 w-full z-50">
        <div className="container mx-auto flex justify-between items-center">
          {/* Logo */}
          <div className="text-white text-5xl font-extrabold tracking-wide">
            <Link to="/landing">
              Lease Link              
            </Link>
          </div>

          {/* Navigation Options */}
          <ul className="hidden md:flex space-x-10 text-lg font-medium text-white mr-16">
            <li className="hover:text-gray-300 transition duration-300">
              <Link to="/landing">Apartments</Link>
            </li>
            <li className="hover:text-gray-300 transition duration-300">
              <Link to="/aboutus">About Us</Link>
            </li>
          </ul>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              className="text-white focus:outline-none"
              onClick={toggleSidebar}
            >
              <FiMenu className="w-6 h-6" />
            </button>
          </div>
        </div>
      </nav>

      {/* Sidebar Component */}
      <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
      
      {/* Adjust Sidebar z-index to ensure it overlays above the navbar */}
      <style jsx>{`
        .sidebar {
          z-index: 60; /* Higher than the navbar */
        }
      `}</style>
    </div>
  );
};

export default Navbar;
