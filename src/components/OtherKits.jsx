import React from 'react';
import { NavLink } from 'react-router-dom';
import enhancerKit1 from '../assets/Images/OtherImage1.png';
import enhancerKit2 from '../assets/Images/OtherImage2.png';

const OtherKits = () => {
  return (
    <section className="py-20 px-6 text-white">
      <div className="max-w-7xl mx-auto space-y-24">

        {/* Title */}
        <div className="text-center space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold leading-tight">
            The All-in-one AI <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-purple-500">
              Photo Enhancer Kits
            </span>
          </h2>
        </div>

        {/* Portrait Enhancer */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          <div className="max-w-lg space-y-4">
            <h3 className="text-2xl font-semibold">Enhance Portraits & Selfies</h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              Enhancify specializes in enhancing people’s faces and features in images. Making them stand out
              but still look natural and realistic.
            </p>
            <NavLink
              to="/enhance"
              className="text-sky-400 hover:text-white transition text-sm font-medium"
            >
              Try now →
            </NavLink>
          </div>
          <div className="rounded-xl overflow-hidden border border-white/10 shadow-xl w-full max-w-xl">
            <img
              src={enhancerKit1}
              alt="Portrait Before After"
              className="w-full h-auto object-cover"
            />
          </div>
        </div>

        {/* Product Photo Enhancer */}
        <div className="flex flex-col md:flex-row-reverse items-center justify-between gap-12">
          <div className="max-w-lg space-y-4">
            <h3 className="text-2xl font-semibold">Improve Product Photos</h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              Sharpen product images in seconds to make them more appealing and impactful. Also try our AI
              background remover for cleaner product shots.
            </p>
            <NavLink
              to="/background-remove"
              className="text-sky-400 hover:text-white transition text-sm font-medium"
            >
              Try now →
            </NavLink>
          </div>
          <div className="rounded-xl overflow-hidden border border-white/10 shadow-xl w-full max-w-xl">
            <img
              src={enhancerKit2}
              alt="Product Before After"
              className="w-full h-auto object-cover"
            />
          </div>
        </div>

      </div>
    </section>
  );
};

export default OtherKits;
