// src/components/Footer.jsx

import React from 'react';
// Opsional: Jika Anda ingin menggunakan ikon dari library react-icons
// import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 text-slate-300 py-8 px-6">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
        
        {/* Kolom 1: Nama dan Hak Cipta */}
        <div>
          <h3 className="text-xl font-bold text-white mb-2">Muhammad Rafli Adyatma</h3>
          <p className="text-sm">
            &copy; {currentYear} Rafli. All Rights Reserved.
          </p>
        </div>

        {/* Kolom 3: Media Sosial */}
        <div>
          <h3 className="text-xl font-bold text-white mb-2">Ikuti Saya</h3>
          <div className="flex justify-center md:justify-start space-x-4">
            {/* Ganti '#' dengan link profil Anda */}
            <a href="#" aria-label="GitHub" className="hover:text-blue-400">
              {/* <FaGithub size={24} />  <-- Contoh jika pakai react-icons */ }
              GitHub
            </a>
            <a href="#" aria-label="LinkedIn" className="hover:text-blue-400">
              {/* <FaLinkedin size={24} /> */ }
              LinkedIn
            </a>
            <a href="#" aria-label="Twitter" className="hover:text-blue-400">
              {/* <FaTwitter size={24} /> */ }
              Twitter
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
}

export default Footer;