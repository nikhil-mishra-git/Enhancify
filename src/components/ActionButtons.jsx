import React from 'react';
import { FiUpload } from 'react-icons/fi';

const ActionButtons = ({ onClick }) => {
  return (
    <button
      onClick={onClick}
      className="inline-flex cursor-pointer items-center gap-2 px-6 py-4 rounded-full text-white font-medium text-sm md:text-lg transition-all duration-300
      bg-gradient-to-r from-[#825cf5] to-[#c995fe] hover:opacity-90 shadow-md
      backdrop-blur-md border border-white/10"
    >
      <FiUpload className="text-base" />
      Upload Image
    </button>
  );
};

export default ActionButtons;
