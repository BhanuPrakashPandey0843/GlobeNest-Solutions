import React from 'react';
import {
  FaMoneyBillWave,
  FaPassport,
  FaHotel,
  FaUniversity,
  FaMoneyCheckAlt,
  FaMapMarkedAlt,
  
  
} from 'react-icons/fa';

const services = [
  {
    title: "Foreign Exchange Services",
    icon: <FaMoneyBillWave size={48} className="text-indigo-500" />,
    desc: "Get competitive rates and seamless currency exchange for international travel and studies."
  },
  {
    title: "Visa & Immigration Support",
    icon: <FaPassport size={48} className="text-indigo-500" />,
    desc: "Comprehensive visa assistance and immigration consultation tailored to your destination."
  },
  {
    title: "Accommodation & Travel",
    icon: <FaHotel size={48} className="text-indigo-500" />,
    desc: "Complete support for accommodation booking and travel arrangements across the globe."
  },
  {
    title: "University Admissions",
    icon: <FaUniversity size={48} className="text-indigo-500" />,
    desc: "Expert guidance on selecting and applying to top universities worldwide."
  },
  {
    title: "Tour Guide Assistance",
    icon: <FaMapMarkedAlt size={48} className="text-indigo-500" />,
    desc: "Professional tour guidance to help you explore new places confidently and comfortably."
  },
  {
    title: "Remittance",
    icon: <FaMoneyCheckAlt size={48} className="text-indigo-500" />,
    desc: "Fast and secure money transfer services for your global financial needs."
  },
  
];

const Ourservices = () => {
  return (
    <section
      className="py-16"
      style={{
        background: `radial-gradient(circle at top left, rgba(253, 224, 71, 0.3), rgba(134, 239, 172, 0.2), transparent 60%),
                    radial-gradient(circle at top right, rgba(124, 58, 237, 0.3), rgba(59, 130, 246, 0.2), transparent 60%),
                    linear-gradient(to bottom, rgba(255,255,255,0.85), rgba(240,240,240,1))`,
        minHeight: "100vh",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800">
            Services <span className="text-yellow-500">GlobeNest Solutions</span> Provide
          </h2>
          <p className="text-gray-600 mt-4 text-lg max-w-2xl mx-auto">
            Your trusted partner for seamless study, travel, and visa assistance worldwide!
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
        {services.map((service, idx) => (
  <div
    key={idx}
    className="backdrop-blur-xl bg-white/20 border border-white/30 shadow-xl p-6 rounded-2xl w-full max-w-sm text-center transition transform hover:scale-105 hover:shadow-2xl duration-300 ease-in-out"
  >
    <div className="mb-4 flex justify-center items-center">
      {service.icon}
    </div>
    <h3 className="text-xl font-semibold text-gray-800 mb-2">{service.title}</h3>
    <p className="text-gray-600">{service.desc}</p>
  </div>
))}

        </div>
      </div>
    </section>
  );
};

export default Ourservices;
