import React from 'react';
import { NavLink } from 'react-router-dom';
import { FaArrowRight } from 'react-icons/fa';
import enhancerKit1 from '../assets/Images/OtherImage1.png';
import enhancerKit2 from '../assets/Images/OtherImage2.png';
import { Container } from '../components'

const OtherKits = () => {
    return (
        <Container>
            <section className="py-10 md:py-20 px-4 md:px-6 text-white mt-10 md:mt-20">
                <div className=" mx-auto space-y-20">

                    <div className="text-center md:text-left space-y-5">
                        <h2 className="text-[7vw] md:text-5xl leading-tight tracking-tight">
                            The All-in-one AI <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#7d5fff] to-[#a97fff]">
                                Photo Enhancer Kits
                            </span>
                        </h2>
                    </div>

                    <div className="flex flex-col md:flex-row items-center justify-between gap-10 md:gap-20">

                        <div className="w-full max-w-xl text-left space-y-6">
                            <h3 className="text-2xl md:text-4xl font-semibold">Enhance Portraits & Selfies</h3>
                            <p className="text-base md:text-l text-justify text-gray-300 leading-relaxed">
                                Enhancify specializes in enhancing people’s faces and features in images. Making them stand out,
                                yet keeping them natural and realistic.
                            </p>
                            <NavLink
                                to="/enhance"
                                className="inline-flex cursor-pointer items-center gap-2 px-6 py-3 rounded-full text-white font-medium text-sm md:text-lg transition-all duration-300 bg-gradient-to-r  from-[#7d5fff] to-[#a97fff] hover:opacity-90 shadow-md backdrop-blur-md border border-white/10"
                            >
                                Try Image Enhancer <FaArrowRight className="text-white text-sm md:text-base" />
                            </NavLink>

                        </div>

                        <div className="w-full max-w-xl rounded-2xl overflow-hidden border border-white/10 shadow-xl">
                            <img
                                src={enhancerKit1}
                                alt="Portrait Before After"
                                className="w-full h-auto object-cover"
                            />
                        </div>
                    </div>

                    <div className="flex flex-col md:flex-row-reverse items-center justify-between gap-10 md:gap-20">
 
                        <div className="w-full max-w-xl text-left space-y-6">
                            <h3 className="text-2xl md:text-4xl font-semibold">Remove Backgrounds Instantly</h3>
                            <p className="text-base md:text-l text-justify text-gray-300 leading-relaxed">
                                Easily remove backgrounds from any image using AI — perfect for product photos, profile pictures, or digital designs.
                                Get clean, transparent results in seconds with no manual editing required.
                            </p>
                            <NavLink
                                to="/bgremove"
                                className="inline-flex cursor-pointer items-center gap-2 px-6 py-3 rounded-full text-white font-medium text-sm md:text-lg transition-all duration-300 bg-gradient-to-r from-[#7d5fff] to-[#a97fff] hover:opacity-90 shadow-md backdrop-blur-md border border-white/10"
                            >
                                Try Background Remover <FaArrowRight className="text-white text-sm md:text-base" />
                            </NavLink>
                        </div>

                        <div className="w-full max-w-xl rounded-2xl overflow-hidden border border-white/10 shadow-xl">
                            <img
                                src={enhancerKit2}
                                alt="Background Removal Example"
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
