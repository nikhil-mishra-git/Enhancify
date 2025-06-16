import React from 'react'
import BannerImage from '../assets/Main Banner.png'
import BackgroundImage from '../assets/Images/heroBgimage.png'
import HeroSideEffect from '../assets/Images/HeroSideEffect.png'

const HeroSection = () => {
  return (
    <section
      className="relative min-h-screen bg-cover bg-center bg-no-repeat flex items-center justify-center px-6 py-24 text-center text-white"
      style={{ backgroundImage: `url(${BackgroundImage})` }}
    >


      {/* Content */}
      <div className=" w-full space-y-6 z-10 relative">
        <h1 className="text-4xl sm:text-7xl font-bold tracking-4 leading-tight">
          Revolutionary <span className="bg-gradient-to-r from-[#825cf5] to-[#c995fe] bg-clip-text text-transparent">
            AI-Powered
          </span>

          <div>Image Enhancer</div>
        </h1>

        {/* Subtext */}
        <p className="text-lg sm:text-xl text-gray-300">
          Unleash Brainwave's AI potential. Use the open AI conversation app Pixcels Themes
        </p>

        {/*CTA Image */}
        <div className="flex w-full items-center justify-center mt-15">
          <img
            src={BannerImage}
            alt="Start with AI"
            className="w-[60%] h-auto object-contain"
          />
        </div>
      </div>
    </section>
  )
}

export default HeroSection
