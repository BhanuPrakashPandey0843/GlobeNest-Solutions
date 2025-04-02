import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const ConsultationBanner = () => {
  return (
    <section className="w-full bg-gradient-to-r from-yellow-500 to-orange-500 py-10 px-4 md:px-8 rounded-lg shadow-lg text-white">
      <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Left Section */}
        <motion.div 
          className="text-center md:text-left" 
          initial={{ opacity: 0, y: 50 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 1 }}
        >
          <h2 className="text-3xl md:text-4xl font-semibold leading-tight mb-3">
            Sign Up for Consultation <br /> & Latest Updates
          </h2>
          <p className="text-white/90 mt-3 text-sm md:text-base">
            Our on-site coordinators are available for assistance throughout your stay, ensuring you have the support you need.
          </p>
        </motion.div>

        {/* Right Section */}
        <motion.div 
          className="flex flex-col items-center md:items-start gap-4" 
          initial={{ opacity: 0, x: 50 }} 
          animate={{ opacity: 1, x: 0 }} 
          transition={{ duration: 1 }}
        >
          {/* Avatars + Stats */}
          <div className="flex items-center gap-6 mb-4">
            {/* Avatars */}
            <div className="flex -space-x-3">
              <img
                src="https://randomuser.me/api/portraits/men/32.jpg"
                alt="User 1"
                className="w-12 h-12 rounded-full border-2 border-white"
              />
              <img
                src="https://randomuser.me/api/portraits/women/44.jpg"
                alt="User 2"
                className="w-12 h-12 rounded-full border-2 border-white"
              />
              <img
                src="https://randomuser.me/api/portraits/men/56.jpg"
                alt="User 3"
                className="w-12 h-12 rounded-full border-2 border-white"
              />
            </div>

            {/* Stats */}
            <div className="flex flex-col md:flex-row gap-4 text-white/90 text-center md:text-left">
              <div>
                <p className="text-lg font-bold">200k+</p>
                <span className="text-sm">Students</span>
              </div>
            </div>
          </div>

          {/* Button */}
          <Link to="/contact">
            <motion.button 
              className="bg-white text-orange-600 font-medium px-6 py-3 rounded-full shadow-lg hover:bg-gray-100 transition duration-300"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              Book a Consultation
            </motion.button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default ConsultationBanner;