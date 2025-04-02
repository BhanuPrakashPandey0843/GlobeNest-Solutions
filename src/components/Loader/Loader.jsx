import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { gsap } from "gsap";
import Animation from "../../assets/output-onlinegiftools (4).gif";

const Loader = () => {
  const textRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      textRef.current,
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 8, ease: "power3.out", delay: 1 }
    );
  }, []);

  return (
    <div
      style={{
        background: `radial-gradient(circle at top left, rgba(253, 224, 71, 0.6), rgba(134, 239, 172, 0.4), transparent 50%),
                      radial-gradient(circle at top right, rgba(255, 94, 0, 0.7), rgba(59, 130, 246, 0.4), transparent 50%),
                      linear-gradient(to bottom, rgba(240, 240, 240, 0.9), rgba(220, 220, 220, 1))`, // Adjusted for better contrast
        minHeight: "100vh",
        width: "100%",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
      className="flex flex-col items-center justify-center"
    >
      {/* Image with smooth fade-in and scale animation */}
      <motion.img
        src={Animation}
        alt="GlobeNest Solutions"
        initial={{ opacity: 0, scale: 0.7 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 4, ease: "easeOut" }}
        className="w-96 md:w-[450px] lg:w-[500px] xl:w-[550px]"
      />

      {/* Animated Text */}
      <div ref={textRef} className="text-center mt-8 text-orange-500">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 2, ease: "easeOut", delay: 1.5 }}
          className="text-orange-500 text-5xl md:text-6xl font-extrabold"
          style={{
            fontFamily: "Odibee Sans, cursive",
            textShadow: "4px 4px 10px rgba(0, 0, 0, 1)", // Strong black shadow for high contrast
          }}
        >
         
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 2, ease: "easeOut", delay: 2 }}
          className="text-orange-500 text-xl md:text-2xl font-bold"
          style={{
            fontFamily: "OCR A Extended, monospace",
            textShadow: "4px 4px 10px rgba(0, 0, 0, 1)", // Strong black shadow for high contrast
          }}
        >
         
        </motion.p> Solutions
      </div>
    </div>
  );
};

export default Loader;
