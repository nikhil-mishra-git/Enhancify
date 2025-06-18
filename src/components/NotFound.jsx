import { useNavigate } from 'react-router-dom';
import { FaRobot, FaHome } from 'react-icons/fa';
import { Container } from '../components';

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <Container>
      <div className="min-h-screen flex flex-col items-center justify-center px-4 py-16 text-center text-white space-y-6">
        {/* Icon */}
        <FaRobot className="text-6xl md:text-7xl text-purple-500 animate-bounce" />

        {/* 404 Heading */}
        <h1 className="text-6xl md:text-7xl font-extrabold bg-gradient-to-r from-[#825cf5] to-[#c995fe] text-transparent bg-clip-text">
          404
        </h1>

        {/* Message */}
        <p className="text-xl md:text-2xl font-semibold">Oops! Page Not Found</p>
        <p className="text-sm md:text-base text-gray-400 max-w-md mx-auto">
          The page you’re looking for doesn’t exist or might have been moved. Let’s get you back home.
        </p>

        {/* Buttons */}
        <div className="pt-4">
          <button
            onClick={() => navigate('/')}
            className="flex items-center gap-2 bg-white/10 text-white px-6 py-3 rounded-xl backdrop-blur-md border border-white/20 hover:bg-white/20 transition-all"
          >
            <FaHome />
            Go to Homepage
          </button>
        </div>
      </div>
    </Container>
  );
};

export default NotFound;
