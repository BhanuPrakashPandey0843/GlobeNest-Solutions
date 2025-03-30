import React, { useRef } from 'react';
import HeroSection from '../components/HeroSection/HeroSection';
import StatsSection from '../components/StatsSection/StatsSection';
import Timeline from '../components/Timeline/Timeline';
import Testimonial from '../components/Testimonial/Testimonial';
import StudyDestinations from '../components/StudyDestinations/StudyDestinations';
import FAQ from '../components/FAQ/faq';
import ConsultationBanner from '../components/ConsultationBanner/Banner';
import Navbar from '../components/Navbar/Navbar';

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
      
      <div ref={heroRef}><HeroSection /></div>
      <div ref={statsRef}><StatsSection /></div>
      <div ref={timelineRef}><Timeline /></div>
      <div ref={testimonialRef}><Testimonial /></div>
      <div ref={destinationsRef}><StudyDestinations /></div>
      <div ref={faqRef}><FAQ /></div>
      <div ref={consultationRef}><ConsultationBanner /></div>
      {/* Spacer to reduce gap */}
<div className="mt-[-20px]"></div> 

    </div>
  );
};

export default LandingPage;
