import Logo from "./Logo";

const Footer = () => (
  <footer className="bg-white/5 backdrop-blur-lg border-t border-white/10 text-gray-300 py-10 mt-20">
    <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
      
      {/* Logo and Tagline */}
      <div className="text-center md:text-left">
        <Logo/>
        <p className="text-sm mt-1 text-gray-400">AI-powered image enhancement tools.</p>
      </div>

      {/* Navigation Links */}
      <div className="flex flex-wrap gap-6 justify-center text-sm">
        <a href="#" className="hover:text-white transition">Enhance</a>
        <a href="#" className="hover:text-white transition">Restore</a>
        <a href="#" className="hover:text-white transition">Background Remove</a>
        <a href="#" className="hover:text-white transition">About</a>
        <a href="#" className="hover:text-white transition">Login</a>
      </div>

      {/* Copyright */}
      <div className="text-sm text-gray-400 text-center md:text-right">
        © {new Date().getFullYear()} Enhancify. All rights reserved.
      </div>
    </div>
  </footer>
);

export default Footer;
