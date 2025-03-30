import React from "react";
import FAQ from "../components/FAQ/Faq"; // Ensure correct import path
import ContactHero from "../components/ContactHero/ContactHero";
import ContactusForm from "../components/ContactusForm/ContactusForm";
import ConsultationBanner from '../components/ConsultationBanner/Banner';
const ContactPage = () => {
  return (
    <main className="min-h-screen bg-gray-100 flex flex-col items-center p-6">
      <ContactHero />
      <ContactusForm />
      <FAQ />
      <ConsultationBanner  />
    </main>
  );
};

export default ContactPage;
