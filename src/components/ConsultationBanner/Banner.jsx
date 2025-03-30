import React from "react";
import { Link } from "react-router-dom"; 
const ConsultationBanner = () => {
  return (
    <section className="w-full bg-gradient-to-r from-yellow-500 to-orange-500 py-10 px-4 md:px-8 rounded-lg shadow-lg text-white">
      <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Left Section */}
        <div className="text-center md:text-left">
          <h2 className="text-3xl md:text-4xl font-semibold leading-tight">
            Sign Up for Consultation <br /> & updated latest news
          </h2>
          <p className="text-white/90 mt-3 text-sm md:text-base">
            Our on-site coordinators are available for assistance throughout your stay, ensuring you have the support you need.
          </p>
        </div>

        {/* Right Section */}
        <div className="flex flex-col items-center md:items-start gap-4">
          {/* Avatars + Stats */}
          <div className="flex items-center gap-6">
            {/* Avatars */}
            <div className="flex -space-x-3">
              <img src="https://randomuser.me/api/portraits/men/32.jpg" alt="User 1" className="w-10 h-10 rounded-full border-2 border-white" />
              <img src="https://randomuser.me/api/portraits/women/44.jpg" alt="User 2" className="w-10 h-10 rounded-full border-2 border-white" />
              <img src="https://randomuser.me/api/portraits/men/56.jpg" alt="User 3" className="w-10 h-10 rounded-full border-2 border-white" />
            </div>

            {/* Stats */}
            <div className="flex flex-col md:flex-row gap-4 text-white/90 text-center md:text-left">
              <div>
                <p className="text-lg font-bold"></p>
                <span className="text-sm"></span>
              </div>
              <div>
                <p className="text-lg font-bold">200k+</p>
                <span className="text-sm">Students</span>
              </div>
            </div>
          </div>

          {/* Button */}
          <Link to="/contact">
          <button className="bg-white text-orange-600 font-medium px-6 py-2 rounded-full shadow-md hover:bg-gray-100 transition duration-300">
            Book a Consultation
          </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ConsultationBanner;
