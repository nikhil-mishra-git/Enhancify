import React from 'react'
import logoImage from '../assets/Images/logoImage.png'

const Logo = () => {
  return (
    <div className="flex items-center gap-3">
      <img src={logoImage} alt="Logo" className="w-8 h-8 object-contain" />
      <span className="text-3xl font-bold tracking-wide bg-gradient-to-r from-purple-500 to-indigo-600 bg-clip-text text-transparent">
        Enhancify
      </span>
    </div>
  )
}

export default Logo
