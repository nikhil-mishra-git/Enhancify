import React from 'react';
import ReactCompareImage from 'react-compare-image';
import { Container } from '../components';

// Default images
import defaultBefore from '../assets/Images/beforeImage.png';
import defaultAfter from '../assets/Images/afterImage.png';

const BeforeAfterSlider = ({
  beforeImage = defaultBefore,
  afterImage = defaultAfter,
  titleBefore = 'Before',
  titleAfter = 'After',
  aspectRatio = '16 / 9',
  maxWidthClass = 'max-w-3xl',
}) => {
  return (
    <Container>
      <div className={`relative ${maxWidthClass} mx-auto rounded-xl overflow-hidden shadow-xl`}>
        {/* Overlay Labels */}
        <div className="absolute top-4 left-4 z-10 bg-black/60 text-white text-sm font-semibold px-3 py-1 rounded-full pointer-events-none">
          {titleBefore}
        </div>
        <div className="absolute top-4 right-4 z-10 bg-black/60 text-white text-sm font-semibold px-3 py-1 rounded-full pointer-events-none">
          {titleAfter}
        </div>

        {/* Image Comparison Area */}
        <div className="relative w-full" style={{ aspectRatio }}>
          <ReactCompareImage
            leftImage={beforeImage}
            rightImage={afterImage}
            sliderLineColor="#8B5CF6"
            sliderLineWidth={3}
            handleSize={30}
          />
        </div>
      </div>
    </Container>
  );
};

export default BeforeAfterSlider;
