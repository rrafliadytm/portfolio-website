// src/components/Header.jsx

import React, { useState } from 'react';

function Header() {
  // State untuk mengelola tampilan menu mobile
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        
        {/* Logo atau Nama Website */}
        <a href="/" className="text-2xl font-bold text-gray-800">
          My Portfolio
        </a>

        {/* Navigasi untuk Desktop 🖥️ */}
        <nav className="hidden md:flex space-x-8">
          <a href="/projects" className="text-gray-600 hover:text-blue-500">
            Proyek
          </a>
          <a href="#about" className="text-gray-600 hover:text-blue-500">
            Tentang Saya
          </a>
          <a href="#contact" className="text-gray-600 hover:text-blue-500">
            Kontak
          </a>
        </nav>

        {/* Tombol Kontak untuk Desktop */}
        <a 
          href="#contact" 
          className="hidden md:block bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
        >
          Hubungi Saya
        </a>

        {/* Tombol Menu Hamburger untuk Mobile 📱 */}
        <div className="md:hidden">
          <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
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
        <nav className="md:hidden bg-white px-6 pb-4">
          <a href="#projects" className="block py-2 text-gray-600 hover:text-blue-500">
            Proyek
          </a>
          <a href="#about" className="block py-2 text-gray-600 hover:text-blue-500">
            Tentang Saya
          </a>
          <a href="#contact" className="block py-2 text-gray-600 hover:text-blue-500">
            Kontak
          </a>
          <a
            href="#contact"
            className="block mt-2 text-center bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
          >
            Hubungi Saya
          </a>
        </nav>
      )}
    </header>
  );
}

export default Header;