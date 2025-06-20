import React from 'react';
import { FaWandMagicSparkles } from 'react-icons/fa6'; // New modern icon
import { useNavigate } from 'react-router-dom';

const CustomeButton = ({ text = 'Enhance Image', to = '/enhance' }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(to);
  };

  return (
    <button
      onClick={handleClick}
      className="flex items-center justify-center cursor-pointer gap-2 px-6 py-4 md:mb-5 rounded-full shadow-md bg-gradient-to-r from-[#825cf5] to-[#c995fe] hover:opacity-90 text-white font-medium text-xs md:text-lg transition-all duration-200"
    >
      <FaWandMagicSparkles className="text-lg group-hover:rotate-12 transition-transform duration-300" />
      {text}
    </button>
  );
};

export default CustomeButton;
