import React from 'react'
import Header from './components/Header'
import HeroSection from './components/HeroSection'
import Footer from './components/Footer'


const App = () => {
  return (
    <div className='className="min-h-screen bg-[#0e0c15]'>
      <Header />
      <HeroSection/>
      <Footer/>
    </div>
  )
}

export default App