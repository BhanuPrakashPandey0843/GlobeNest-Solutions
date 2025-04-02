import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import logo from "../../assets/logo.png";

const Navbar = ({
  heroRef,
  statsRef,
  timelineRef,
  testimonialRef,
  destinationsRef,
  faqRef,
}) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();

  const scrollToSection = (ref) => {
    if (ref && ref.current) {
      ref.current.scrollIntoView({ behavior: "smooth", block: "start" });
      setMenuOpen(false);
    }
  };

  return (
    <nav className="fixed w-full top-0 z-50 bg-transparent backdrop-blur-md px-6 py-4 shadow-lg">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center">
          <img src={logo} alt="GlobeNext Logo" className="h-10 w-auto" />
          <span className="text-orange text-2xl font-bold ml-2 font-[OCR A Extended]">
            GlobeNest <span className="text-yellow-400">Solutions</span>
          </span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-6 text-white text-lg">
          {[
            { name: "Home", ref: heroRef },
            { name: "Stats", ref: statsRef },
            { name: "Timeline", ref: timelineRef },
            { name: "Testimonials", ref: testimonialRef },
            { name: "Destinations", ref: destinationsRef },
            { name: "FAQ", ref: faqRef },
          ].map(({ name, ref }) => (
            <motion.button
              key={name}
              onClick={() => scrollToSection(ref)}
              className="hover:text-yellow-400 transition duration-300"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ delay: 0.2 }}
            >
              {name}
            </motion.button>
          ))}
          <motion.button
            onClick={() => navigate("/contact")}
            className="border border-white px-4 py-2 rounded-full hover:bg-white hover:text-black transition duration-300"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ delay: 0.3 }}
          >
            Contact Us
          </motion.button>
        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden text-white text-3xl" onClick={() => setMenuOpen(true)}>
          ☰
        </button>
      </div>

      {/* Mobile Side Navbar */}
      <AnimatePresence>
        {menuOpen && (
          <>
            {/* Overlay to close menu when clicking outside */}
            <motion.div
              className="fixed inset-0 bg-black bg-opacity-50 z-40"
              onClick={() => setMenuOpen(false)}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
            />

            {/* Sidebar Navigation with White Background */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
              className="fixed right-0 top-0 h-full w-64 text-black z-50 shadow-lg flex flex-col p-6 rounded-l-3xl"
              style={{
                background: "#fff",
                boxShadow: "0 8px 16px rgba(0, 0, 0, 0.2)",
              }}
            >
              {/* Close Button */}
              <button
                className="text-3xl self-end text-gray-700"
                onClick={() => setMenuOpen(false)}
              >
                ✕
              </button>

              {/* Menu Items */}
              <div className="mt-6 space-y-6 text-lg font-semibold">
                {[
                  { name: "Home", ref: heroRef },
                  { name: "Stats", ref: statsRef },
                  { name: "Timeline", ref: timelineRef },
                  { name: "Testimonials", ref: testimonialRef },
                  { name: "Destinations", ref: destinationsRef },
                  { name: "FAQ", ref: faqRef },
                ].map(({ name, ref }) => (
                  <motion.button
                    key={name}
                    onClick={() => scrollToSection(ref)}
                    className="block w-full text-left px-4 py-3 rounded-lg hover:bg-gray-200 transition duration-300"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ delay: 0.2 }}
                  >
                    {name}
                  </motion.button>
                ))}
              </div>

              {/* Contact Button */}
              <motion.button
                onClick={() => {
                  navigate("/contact");
                  setMenuOpen(false);
                }}
                className="mt-6 w-full border border-black px-6 py-3 rounded-full bg-black text-white hover:bg-gray-800 transition duration-300"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ delay: 0.3 }}
              >
                Contact Us
              </motion.button>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
