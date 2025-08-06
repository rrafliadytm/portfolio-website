import React from 'react'
import Header from './components/header.jsx'
import Hero from './components/Hero.jsx'
import Footer from './components/Footer.jsx'
import './index.css' // Pastikan ini mengimpor file CSS yang benar


function App() {
  
  return (
    <>
      <div className="min-h-screen flex flex-col">
        <Header />
        <main>
          <Hero />
        </main>
      </div>
      <Footer />
    </>
  )
}

export default App
