import React from 'react'
import { HeroSection, BeforeAfterSlider, FAQSection, OtherKits, Features, CustomeButton } from '../components'

const Home = () => {
  return (
    <>
      <HeroSection
        title=" Revolutionary"
        highlight="AI-Powered"
        subtitle="Image Enhancer"
        desc="Easy-to-use apps to automatically enhance photos in a few clicks, without the need of time-consuming manual post-processing"
      />
      <section className="flex justify-center">
        <CustomeButton />
      </section>
      <BeforeAfterSlider />
      <OtherKits />
      <Features />
      <FAQSection />
    </>
  )
}

export default Home