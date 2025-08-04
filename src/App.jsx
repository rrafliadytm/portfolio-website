import React from 'react'
import Header from './components/header.jsx'
import Footer from './components/Footer.jsx'
import './index.css' // Pastikan ini mengimpor file CSS yang benar


function App() {
  
  return (
    <>
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="container mx-auto px-6 py-8">
          <h1 className="text-4xl text-center font-bold mb-8">Selamat Datang di Portofolio Saya</h1>
        </main>
      </div>
      <Footer />
    </>
  )
}

export default App
