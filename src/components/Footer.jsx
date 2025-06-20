import { Logo, Container } from "../components";
import { Link } from "react-router-dom";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Enhance", path: "/enhance" },
    { name: "Background Remove", path: "/bgremove" },
  ];

  return (
    <Container>
      <footer className="bg-white/5 backdrop-blur-xl border-t border-white/10 text-gray-300 py-10 mt-20 rounded-t-3xl shadow-inner">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">

          {/* Logo */}
          <div className="mb-4 md:mb-0">
            <Logo />
          </div>

          {/* Navigation */}
          <div className="flex flex-wrap justify-center gap-6 text-sm font-medium">
            {navLinks.map(({ name, path }) => (
              <Link
                key={name}
                to={path}
                className="hover:text-white transition-colors duration-200"
              >
                {name}
              </Link>
            ))}
          </div>

          {/* Copyright */}
          <div className="text-sm text-gray-400">
            &copy; {currentYear} <span className="text-white font-semibold">Enhancify</span> — All rights reserved.
          </div>
        </div>
      </footer>
    </Container>
  );
};

export default Footer;
