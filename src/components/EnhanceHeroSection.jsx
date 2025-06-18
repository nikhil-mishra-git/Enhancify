import React from 'react'
import BannerImage from '../assets/Main Banner.png'
import BackgroundImage from '../assets/Images/heroBgimage.png'
import { Container, ActionButtons } from '.'

const EnhanceHeroSection = () => {
  return (
    <Container>
      <section
        className="relative bg-cover bg-center bg-no-repeat flex items-center justify-center px-3 md:px-6 pt-20 pb-14 md:py-20 text-center text-white"
        style={{ backgroundImage: `url(${BackgroundImage})` }}
      >
        {/* Content */}
        <div className="w-full space-y-6 z-10 relative">
          <h1 className="text-[9vw] sm:text-7xl tracking-4 leading-tight">
            Enhance{' '}
            <span className="bg-gradient-to-r from-[#825cf5] to-[#c995fe] bg-clip-text text-transparent whitespace-nowrap ">
              Photos Quality
            </span>
            <div>Online With AI</div>
          </h1>

          {/* Subtext */}
          <p className="text-[3vw] md:text-lg text-gray-300">
            Elevate your images easily with Enhancify powerful AI Photo Enhancer feature
          </p>


        </div>
      </section>
    </Container>
  )
}

export default EnhanceHeroSection
