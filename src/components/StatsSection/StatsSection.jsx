import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const StatsSection = () => {
  const sectionRef = useRef(null);
  const cardsRef = useRef([]);

  useEffect(() => {
    // ScrollTrigger animation for the whole section
    gsap.fromTo(
      sectionRef.current,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1.5,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
      }
    );

    // Animation for individual cards (scale and fade in)
    gsap.utils.toArray(cardsRef.current).forEach((card, index) => {
      gsap.fromTo(
        card,
        { opacity: 0, scale: 0.9, y: 50 },
        {
          opacity: 1,
          scale: 1,
          y: 0,
          duration: 1.2,
          ease: "power3.out",
          delay: index * 0.2, // Staggered animation
          scrollTrigger: {
            trigger: card,
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        }
      );
    });
  }, []);

  return (
    <div ref={sectionRef} className="flex flex-col items-center text-center px-6 py-16 bg-white">
      {/* Title */}
      <h2 className="text-3xl md:text-4xl font-extrabold leading-snug">
        Join the <span className="text-yellow-500">Study Abroad</span> Revolution
      </h2>
      <p className="text-gray-600 mt-4 max-w-2xl text-lg md:text-xl leading-relaxed">
        GlobeNest Solutions – Your trusted partner for seamless study, travel, and visa assistance worldwide!
      </p>

      {/* Stats Cards */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-8 w-full max-w-4xl">
        {statsData.map((stat, index) => (
          <div
            key={index}
            ref={(el) => (cardsRef.current[index] = el)} // Assign to ref for GSAP targeting
            className={`p-6 rounded-lg shadow-lg text-center transition-all duration-300 transform hover:scale-105 hover:shadow-xl
            ${stat.alwaysBlue ? "bg-blue-600 text-white" : "bg-gray-100 text-gray-800 hover:bg-blue-600 hover:text-white"}`}
          >
            <h3 className="text-3xl font-bold">{stat.value}</h3>
            <p className="mt-2 text-lg">{stat.label}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

// One card will always be blue (Academic Specializations)
const statsData = [
  { value: "100+", label: "Collaboration" },
  { value: "150+", label: "Destinations", alwaysBlue: true },
  { value: "200k+", label: "Customers" },
  { value: "15+", label: "Years of Experience" },
];

export default StatsSection;
