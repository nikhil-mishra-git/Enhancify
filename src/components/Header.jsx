import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { FiMenu, FiX, FiHome, FiImage, FiLayers } from 'react-icons/fi';
import { Logo, Container } from '../components';

const navItems = [
    { name: 'Home', path: '/', icon: <FiHome /> },
    { name: 'Enhance', path: '/enhance', icon: <FiLayers /> },
    { name: 'BG Remover', path: '/bgremove', icon: <FiImage /> },
];

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <Container>
            <nav className="w-full z-50 top-0 left-0 flex justify-center">
                <div className="w-full mt-10 flex items-center justify-between backdrop-blur-md bg-white/5 border border-white/10 rounded-full px-6 py-4 gap-12 text-white shadow-md">

                    <div className="pl-2">
                        <Logo />
                    </div>

                    <div className="hidden md:flex gap-6 items-center text-l font-medium">
                        {navItems.map(({ name, path }) => (
                            <NavLink
                                key={name}
                                to={path}
                                className={({ isActive }) =>
                                    `relative px-4 py-2 rounded-full transition-all duration-300 ease-in-out ${isActive
                                        ? "text-white after:content-[''] after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:h-[3px] after:w-8 after:rounded-full after:bg-purple-400"
                                        : 'text-gray-300 hover:bg-white/10'
                                    }`
                                }
                            >
                                {name}
                            </NavLink>
                        ))}
                    </div>

                    <div className="md:hidden pr-2 z-50">
                        <button
                            onClick={() => setIsOpen(true)}
                            aria-label="Open menu"
                            className="text-white focus:outline-none"
                        >
                            <FiMenu size={28} />
                        </button>
                    </div>
                </div>

                <div className={`fixed top-0 right-0 h-full w-4/5 max-w-xs z-40 backdrop-blur-md bg-white/10 border-l border-white/10 shadow-xl transform transition-transform duration-300 ease-in-out ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>

                    <div className="flex justify-end p-8">
                        <button onClick={() => setIsOpen(false)} aria-label="Close menu">
                            <FiX size={26} className="text-white" />
                        </button>
                    </div>

                    <div className="flex flex-col space-y-6 p-10 text-white font-medium">
                        {navItems.map(({ name, path, icon }) => (
                            <NavLink
                                key={name}
                                to={path}
                                onClick={() => setIsOpen(false)}
                                className={({ isActive }) =>
                                    `flex items-center gap-3 px-4 py-2 rounded-xl transition duration-200 text-lg ${isActive
                                        ? 'bg-gradient-to-r from-[#7d5fff] to-[#a97fff] text-white'
                                        : 'hover:bg-white/10 text-gray-200'
                                    }`
                                }

                            >
                                <span className="block md:hidden">{icon}</span>
                                {name}
                            </NavLink>
                        ))}
                    </div>
                </div>

                {isOpen && (
                    <div
                        className="fixed inset-0 bg-black/50 backdrop-blur-sm z-30"
                        onClick={() => setIsOpen(false)}
                    />
                )}
            </nav>
        </Container>
    );
};

export default Header;
