import React from 'react'
import logoImage from '../assets/Images/logoImage.png'

const Logo = () => {
  return (
    <div className="flex items-center gap-1 md:gap-2">
      <img src={logoImage} alt="Logo" className="w-8 h-8 object-contain" />
      <span className="text-[1.1rem] md:text-[1.6rem] font-bold tracking-wide text-white">
        Enhancify
      </span>
    </div>
  )
}

export default Logo
