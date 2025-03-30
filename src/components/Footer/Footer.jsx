import React from "react";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";
import logo from "../../assets/logo.png";


const Footer = () => {
  return (
    <footer className="w-full bg-gray-100 py-8 px-6 md:px-12 text-gray-800 min-h-fit">
      <div className="max-w-screen-xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-6">
        
        {/* About Section */}
        <div>
          <img src={logo} alt="GlobeNext Solutions" className="mb-3" style={{ width: "60px" }} />
          <h2 className="text-xl font-semibold text-gray-900">GlobeNext Solutions</h2>
          <p className="text-gray-700 text-sm mt-2 leading-relaxed">
            GlobeNest Solutions simplifies studying abroad, travel, visas, accommodations, and foreign exchange for a seamless global experience.
          </p>
        </div>

        {/* Menu */}
        <div>
          <h3 className="text-lg font-medium text-gray-900 mb-2">Menu</h3>
          <ul className="text-gray-700 text-sm space-y-2">
            {["Explore", "Course", "Countries", "Destinations", "Popular Destination"].map((item) => (
              <li key={item} className="cursor-pointer hover:text-gray-900 transition duration-300">
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* Services */}
        <div>
          <h3 className="text-lg font-medium text-gray-900 mb-2">Services</h3>
          <ul className="text-gray-700 text-sm space-y-2">
            {["Accommodation assistance", "Tourist visas", "Sightseeing and travel arrangements", "Foreign exchange services"].map((item) => (
              <li key={item} className="cursor-pointer hover:text-gray-900 transition duration-300">
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* Socials */}
        <div>
          <h3 className="text-lg font-medium text-gray-900 mb-2">Follow Us</h3>
          <div className="flex space-x-3 mt-2">
            {[FaFacebookF, FaTwitter, FaInstagram, FaLinkedin].map((Icon, index) => (
              <a
                key={index}
                href="#"
                className="bg-gray-200 p-2 rounded-full hover:bg-gray-300 transition duration-300 shadow-sm"
              >
                <Icon className="text-lg text-gray-800" />
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="mt-6 text-center text-gray-600 text-sm border-t border-gray-300 pt-4 pb-0">
        © {new Date().getFullYear()} GlobeNext Solutions. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
