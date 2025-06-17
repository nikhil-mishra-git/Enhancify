import React from 'react'
import { Footer, Header, HeroSection, BeforeAfterSlider, FAQSection } from './components'
import Features from './components/Features'
import OtherKits from './components/OtherKits'


const App = () => {
  return (
    <div className='className="min-h-screen bg-[#0e0c15]'>
      <Header />
      <HeroSection/>
      <BeforeAfterSlider/>
      <OtherKits/>
      <Features/>
      <FAQSection/>
      <Footer/>
    </div>
  )
}

export default App