import React from 'react'
import { useSelector } from 'react-redux'
import { FaMagic } from 'react-icons/fa'
import {
  BeforeAfterSlider,
  ImageUploadBox,
  EnhanceHeroSection,
  OtherKits,
  BeforeAfterSkeleton
} from '../components'

const Enhance = () => {
  const { beforeImage, afterImage, loading } = useSelector((state) => state.image)

  const showSlider = !loading && beforeImage && afterImage

  return (
    <>
      <EnhanceHeroSection />
      <ImageUploadBox />

      {loading ? (
        <BeforeAfterSkeleton />
      ) : showSlider ? (
        <BeforeAfterSlider beforeImage={beforeImage} afterImage={afterImage} />
      ) : (
        <div className="flex flex-col items-center justify-center mt-12 text-center space-y-2">
          <FaMagic className="text-purple-400 text-3xl animate-pulse" />
          <p className="text-lg md:text-xl font-semibold text-gray-200">
            Upload an image to begin enhancement
          </p>
          <p className="text-[3vw] md:text-sm text-gray-500 max-w-md">
            Enhancify will automatically process your image and show a beautiful transformation preview below.
          </p>
        </div>
      )}

      <OtherKits />
    </>
  )
}

export default Enhance
