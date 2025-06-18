import React from 'react'
import { FiUploadCloud } from 'react-icons/fi'

const ImageUploadBox = ({ onImageSelect }) => {
  const handleChange = (e) => {
    const file = e.target.files?.[0]
    if (file && onImageSelect) {
      onImageSelect(file)
    }
  }

  return (
    <div className="w-full flex justify-center items-center px-4 md:px-6">
      <label
        htmlFor="imageUpload"
        className="group w-full max-w-4xl h-64 md:h-72 flex flex-col items-center justify-center px-6 border-2 border-dashed border-white/20 bg-white/5 hover:border-white hover:text-white text-gray-400 transition-all duration-300 rounded-2xl backdrop-blur-lg cursor-pointer shadow-xl"
      >
        <FiUploadCloud
          size={50}
          className="mb-4 text-white/60 group-hover:scale-110 group-hover:text-white transition-transform duration-300"
        />
        <div className="text-center space-y-1">
          <p className="text-base md:text-lg font-semibold text-white">
            Click or drag an image to upload
          </p>
          <p className="text-xs md:text-sm text-gray-400 group-hover:text-gray-300">
            JPG, PNG, or WEBP • Max 10MB
          </p>
        </div>
        <input
          type="file"
          accept="image/*"
          id="imageUpload"
          className="hidden"
          onChange={handleChange}
        />
      </label>
    </div>
  )
}

export default ImageUploadBox
