
import React from 'react';
import {
  ReactCompareSlider,
  ReactCompareSliderImage,
} from 'react-compare-slider';
import { Container } from '../components';
import { FaArrowsAltH } from 'react-icons/fa';

import defaultBefore from '../assets/Images/beforeImage.png';
import defaultAfter from '../assets/Images/afterImage.png';

const CustomHandle = () => (
  <div className="relative flex items-center justify-center w-12 h-full">
    <div className="absolute top-0 bottom-0 left-1/2 -translate-x-1/2 w-1 bg-white/50" />
    <div className="relative z-10 flex items-center justify-center w-10 h-10 bg-white/20 backdrop-blur-sm border border-white/30 rounded-full shadow-lg hover:scale-110 transition-transform duration-300">
      <FaArrowsAltH className="text-white text-lg" />
    </div>
  </div>
);

const BeforeAfterSlider = ({
  beforeImage = defaultBefore,
  afterImage = defaultAfter,
  titleBefore = 'Before',
  titleAfter = 'After',
  aspectRatio = '16 / 9',
  maxWidthClass = 'max-w-4xl',
}) => {
  return (
    <Container>
      <div
        className={`relative ${maxWidthClass} mx-auto rounded-xl overflow-hidden shadow-xl my-10`}
        style={{ aspectRatio }}
      >
        {/* Overlay Labels */}
        <div className="absolute top-4 left-4 z-10 bg-black/60 text-white text-sm font-semibold px-3 py-1 rounded-full pointer-events-none">
          {titleBefore}
        </div>
        <div className="absolute top-4 right-4 z-10 bg-black/60 text-white text-sm font-semibold px-3 py-1 rounded-full pointer-events-none">
          {titleAfter}
        </div>

        {/* Image Comparison */}
        <ReactCompareSlider
          itemOne={
            <ReactCompareSliderImage
              src={beforeImage}
              alt="Before"
            />
          }
          itemTwo={
            <ReactCompareSliderImage
              src={afterImage}
              alt="After"
              style={{
                backgroundImage: `
    linear-gradient(45deg, #3a3a3a 25%, transparent 25%),
    linear-gradient(-45deg, #3a3a3a 25%, transparent 25%),
    linear-gradient(45deg, transparent 75%, #3a3a3a 75%),
    linear-gradient(-45deg, transparent 75%, #3a3a3a 75%)`,
                backgroundSize: '20px 20px',
                backgroundPosition: '0 0, 0 10px, 10px -10px, -10px 0',
                backgroundColor: '#1a1a1a',
              }}
            />
          }
          handle={<CustomHandle />}
          style={{
            width: '100%',
            height: '100%',
            borderRadius: '1rem',
            backgroundColor: 'transparent',
          }}
        />
      </div>
    </Container>
  );
};

export default BeforeAfterSlider;
