import React from 'react';
import Logo from './Logo'


const Header = () => {
    return (
        <nav className="sticky w-full z-50 top-0 left-0 backdrop-blur-lg">
            <div className="max-w-7xl mx-auto px-8 py-5 flex items-center justify-between text-white">

                {/* Logo */}
                <Logo/>

                {/* Navigation Items */}
                <div className="hidden md:flex gap-4 items-center text-base font-medium">
                    {["Enhance", "Restore", "Background Remove", "About"].map((item) => (
                        <button
                            key={item}
                            className="hover:text-white hover:bg-gradient-to-r from-[#6F8DFF] to-[#145d88] px-5 py-2 rounded-full transition-all duration-300 ease-in-out"
                        >
                            {item}
                        </button>
                    ))}

                    <button className="bg-gradient-to-r from-[#6F8DFF] to-[#91EAE4] text-white px-6 py-2 rounded-full font-semibold shadow-md hover:brightness-110 transition">
                        Login
                    </button>
                </div>
            </div>
        </nav>
    );
};

export default Header;
