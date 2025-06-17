import React from 'react';

const tools = [
  "Image Enhancer",
  "Background Remover",
  "Photo Restorer",
  "Color Fixer",
];

const HorizontalScroller = () => {
  return (
    <div className="relative w-full bg-transparent py-8 overflow-hidden">
      {/* Fade left */}
      <div className="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-[#05050f] to-transparent z-10 pointer-events-none" />
      
      {/* Fade right */}
      <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-[#05050f] to-transparent z-10 pointer-events-none" />

      {/* Scrollable container */}
      <div className="overflow-x-auto scrollbar-hide px-4">
        <div className="flex gap-10 whitespace-nowrap">
          {tools.map((tool, index) => (
            <span
              key={index}
              className="text-white text-lg font-medium opacity-70 hover:opacity-100 transition-all duration-300 cursor-pointer"
            >
              {tool}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HorizontalScroller;
