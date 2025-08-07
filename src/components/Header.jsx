// src/components/Header.jsx

import React, { useState } from 'react';

function Header() {
  // State untuk mengelola tampilan menu mobile
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="dark:bg-slate-900 shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-6 py-4 flex md:justify-center justify-between items-center">
        
        {/* Logo atau Nama Website */}
        <div className="flex items-center mx-auto md:hidden">
          <a href="/" className="text-2xl font-bold text-white">
            My Portfolio
          </a>
        </div>

        {/* Navigasi untuk Desktop 🖥️ */}
        <nav className="hidden md:flex space-x-12">
          <a href="/projects" className="text-white font-semibold hover:text-blue-500">
            Projects
          </a>
          <a href="#about" className="text-white font-semibold hover:text-blue-500">
            About
          </a>
          <a href="#contact" className="text-white font-semibold hover:text-blue-500">
            Contact
          </a>
        </nav>
        
        {/* Tombol Menu Hamburger untuk Mobile 📱 */}
        <div className="absolute right-6 top-3 md:hidden">
          <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
            <svg
              className="w-6 h-6 hover:bg-gray-200 transition-colors "
              fill="none"
              stroke="white"
              strokeWidth="2"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              ></path>
            </svg>
          </button>
        </div>
      </div>

      {/* Menu Navigasi Mobile (Muncul saat state isMenuOpen true) */}
      {isMenuOpen && (
        <nav className="md:hidden bg-white px-6 pb-5 mt-2">
          <a href="#projects" className="block py-2 text-gray-600 hover:text-blue-500">
            Projects
          </a>
          <a href="#about" className="block py-2 text-gray-600 hover:text-blue-500">
            About
          </a>
          <a href="#contact" className="block py-2 text-gray-600 hover:text-blue-500">
            Contact
          </a>
        </nav>
      )}
    </header>
  );
}

export default Header;