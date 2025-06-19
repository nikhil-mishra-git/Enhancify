import React from 'react'
import { HeroSection, BeforeAfterSlider, FAQSection,OtherKits, Features } from '../components'

const Home = () => {
  return (
    <>
      <HeroSection
        title=" Revolutionary"
        highlight="AI-Powered"
        subtitle="Image Enhancer"
        desc="Easy-to-use apps to automatically enhance photos in a few clicks, without the need of time-consuming manual post-processing"
      />
      <BeforeAfterSlider />
      <OtherKits />
      <Features />
      <FAQSection />
    </>
  )
}

export default Home