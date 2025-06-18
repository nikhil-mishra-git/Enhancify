import React from 'react';

const LoaderComponent = () => {
  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-[#0e0c15] transition-opacity duration-500">
      <div className="relative w-16 h-16">
        {[...Array(8)].map((_, i) => {
          const angle = (i * 360) / 8;
          const radius = 35;
          const x = 40 + radius * Math.cos((angle * Math.PI) / 180);
          const y = 40 + radius * Math.sin((angle * Math.PI) / 180);

          return (
            <span
              key={i}
              className="absolute w-3 h-3 rounded-full animate-pulse-dot"
              style={{
                backgroundColor: '#a78bfa',
                opacity: 0.6,
                top: `${y}px`,
                left: `${x}px`,
                animationDelay: `${i * 0.15}s`,
              }}
            />
          );
        })}
      </div>

      <style>{`
        @keyframes pulse-dot {
          0%, 100% {
            opacity: 0.2;
            transform: scale(0.8);
          }
          50% {
            opacity: 1;
            transform: scale(1.2);
          }
        }
        .animate-pulse-dot {
          animation: pulse-dot 1.4s infinite ease-in-out;
        }
      `}</style>
    </div>
  );
};

export default LoaderComponent;
