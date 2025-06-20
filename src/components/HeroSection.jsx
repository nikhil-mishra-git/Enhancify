import React from 'react';
import BackgroundImage from '../assets/Images/heroBgimage.png';
import { Container } from '../components';

const HeroSection = ({
  title = 'Revolutionary',
  highlight = 'AI-Powered',
  subtitle = 'Image Enhancer',
  desc,
  children,
}) => {
  return (
    <Container>
      <section
        className="relative bg-cover bg-center bg-no-repeat flex items-center justify-center px-6 pt-15 pb-8 md:pt-20 md:pb-15 text-center text-white"
        style={{ backgroundImage: `url(${BackgroundImage})` }}
      >
        <div className="w-full space-y-6 z-10 relative">

          <h1 className="text-[8vw] sm:text-7xl tracking-4 leading-tight">
            {title}{' '}
            <span className="bg-gradient-to-r from-[#825cf5] to-[#c995fe] bg-clip-text text-transparent whitespace-nowrap">
              {highlight}
            </span>
            <div>{subtitle}</div>
          </h1>

          {desc && (
            <p className="text-[3vw] w-full md:max-w-4xl mx-auto md:text-lg text-gray-300">
              {desc}
            </p>
          )}
        </div>
      </section>
    </Container>
  );
};

export default HeroSection;
