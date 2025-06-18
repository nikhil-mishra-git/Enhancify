import React from 'react';
import { NavLink } from 'react-router-dom';
import { FaArrowRight } from 'react-icons/fa';
import enhancerKit1 from '../assets/Images/OtherImage1.png';
import enhancerKit2 from '../assets/Images/OtherImage2.png';
import Container from './container/container';

const OtherKits = () => {
    return (
        <Container>
            <section className="py-10 md:py-20 px-4 md:px-6 text-white mt-20">
                <div className=" mx-auto space-y-20">

                    {/* Section Title */}
                    <div className="text-center md:text-left space-y-5">
                        <h2 className="text-[7vw] md:text-5xl leading-tight tracking-tight">
                            The All-in-one AI <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-purple-500">
                                Photo Enhancer Kits
                            </span>
                        </h2>
                    </div>

                    {/* Portrait Enhancer */}
                    <div className="flex flex-col md:flex-row items-center justify-between gap-10 md:gap-20">
                        {/* Text Content */}
                        <div className="w-full max-w-xl text-left space-y-6">
                            <h3 className="text-2xl md:text-4xl font-semibold">Enhance Portraits & Selfies</h3>
                            <p className="text-base md:text-lg text-gray-300 leading-relaxed">
                                Enhancify specializes in enhancing people’s faces and features in images. Making them stand out,
                                yet keeping them natural and realistic.
                            </p>
                            <NavLink
                                to="/enhance"
                                className="inline-flex cursor-pointer items-center gap-2 px-6 py-3 rounded-full text-white font-medium text-sm md:text-lg transition-all duration-300 bg-gradient-to-r from-[#825cf5] to-[#c995fe] hover:opacity-90 shadow-md backdrop-blur-md border border-white/10"
                            >
                                Try now <FaArrowRight className="text-white text-sm md:text-base" />
                            </NavLink>

                        </div>

                        {/* Image */}
                        <div className="w-full max-w-xl rounded-2xl overflow-hidden border border-white/10 shadow-xl">
                            <img
                                src={enhancerKit1}
                                alt="Portrait Before After"
                                className="w-full h-auto object-cover"
                            />
                        </div>
                    </div>

                    {/* Product Photo Enhancer */}
                    <div className="flex flex-col md:flex-row-reverse items-center justify-between gap-10 md:gap-20">
                        {/* Text Content */}
                        <div className="w-full max-w-xl text-left space-y-6">
                            <h3 className="text-2xl md:text-4xl font-semibold">Improve Product Photos</h3>
                            <p className="text-base md:text-lg text-gray-300 leading-relaxed">
                                Sharpen product images in seconds to make them more appealing and impactful. Also try our AI
                                background remover for cleaner product shots.
                            </p>
                            <NavLink
                                to="/enhance"
                                className="inline-flex cursor-pointer items-center gap-2 px-6 py-3 rounded-full text-white font-medium text-sm md:text-lg transition-all duration-300 bg-gradient-to-r from-[#825cf5] to-[#c995fe] hover:opacity-90 shadow-md backdrop-blur-md border border-white/10"
                            >
                                Try now <FaArrowRight className="text-white text-sm md:text-base" />
                            </NavLink>

                        </div>

                        {/* Image */}
                        <div className="w-full max-w-xl rounded-2xl overflow-hidden border border-white/10 shadow-xl">
                            <img
                                src={enhancerKit2}
                                alt="Product Before After"
                                className="w-full h-auto object-cover"
                            />
                        </div>
                    </div>

                </div>
            </section>
        </Container>
    );
};

export default OtherKits;
