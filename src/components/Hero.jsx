// src/components/Hero.jsx

import React from 'react';
const profilePhoto = './public/images/profile.jpeg';

function Hero() {
  return (
    <section className="bg-white dark:bg-slate-900 py-16 md:py-32">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          
          {/* Kolom Kiri: Teks Profil 👨‍💻 */}
          <div className="text-center md:text-left">
            <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 dark:text-white">
              Halo, saya <span className="text-blue-500">Muhammad Rafli Adyatma</span>
            </h1>
            <p className="mt-4 text-xl text-slate-600 dark:text-slate-300">
              Seorang Web Developer dengan fokus pada Front-End.
            </p>
            <p className="mt-6 text-slate-500 dark:text-slate-400 leading-relaxed">
              Saya suka membangun antarmuka pengguna yang cepat, intuitif, dan dinamis. Saat ini saya sedang mendalami React dan ekosistemnya untuk menciptakan pengalaman web yang lebih baik.
            </p>
            
            {/* Tombol Aksi (Call to Action) */}
            <div className="mt-8 flex justify-center md:justify-start gap-4">
              <a 
                href="#projects" 
                className="bg-blue-500 text-white font-semibold px-6 py-3 rounded-lg shadow-lg hover:bg-blue-600 transition-transform transform hover:scale-105"
              >
                Lihat Proyek
              </a>
              <a 
                href="/cv-rafli.pdf" // Ganti dengan link ke file CV Anda
                download
                className="bg-slate-200 text-slate-800 font-semibold px-6 py-3 rounded-lg shadow-lg hover:bg-slate-300 transition-transform transform hover:scale-105"
              >
                Unduh CV 📄
              </a>
            </div>
          </div>
          
          {/* Kolom Kanan: Foto Profil 👤 */}
          <div className="flex justify-center md:justify-end">
            <div className="hidden md:block relative w-64 h-64 md:w-96 md:h-96 rounded-full overflow-hidden shadow-2xl border-4 border-blue-500">
              <img 
                src={profilePhoto} 
                alt="Foto Profil Rafli" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default Hero;