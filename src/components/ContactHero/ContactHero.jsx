import React from "react";
import { FiPhoneCall, FiMessageCircle, FiMail } from "react-icons/fi";
import logo from "../../assets/logo.png";

const ContactHero = () => {
  return (
    <section
      className="relative w-full flex flex-col items-center text-center px-4 pt-16 pb-8"
      style={{
        background: `radial-gradient(circle at top left, rgba(253, 224, 71, 0.6), rgba(134, 239, 172, 0.4), transparent 50%),
                      radial-gradient(circle at top right, rgba(255, 94, 0, 0.7), rgba(59, 130, 246, 0.4), transparent 50%),
                      linear-gradient(to bottom, rgba(255, 255, 255, 0.8), rgba(240, 240, 240, 1))`,
        minHeight: "80vh",
        width: "100%",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Logo */}
      <img src={logo} alt="GlobeNext Solutions" className="mb-2 w-12 animate-fadeIn" />

      {/* Heading */}
      <h1 className="text-xl font-semibold text-gray-900 animate-slideUp">
        We would love to hear from you
      </h1>
      <p className="text-sm text-gray-600 mt-1 animate-slideUp">
        Contact us and let us know how we can help you.
      </p>

      {/* Buttons (Single Row) */}
      <div className="mt-5 flex flex-wrap justify-center gap-4">
        <button className="flex items-center gap-2 bg-yellow-500 text-white text-sm font-medium px-4 py-2 rounded-full shadow-md transition duration-300 hover:bg-yellow-600 transform hover:scale-105 animate-fadeIn">
          <FiPhoneCall className="text-lg" /> 24/7 Support
        </button>
        <button className="flex items-center gap-2 bg-yellow-500 text-white text-sm font-medium px-4 py-2 rounded-full shadow-md transition duration-300 hover:bg-yellow-600 transform hover:scale-105 animate-fadeIn">
          <FiMessageCircle className="text-lg" /> Expert Consultation
        </button>
        <button className="flex items-center gap-2 bg-yellow-500 text-white text-sm font-medium px-4 py-2 rounded-full shadow-md transition duration-300 hover:bg-yellow-600 transform hover:scale-105 animate-fadeIn">
          <FiMail className="text-lg" /> Contact Us
        </button>
      </div>
    </section>
  );
};

export default ContactHero;
