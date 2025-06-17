import React from 'react'
import BannerImage from '../assets/Main Banner.png'
import BackgroundImage from '../assets/Images/heroBgimage.png'
import { Container, ActionButtons, RotableBadge } from '../components'

const HeroSection = () => {
  return (
    <Container>
      <section
        className="relative min-h-[60vh] bg-cover bg-center bg-no-repeat flex items-center justify-center px-6 py-16 text-center text-white"
        style={{ backgroundImage: `url(${BackgroundImage})` }}
      >
        {/* Content */}
        <div className="w-full space-y-6 z-10 relative">
          <h1 className="text-4xl sm:text-7xl tracking-4 leading-tight">
            Revolutionary{' '}
            <span className="bg-gradient-to-r from-[#825cf5] to-[#c995fe] bg-clip-text text-transparent whitespace-nowrap">
              AI-Powered
            </span>
            <div>Image Enhancer</div>
          </h1>

          {/* Subtext */}
          <p className="text-xs md:text-lg text-gray-300 leading-8">
            Easy-to-use apps to automatically enhance photos in a few clicks, without <br /> the need of time-consuming manual post-processing.
          </p>

          <div className="mt-10">
            <ActionButtons onClick={() => console.log("Uploading...")} />
          </div>

          

        </div>
      </section>
    </Container>
  )
}

export default HeroSection
