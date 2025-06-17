import React from 'react';

const RotableBadge = () => {
  return (
    <div className="relative w-24 h-24 flex items-center justify-center">
      {/* White background behind the rotating ring (full size) */}
      <div className="absolute inset-0 rounded-full bg-white z-0" />

      {/* Rotating circular text */}
      <svg
        viewBox="0 0 100 100"
        className="w-full h-full z-10"
        style={{
          animation: 'spin 10s linear infinite',
          transformOrigin: 'center center',
        }}
      >
        <defs>
          {/* Path for circular text */}
          <path
            id="circlePath"
            d="M50,50 m-40,0 a 40,40 0 1,1 80,0 a 40,40 0 1,1 -80,0"
            fill="none"
          />

          {/* Gradient color */}
          <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#6F8DFF" />
            <stop offset="100%" stopColor="#a855f7" />
          </linearGradient>
        </defs>

        {/* Circular Text */}
        <text
          fill="url(#gradient)"
          fontSize="7"
          fontWeight="bold"
          letterSpacing="2px"
        >
          <textPath href="#circlePath" startOffset="0%">
            • AI POWERED • AI POWERED •
          </textPath>
        </text>
      </svg>

      {/* Transparent inner circle to create a ring effect */}
      <div className="absolute w-20 h-20 rounded-full bg-transparent z-20" />
    </div>
  );
};

export default RotableBadge;
