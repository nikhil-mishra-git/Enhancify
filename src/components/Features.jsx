import { Container } from '../components';
import { FaMagic, FaBolt, FaShieldAlt, FaFileImage } from 'react-icons/fa';

const features = [
  {
    icon: <FaMagic className="text-white text-xl" />,
    title: '1-Click Enhancement',
    description: 'Enhance your photos instantly using AI. No editing skills required.',
  },
  {
    icon: <FaBolt className="text-white text-xl" />,
    title: 'Fast Processing',
    description: 'Get enhanced images within seconds. No waiting, just results.',
  },
  {
    icon: <FaShieldAlt className="text-white text-xl" />,
    title: 'Private & Secure',
    description: 'Images are processed temporarily — nothing is stored. Your privacy matters.',
  },
  {
    icon: <FaFileImage className="text-white text-xl" />,
    title: 'Multiple Formats',
    description: 'Supports JPG, PNG, and WebP for full compatibility across platforms.',
  },
];

const Features = () => {
  return (
    <Container>
      <section className="py-18 text-white text-center">
        <h2 className="text-4xl font-bold mb-18 tracking-tight">
          Powerful Features
        </h2>
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, idx) => (
            <div key={idx} className="flex flex-col items-center text-center px-4 space-y-6">

              <div className="w-18 h-18 rounded-full bg-gradient-to-br from-[#6F8DFF] to-[#a855f7] flex items-center justify-center shadow-lg">
                {feature.icon}
              </div>

              <h3 className="text-lg md:text-xl font-semibold leading-snug">
                {feature.title}
              </h3>

              <p className="text-sm text-gray-400 max-w-xs leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </section>
    </Container>
  );
};

export default Features;
