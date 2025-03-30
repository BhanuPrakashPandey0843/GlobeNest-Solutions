import React from "react";

const Footermarquee = () => {
  return (
    <footer className="w-full bg-black py-3 text-white text-sm font-light tracking-wide mt-10">
      <div className="flex justify-between items-center px-4 md:px-10 max-w-screen-xl mx-auto w-full">
        
        {/* Left Section - Privacy Policy */}
        <div className="flex gap-4">
          <span className="cursor-pointer hover:text-gray-300 transition-all duration-300">
            Privacy Policy
          </span>
        </div>

        {/* Marquee Container - Centered */}
        <div className="relative w-[40%] md:w-[50%] lg:w-[60%] overflow-hidden h-6 flex items-center">
          <div className="marquee whitespace-nowrap font-medium text-base md:text-lg opacity-90">
            © 2025 GlobeNext Solutions. All Rights Reserved.
          </div>
        </div>

        {/* Right Section - Conditions */}
        <div className="cursor-pointer hover:text-gray-300 transition-all duration-300">
          Conditions
        </div>
      </div>

      {/* Tailwind Custom Animation */}
      <style>
        {`
          @keyframes marquee {
            0% { transform: translateX(100%); }
            100% { transform: translateX(-100%); }
          }
          .marquee {
            display: inline-block;
            white-space: nowrap;
            animation: marquee 12s linear infinite;
            min-width: 100%;
          }
        `}
      </style>
    </footer>
  );
};

export default Footermarquee;
