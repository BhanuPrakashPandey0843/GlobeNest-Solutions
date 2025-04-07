import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion"; // Import motion for animations

const destinations = [
  { name: "India", flag: "https://images6.alphacoders.com/911/911295.png" },
  { name: "Ireland", flag: "https://www.worldatlas.com/r/w2000-h1125-q90/upload/a8/ca/b2/ie-flag.jpg" },
  { name: "UK", flag: "https://th.bing.com/th/id/R.89ffb296847e5a3899cd4b0dcc79711b?rik=2BGacdsE8nl7OQ&riu=http%3a%2f%2fwallpapercave.com%2fwp%2fkNECI1v.jpg&ehk=3PE2L1tPEAdLrUXAr8%2by2x%2bct1WzMjfMuzr3RgLK5WQ%3d&risl=&pid=ImgRaw&r=0" },
  { name: "Malaysia", flag: "https://pixelz.cc/wp-content/uploads/2018/11/malaysia-flag-uhd-4k-wallpaper.jpg" },
  { name: "The UAE", flag: "https://wallpaperaccess.com/full/1459305.jpg" },
  { name: "Georgia", flag: "https://th.bing.com/th/id/OIP.68nPgwAPuz2Va6f73wLoAQHaEr?rs=1&pid=ImgDetMain" },
  { name: "US", flag: "https://www.rankflags.com/wp-content/uploads/2015/04/National-Flag-Of-United-States.jpg" },
  { name: "Canada", flag: "https://th.bing.com/th/id/OIP.tD9rYFKeVImGkgAuiewYOQHaDw?rs=1&pid=ImgDetMain" },
  { name: "France", flag: "https://upload.wikimedia.org/wikipedia/en/c/c3/Flag_of_France.svg" },
  { name: "Italy", flag: "https://th.bing.com/th/id/OIP.PROT0PCie3d8bK0hyf-pfwHaE7?rs=1&pid=ImgDetMain" },
  { name: "Spain", flag: "https://wallpaperaccess.com/full/1099381.jpg" },
  { name: "Japan", flag: "https://upload.wikimedia.org/wikipedia/en/9/9e/Flag_of_Japan.svg" },
];

const StudyDestinations = () => {
  const scrollRef = useRef(null);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    let scrollAmount = 0;
    const speed = 1.2;

    const scroll = () => {
      if (scrollContainer && !isHovered) {
        scrollAmount += speed;
        if (scrollAmount >= scrollContainer.scrollWidth / 2) {
          scrollAmount = 0;
        }
        scrollContainer.style.transform = `translateX(-${scrollAmount}px)`;
      }
    };

    const interval = setInterval(scroll, 30);
    return () => clearInterval(interval);
  }, [isHovered]);

  return (
    <div className="relative w-full overflow-hidden bg-white py-10">
      <h2 className="text-2xl font-semibold text-center text-gray-900 mb-6">
        🎓 Find Out Best Destination 🎓
      </h2>

      <div
        className="relative flex items-center w-full overflow-hidden bg-gray-100 shadow-lg rounded-lg py-6 px-4"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div
          ref={scrollRef}
          className="flex space-x-12 w-max transition-transform duration-1000 ease-linear"
          style={{ whiteSpace: "nowrap" }}
        >
          {[...destinations, ...destinations].map((destination, index) => (
            <motion.div
              key={index}
              className="flex flex-col items-center space-y-3 transform hover:scale-105 transition duration-300 ease-in-out"
              style={{ minWidth: "150px" }}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
            >
              <img
                src={destination.flag}
                alt={`${destination.name} Flag`}
                className="w-20 h-14 rounded-lg shadow-md border border-transparent object-cover"
              />
              <span className="text-lg font-medium text-gray-700">
                {destination.name}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

const HeroSection = () => {
  return (
    <section className="relative w-full flex flex-col items-center justify-start">
      <div
        className="w-full flex flex-col items-center text-center px-6 pb-16 pt-24"
        style={{
          background: `radial-gradient(circle at top left, rgba(253, 224, 71, 0.6), rgba(134, 239, 172, 0.4), transparent 50%),
                      radial-gradient(circle at top right, rgba(255, 94, 0, 0.7), rgba(59, 130, 246, 0.4), transparent 50%),
                      linear-gradient(to bottom, rgba(255, 255, 255, 0.8), rgba(240, 240, 240, 1))`,
          minHeight: "100vh",
          width: "100%",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      >
        <motion.button
          className="bg-transparent text-sm font-medium text-gray-700 px-5 py-2 rounded-full shadow-md mb-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
        >
          Explore best abroad facilities with GlobeNest Solutions
        </motion.button>

        <motion.h1
  className="text-lg md:text-5xl font-extrabold leading-tight text-gray-900"
  initial={{ opacity: 0, y: -100 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ delay: 0.5, duration: 1 }}
>
 Empowering Global Dreams, From <br></br>Study to Travel!
</motion.h1>

        <div className="w-full bg-transparent flex flex-col items-center text-center px-6 pb-16">
          <motion.p
            className="text-lg text-gray-700 mt-4 max-w-2xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 1 }}
          >
            GlobeNext Solutions simplifies global opportunities, from study to travel. We provide seamless visa assistance, university admissions, and travel arrangements, ensuring a hassle-free international experience.
          </motion.p>

          <div className="flex items-center justify-center gap-3 mt-6">
            <div className="flex -space-x-2">
              <img src="https://randomuser.me/api/portraits/women/79.jpg" className="w-10 h-10 rounded-full border border-white" />
              <img src="https://randomuser.me/api/portraits/men/42.jpg" className="w-10 h-10 rounded-full border border-white" />
              <img src="https://randomuser.me/api/portraits/women/21.jpg" className="w-10 h-10 rounded-full border border-white" />
              <img src="https://randomuser.me/api/portraits/men/62.jpg" className="w-10 h-10 rounded-full border border-white" />
            </div>
            <span className="text-gray-700 text-sm">Trusted already by 2k+ people</span>
          </div>

          <div className="mt-6 flex justify-center gap-4">
            <motion.button
              className="px-6 py-3 border border-gray-900 text-gray-900 font-medium rounded-full hover:bg-gray-100"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.5, duration: 1 }}
            >
              Learn more
            </motion.button>
            <Link to="/contact">
              <motion.button
                className="px-6 py-3 bg-indigo-600 text-white font-medium rounded-full hover:bg-indigo-700"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5, duration: 1 }}
              >
                Contact Us
              </motion.button>
            </Link>
            
          </div>
         
        </div>
      </div>
      
      <StudyDestinations />
    </section>
    
  );
};

export default HeroSection;
