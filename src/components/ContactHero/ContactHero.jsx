import React from "react";
import { motion } from "framer-motion";
import { FiPhoneCall, FiMessageCircle, FiMail } from "react-icons/fi";
import logo from "../../assets/logo.png";
import Animation from "../../assets/5146757-removebg-preview.png";

const ContactHero = () => {
  return (
    <motion.section
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
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={{
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0, transition: { duration: 1, ease: "easeOut" } },
      }}
    >
      {/* Logo Animation */}
      <motion.img
        src={logo}
        alt="GlobeNext Solutions"
        className="mb-2 w-12"
        initial={{ opacity: 0, scale: 0.5, rotate: -180 }}
        animate={{ opacity: 1, scale: 1, rotate: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
      />

      {/* Heading Animation */}
      <motion.h1
        className="text-2xl font-bold text-gray-900"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
      >
        We would love to hear from you
      </motion.h1>

      <motion.p
        className="text-sm text-gray-600 mt-1"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut", delay: 0.4 }}
      >
        Contact us and let us know how we can help you.
      </motion.p>

      {/* Buttons Animation */}
      <motion.div className="mt-5 flex flex-wrap justify-center gap-4">
        {[
          { text: "24/7 Support", icon: <FiPhoneCall /> },
          { text: "Expert Consultation", icon: <FiMessageCircle /> },
          { text: "Contact Us", icon: <FiMail /> },
        ].map((item, index) => (
          <motion.button
            key={index}
            className="flex items-center gap-2 bg-yellow-500 text-white text-sm font-medium px-5 py-2 rounded-full shadow-md hover:bg-yellow-600"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut", delay: index * 0.3 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            {item.icon} {item.text}
          </motion.button>
        ))}
      </motion.div>

      {/* Image Animation */}
      <motion.div className="flex justify-center items-center py-6">
        <motion.img
          src={Animation}
          alt="GlobeNext Solutions"
          className="mb-4 w-90 md:w-120 border-2 border-gray-300 rounded-lg shadow-lg"
          initial={{ opacity: 0, scale: 0.8, rotateY: 180 }}
          animate={{ opacity: 1, scale: 1, rotateY: 0 }}
          transition={{ duration: 1.2, ease: "easeOut", delay: 0.5 }}
        />
      </motion.div>
    </motion.section>
  );
};

export default ContactHero;
