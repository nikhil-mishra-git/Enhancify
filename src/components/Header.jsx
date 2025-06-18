import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { FiMenu, FiX } from 'react-icons/fi';
import { Logo, Container } from '../components';

const navItems = [
    { name: 'Home', path: '/' },
    { name: 'Enhance', path: '/enhance' },
    { name: 'BG Remover', path: '/bgremover' },
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

                    {/* Hamburger Icon */}
                    <div className="md:hidden pr-2 z-50">
                        <button onClick={() => setIsOpen(true)} aria-label="Open menu">
                            <FiMenu size={28} />
                        </button>
                    </div>
                </div>

                {/* Mobile Slide-In Drawer */}
                <div className={`fixed top-0 right-0 h-full w-4/5 max-w-xs z-40 backdrop-blur-md bg-white/5 border border-white/10 shadow-lg transform transition-transform duration-300 ease-in-out ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
                    {/* Close Icon */}
                    <div className="flex justify-end p-4">
                        <button onClick={() => setIsOpen(false)} aria-label="Close menu">
                            <FiX size={26} className="text-white mt-10 mr-6" />
                        </button>
                    </div>

                    {/* Mobile Nav Links */}
                    <div className="flex flex-col space-y-6 p-8 text-white font-medium">
                        {navItems.map(({ name, path }) => (
                            <NavLink
                                key={name}
                                to={path}
                                onClick={() => setIsOpen(false)}
                                className={({ isActive }) =>
                                    `px-4 py-2 rounded-full transition duration-200 ${isActive ? 'bg-purple-500 text-white' : 'hover:bg-white/10 text-gray-200'
                                    }`
                                }
                            >
                                {name}
                            </NavLink>
                        ))}
                    </div>
                </div>

                {isOpen && (
                    <div
                        className="fixed inset-0 bg-black/40 backdrop-blur-sm z-30"
                        onClick={() => setIsOpen(false)}
                    />
                )}
            </nav>
        </Container>
    );
};

export default Header;
