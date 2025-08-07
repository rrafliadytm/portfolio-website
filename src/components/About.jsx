// src/components/Hero.jsx

import React from 'react';

function About() {
  return (
    <section className="bg-white dark:bg-slate-900 py-16 md:py-20">
      <div className="container mx-auto px-6">
            <div className="text-center md:text-center">
                <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 dark:text-white" id='about'>
                About Me
                </h1>
            </div>
        </div>
    </section>
  );
}

export default About;