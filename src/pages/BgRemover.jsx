import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { FaMagic, FaDownload, FaRedo } from 'react-icons/fa'
import { removeBg } from '../api/imageProcessAPI'
import { downloadImageFromURL } from '../config/downloadFile'
import {
  BeforeAfterSlider,
  ImageUploadBox,
  OtherKits,
  BeforeAfterSkeleton,
  HeroSection
} from '../components'
import {
  setImage,
  setResult,
  setLoading,
  setError,
  resetState
} from '../features/imageSlice'

const BgRemover = () => {
  const dispatch = useDispatch()
  const { image, result, loading } = useSelector((state) => state.image)

  const handleFileChange = async (file) => {
    if (!file) return;

    try {
      dispatch(setImage(URL.createObjectURL(file)))
      dispatch(setLoading(true))

      const resultUrl = await removeBg(file)
      dispatch(setResult(resultUrl))
    } catch (error) {
      dispatch(setError(error.message))
    } finally {
      dispatch(setLoading(false))
    }
  }

  const handleEnhanceOther = () => {
    dispatch(resetState())
  }

  const handleDownload = async () => {
    downloadImageFromURL(result, 'transparent-image.png')
  }

  const showSlider = !loading && image && result

  return (
    <>
      <HeroSection
        title="Instant"
        highlight="BG Remover"
        subtitle="AI-Powered"
        desc="Quickly make images transparent. Ideal for products, profiles, and more."
      />

      {!showSlider && <ImageUploadBox onImageSelect={handleFileChange} />}

      {loading ? (
        <BeforeAfterSkeleton />
      ) : showSlider ? (
        <>
          <BeforeAfterSlider beforeImage={image} afterImage={result} />

          <div className="flex flex-row flex-wrap justify-center items-center gap-3 md:gap-8 mt-12">

            <button
              onClick={handleDownload}
              className="flex items-center justify-center cursor-pointer gap-2 px-4 md:px-6 py-2.5 md:py-3 rounded-full shadow-md bg-gradient-to-r from-[#825cf5] to-[#c995fe] hover:opacity-90 text-white font-medium text-xs md:text-lg transition-all duration-200"
            >
              <FaDownload className="text-sm md:text-lg" />
              Download Transparent Image
            </button>

            <button
              onClick={handleEnhanceOther}
              className="flex items-center justify-center cursor-pointer gap-2 px-4 md:px-6 py-2.5 md:py-3 rounded-full border border-white/20 backdrop-blur-sm bg-white/10 hover:bg-white/20 text-white font-medium text-xs md:text-lg transition-all duration-200"
            >
              <FaRedo className="text-sm md:text-base" />
              Remove Background From Another
            </button>
          </div>


        </>
      ) : (
        <div className="flex flex-col items-center justify-center mt-12 text-center space-y-2">
          <FaMagic className="text-purple-400 text-3xl animate-pulse" />
          <p className="text-lg md:text-xl font-semibold text-gray-200">
            Upload an image to remove its background
          </p>
          <p className="text-[3vw] md:text-sm text-gray-400 max-w-md">
            Our AI automatically removes the background from your image. Download it as a clean PNG.
          </p>

        </div>
      )}

      <OtherKits />
    </>
  )
}

export default BgRemover