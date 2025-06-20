import React from 'react';

const LoaderComponent = () => {
  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-[#0e0c15] backdrop-blur-sm">
      <div className="cube-loader">
        <div className="cube cube1" />
        <div className="cube cube2" />
        <div className="cube cube3" />
        <div className="cube cube4" />
      </div>

      <style>{`
        .cube-loader {
          width: 40px;
          height: 40px;
          position: relative;
          transform: rotateZ(45deg);
        }

        .cube {
          position: absolute;
          width: 50%;
          height: 50%;
          background: linear-gradient(135deg, #a78bfa, #7c3aed);
          animation: cubeSpin 1.4s infinite ease-in-out;
        }

        .cube1 { top: 0; left: 0; animation-delay: 0s; }
        .cube2 { top: 0; right: 0; animation-delay: 0.2s; }
        .cube3 { bottom: 0; right: 0; animation-delay: 0.4s; }
        .cube4 { bottom: 0; left: 0; animation-delay: 0.6s; }

        @keyframes cubeSpin {
          0%, 70%, 100% {
            transform: scale(1);
            opacity: 1;
          }
          35% {
            transform: scale(0.5);
            opacity: 0.3;
          }
        }
      `}</style>
    </div>
  );
};

export default LoaderComponent;
