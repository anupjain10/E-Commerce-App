import logo from "../assets/logo.webp";
import instagram from "../assets/instagram.png";
import facebook from "../assets/facebook.png";
import whatsapp from "../assets/whatsapp.png";
import { Link } from "react-router-dom";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full bg-white mt-20 py-10 px-4 sm:px-6 border-t">
      <div className="max-w-6xl mx-auto flex flex-col items-center gap-10">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2">
          <img src={logo} alt="Shop logo" className="h-[40px]" />
          <p className="text-3xl font-bold text-gray-900">Shopify</p>
        </Link>

        {/* Links */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 sm:gap-6 md:gap-8 text-gray-700 text-base font-medium text-center md:text-left">
          <Link to="/about" className="hover:text-black transition">
            About
          </Link>
          <Link to="/products" className="hover:text-black transition">
            Products
          </Link>
          <Link to="/offices" className="hover:text-black transition">
            Offices
          </Link>
          <Link to="/company" className="hover:text-black transition">
            Company
          </Link>
          <Link to="/contact" className="hover:text-black transition">
            Contact
          </Link>
        </div>

        {/* Social Icons */}
        <div className="flex justify-center gap-6">
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
          >
            <img
              src={instagram}
              alt="Instagram"
              className="h-7 cursor-pointer hover:scale-110 transition duration-300 ease-out"
            />
          </a>
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook"
          >
            <img
              src={facebook}
              alt="Facebook"
              className="h-7 cursor-pointer hover:scale-110 transition duration-300 ease-out"
            />
          </a>
          <a
            href="https://wa.me/1234567890"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="WhatsApp"
          >
            <img
              src={whatsapp}
              alt="WhatsApp"
              className="h-7 cursor-pointer hover:scale-110 transition duration-300 ease-out"
            />
          </a>
        </div>

        <div className="w-full h-[1px] bg-gray-200"></div>

        {/* Copyright */}
        <p className="text-gray-600 text-sm text-center">
          © {currentYear} Shopify. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
