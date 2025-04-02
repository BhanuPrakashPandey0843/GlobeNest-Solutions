import React, { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger"; // To trigger animations when components scroll into view
import FAQ from "../components/FAQ/Faq"; // Ensure correct import path
import ContactHero from "../components/ContactHero/ContactHero";
import ContactusForm from "../components/ContactusForm/ContactusForm";
import ConsultationBanner from '../components/ConsultationBanner/Banner';

gsap.registerPlugin(ScrollTrigger); // Register ScrollTrigger plugin

const ContactPage = () => {
  useEffect(() => {
    // Animation for ContactHero component
    gsap.fromTo(
      ".contact-hero", 
      { opacity: 0, y: -50 }, 
      { opacity: 1, y: 0, duration: 1, ease: "power2.out", scrollTrigger: { trigger: ".contact-hero", start: "top 80%" } }
    );

    // Animation for ContactusForm component
    gsap.fromTo(
      ".contact-form", 
      { opacity: 0, y: 50 }, 
      { opacity: 1, y: 0, duration: 1, ease: "power2.out", scrollTrigger: { trigger: ".contact-form", start: "top 80%" } }
    );

    // Animation for FAQ component
    gsap.fromTo(
      ".faq-section", 
      { opacity: 0, y: 50 }, 
      { opacity: 1, y: 0, duration: 1, ease: "power2.out", scrollTrigger: { trigger: ".faq-section", start: "top 80%" } }
    );

    // Animation for ConsultationBanner component
    gsap.fromTo(
      ".consultation-banner", 
      { opacity: 0, y: 50 }, 
      { opacity: 1, y: 0, duration: 1, ease: "power2.out", scrollTrigger: { trigger: ".consultation-banner", start: "top 80%" } }
    );
  }, []);

  return (
    <main className="min-h-screen bg-gray-100 flex flex-col items-center p-6">
      {/* ContactHero with animation */}
      <div className="contact-hero w-full">
        <ContactHero />
      </div>
      
      {/* ContactusForm with animation */}
      <div className="contact-form w-full mt-12">
        <ContactusForm />
      </div>

      {/* FAQ with animation */}
      <div className="faq-section w-full mt-12">
        <FAQ />
      </div>

      {/* ConsultationBanner with animation */}
      <div className="consultation-banner w-full mt-12">
        <ConsultationBanner />
      </div>
    </main>
  );
};

export default ContactPage;
