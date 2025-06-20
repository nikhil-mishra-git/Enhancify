import { Container } from '../components';
import { FaMagic, FaShieldAlt, FaFileImage } from 'react-icons/fa';

const features = [
  {
    icon: <FaMagic className="text-white text-2xl md:text-3xl" />,
    title: '1-Click Enhancement',
    description: 'Enhance your photos instantly using AI. No editing skills required.',
  },
  {
    icon: <FaShieldAlt className="text-white text-2xl md:text-3xl" />,
    title: 'Private & Secure',
    description: 'Images are processed temporarily — nothing is stored. Your privacy matters.',
  },
  {
    icon: <FaFileImage className="text-white text-2xl md:text-3xl" />,
    title: 'Multiple Formats',
    description: 'Supports JPG, PNG, and WebP for full compatibility across platforms.',
  },
];

const Features = () => {
  return (
    <Container>
      <section className="pt-20 md:py-20 text-white">

        <div className="text-center md:text-left space-y-6 mb-20">
          <h2 className="text-[7vw] md:text-5xl tracking-tight leading-snug">
            Explore Our <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#7d5fff] to-[#a97fff]">
              Powerful Feature's
            </span>
          </h2>
        </div>

        <div className="grid gap-16 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, idx) => (
            <div
              key={idx}
              className="flex flex-col items-center text-center px-6 space-y-8"
            >
              <div className="w-20 h-20 rounded-full bg-gradient-to-br from-[#6F8DFF] to-[#a855f7] flex items-center justify-center shadow-xl">
                {feature.icon}
              </div>

              <h3 className="text-xl md:text-2xl font-semibold leading-tight">
                {feature.title}
              </h3>

              <p className="text-base md:text-lg text-gray-400 max-w-sm leading-relaxed">
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
