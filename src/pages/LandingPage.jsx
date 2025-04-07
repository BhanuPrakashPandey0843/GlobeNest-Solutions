import React, { useRef } from 'react';
import { motion } from 'framer-motion'; // Import motion from framer-motion
import HeroSection from '../components/HeroSection/HeroSection';
import StatsSection from '../components/StatsSection/StatsSection';
import Timeline from '../components/Timeline/Timeline';
import Testimonial from '../components/Testimonial/Testimonial';
import StudyDestinations from '../components/StudyDestinations/StudyDestinations';
import FAQ from '../components/FAQ/faq';
import ConsultationBanner from '../components/ConsultationBanner/Banner';
import Navbar from '../components/Navbar/Navbar';
import Ourservices from '../components/Ourservices/Ourservices'

const LandingPage = () => {
  const heroRef = useRef(null);
  const statsRef = useRef(null);
  const timelineRef = useRef(null);
  const testimonialRef = useRef(null);
  const destinationsRef = useRef(null);
  const faqRef = useRef(null);
  const consultationRef = useRef(null);

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar
        heroRef={heroRef}
        statsRef={statsRef}
        timelineRef={timelineRef}
        testimonialRef={testimonialRef}
        destinationsRef={destinationsRef}
        faqRef={faqRef}
        consultationRef={consultationRef}
      />
      
      {/* Hero Section */}
      <motion.div
        ref={heroRef}
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <HeroSection />
      </motion.div>
      {/* Ourservices */}
      <motion.div
        ref={faqRef}
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <Ourservices />
      </motion.div>
     
      
      {/* Timeline Section */}
      <motion.div
        ref={timelineRef}
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <Timeline />
      </motion.div>
      
      {/* Testimonial Section */}
      <motion.div
        ref={testimonialRef}
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <Testimonial />
      </motion.div>
      
      {/* Study Destinations Section */}
      <motion.div
        ref={destinationsRef}
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <StudyDestinations />
      </motion.div>
        
         {/* Stats Section */}
      <motion.div
        ref={statsRef}
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <StatsSection />
      </motion.div>

            {/* Ourservices
            <motion.div
        ref={faqRef}
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <Ourservices />
      </motion.div> */}
      
      {/* FAQ Section */}
      <motion.div
        ref={faqRef}
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <FAQ />
      </motion.div>
      
      {/* Consultation Banner Section */}
      <motion.div
        ref={consultationRef}
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <ConsultationBanner />
      </motion.div>
      
      {/* Spacer to reduce gap */}
      <div className="mt-[-20px]"></div>
    </div>
  );
};

export default LandingPage;
