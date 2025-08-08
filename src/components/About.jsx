// src/components/Hero.jsx

import React from 'react';

// Daftar skill, Anda bisa menambah atau mengubahnya sesuai keahlian
const skills = [
  { name: 'JavaScript (ES6+)', level: '90%' },
  { name: 'React', level: '85%' },
  { name: 'Tailwind CSS', level: '95%' },
  { name: 'Node.js', level: '70%' },
  { name: 'PHP', level: '80%' },
  { name: 'Laravel', level: '75%' },
];

function About() {
  return (
    <section className="bg-white dark:bg-slate-900 py-16 md:py-20">
      <div className="container mx-auto px-6">
            <div className="text-center md:text-center">
              <section id="about" className="bg-white dark:bg-slate-800 rounded-2xl py-16 md:pt-12 md:pb-24">
                <div className="container mx-auto px-6">
                  {/* Judul Seksi */}
                  <div className="text-center mb-12">
                    <h2 className="text-4xl font-extrabold text-slate-900 dark:text-white">
                      About Me
                    </h2>
                    <p className="mt-2 text-lg text-slate-500 dark:text-slate-400">
                      Some of my skills and experience
                    </p>
                  </div>

                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
                    
                    {/* Kolom Kiri: Cerita atau Narasi 📖 */}
                    <div className="space-y-6 text-slate-600 dark:text-slate-300 leading-relaxed">
                      <p>
                        Hello! My name is Muhammad Rafli Adyatma, but you can call me Rafli. Currently I'm an Information System student at Universitas Merdeka Malang with 3.98 GPA. I'm also a freelance 3D artist and graphic designer that has so many experience. 
                      </p>
                      <p>
                        Dari sana, saya mulai belajar HTML, CSS, dan JavaScript. Rasa penasaran itu membawa saya lebih dalam ke dunia front-end dengan React, di mana saya jatuh cinta pada konsep komponen dan state management. Saya juga mendalami back-end dengan Node.js dan PHP/Laravel untuk memahami bagaimana sebuah aplikasi bekerja secara menyeluruh.
                      </p>
                      <p>
                        Di luar coding, saya suka membaca artikel teknologi, mencoba-coba library baru, dan berkontribusi pada proyek open-source. Saya percaya bahwa proses belajar tidak pernah berhenti, terutama di industri teknologi yang bergerak cepat.
                      </p>
                    </div>

                    {/* Kolom Kanan: Keahlian atau Skills 💡 */}
                    <div className="space-y-5">
                      {skills.map((skill, index) => (
                        <div key={index}>
                          <div className="flex justify-between mb-1">
                            <span className="text-base font-medium text-slate-700 dark:text-slate-200">
                              {skill.name}
                            </span>
                            <span className="text-sm font-medium text-slate-700 dark:text-slate-200">
                              {skill.level}
                            </span>
                          </div>
                          <div className="w-full bg-slate-200 dark:bg-slate-700 rounded-full h-2.5">
                            <div 
                              className="bg-blue-500 h-2.5 rounded-full" 
                              style={{ width: skill.level }}
                            ></div>
                          </div>
                        </div>
                      ))}
                    </div>
                    
                  </div>
                </div>
              </section>
            </div>
        </div>
    </section>
  );
}

export default About;