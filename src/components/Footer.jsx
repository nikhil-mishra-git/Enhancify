import { Logo, Container } from "../components";

const Footer = () => (
  <Container>
    <footer className="bg-white/5 backdrop-blur-2xl border-t border-white/10 text-gray-300 py-12 mt-10 rounded-t-4xl">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">

        {/* Left: Logo and Tagline */}
        <div className="text-center md:text-left">
          <Logo />
          <p className="text-sm text-gray-400 mt-1">Empowering your images with AI ✨</p>
        </div>

        {/* Center: Nav Links */}
        <div className="flex flex-wrap justify-center gap-6 text-sm font-medium text-gray-300">
          {["Enhance", "Restore", "Background Remove", "About", "Login"].map((item) => (
            <a key={item} href="#" className="hover:text-white transition duration-200">{item}</a>
          ))}
        </div>

        {/* Right: Copyright */}
        <div className="text-sm text-gray-400 text-center md:text-right">
          © {new Date().getFullYear()} <span className="text-white font-semibold">Enhancify</span>
        </div>
      </div>
    </footer>
  </Container>
);

export default Footer;
