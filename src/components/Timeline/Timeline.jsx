import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Timeline = () => {
  const timelineRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      timelineRef.current,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1.5,
        ease: "power3.out",
        scrollTrigger: {
          trigger: timelineRef.current,
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
      }
    );
  }, []);

  return (
    <div ref={timelineRef}>
      <section
        className="py-12"
        style={{
          background: `radial-gradient(circle at top left, rgba(253, 224, 71, 0.6), rgba(134, 239, 172, 0.4), transparent 50%),
                      radial-gradient(circle at top right, rgba(124, 58, 237, 0.5), rgba(59, 130, 246, 0.4), transparent 50%),
                      linear-gradient(to bottom, rgba(255, 255, 255, 0.8), rgba(240, 240, 240, 1))`,
          minHeight: "100vh",
          width: "100%",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="container mx-auto flex flex-col items-start md:flex-row my-12 md:my-24">
          {/* Left Section */}
          <div className="flex flex-col w-full sticky md:top-36 lg:w-1/3 mt-2 md:mt-12 px-8">
            <p className="ml-2 text-orange-600 uppercase tracking-loose">Our Services</p>
            <p className="text-3xl md:text-4xl leading-normal md:leading-relaxed mb-2 font-extrabold text-gray-900">
            Explore. Study. Travel.
            </p>
            <p className="text-sm md:text-base text-gray-700 mb-4">
            Seamless admissions, visas, stays, and travel—everything you need for your journey abroad!
            </p>
            <a
              href="#"
              className="bg-transparent mr-auto hover:bg-orange-500 text-orange-500 hover:text-white rounded shadow-lg hover:shadow-xl transition-transform transform hover:scale-105 py-2 px-4 border border-orange-500 hover:border-transparent"
            >
              Explore Now
            </a>
          </div>

          {/* Right Section */}
          <div className="ml-0 md:ml-12 lg:w-2/3 sticky">
            <div className="container mx-auto w-full h-full">
              <div className="relative wrap overflow-hidden p-10 h-full">
                {/* Timeline Line */}
                <div
                  className="absolute h-full border-[1.5px] border-orange-400"
                  style={{ right: "50%", borderRadius: "1%" }}
                ></div>
                <div
                  className="absolute h-full border-[1.5px] border-orange-400"
                  style={{ left: "50%", borderRadius: "1%" }}
                ></div>

                {/* Timeline Items */}
                {timelineData.map((item, index) => (
                  <div
                    key={index}
                    className={`mb-8 flex justify-between ${index % 2 === 0 ? "flex-row-reverse" : ""} items-center w-full`}
                  >
                    <div className="order-1 w-5/12"></div>
                    <div
                      className={`order-1 w-5/12 px-1 py-4 ${index % 2 === 0 ? "text-right" : "text-left"}`}
                    >
                      <p className="mb-3 text-base text-orange-600">{item.date}</p>
                      <h4 className="mb-3 font-bold text-lg md:text-2xl text-gray-900">{item.title}</h4>
                      <p className="text-sm md:text-base leading-snug text-gray-700">
                        {item.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Timeline Image */}
              <img
                className="mx-auto -mt-36 md:-mt-36 opacity-90"
                src="https://user-images.githubusercontent.com/54521023/116968861-ef21a000-acd2-11eb-95ac-a34b5b490265.png"
                alt="Timeline"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

const timelineData = [
  {
    date: "Foreign Exchange Services",
    title: " Providing secure and convenient currency exchange solutions. ",
    description:
      "We offer secure and competitive foreign exchange services, helping students and travelers get the best currency rates with hassle-free transactions to support their financial needs abroad.",
  },
  {
    date: "Visa & Immigration Support",
    title: " Simplifying the visa application process for a hassle-free journey.",
    description:
      "Navigating visa requirements can be complex, but we simplify the process by providing step-by-step guidance, document verification, and interview coaching, ensuring a high success rate for student and tourist visas.",
  },
  {
    date: "Accommodation & Travel Arrangements",
    title: "Ensuring comfortable stays and seamless travel experiences.",
    description:
      "From finding safe and affordable student housing to arranging flights, airport transfers, and sightseeing tours, we ensure a comfortable and stress-free journey for students and travelers alike.",
  },
  {
    date: "University Admissions Assistance",
    title: "Ensuring comfortable stays and seamless travel experiences.",
    description:
      "We guide students in selecting the right university based on their academic goals, preferences, and budget. Our team assists with application processes, documentation, and interview preparation to ensure a smooth admission experience.",
  },
];

export default Timeline;