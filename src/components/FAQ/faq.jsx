import React, { useState, useEffect, useRef } from "react";
import { gsap } from "gsap";

const faqs = [
  {
    question: "What services does GlobeNest Solutions offer?",
    answer: "GlobeNest Solutions is your one-stop destination for hassle-free international experiences. We provide expert guidance in university admissions, visa and immigration support, accommodation and travel arrangements, foreign exchange services, and tourist solutions. Whether you're a student planning to study abroad or a traveler exploring new destinations, we ensure a smooth and stress-free journey from start to finish.",
  },
  {
    question: "How does GlobeNest help with studying abroad?",
    answer: "We simplify the entire process of studying abroad by assisting students in choosing the right university based on their academic goals, budget, and preferences. Our team helps with application submission, documentation, interview preparation, and securing student visas. Additionally, we provide guidance on accommodation, travel, and foreign exchange, ensuring a seamless transition to a new country.",
  },
  {
    question: "Can GlobeNest help with accommodation and travel arrangements?",
    answer: "Yes! We offer complete assistance in securing safe, comfortable, and affordable accommodation for students and tourists. From student housing near universities to short-term stays for travelers, we ensure you have the best options. Additionally, we help with flight bookings, airport transfers, sightseeing tours, and local travel arrangements, making your experience stress-free and enjoyable.",
  },
  {
    question: "Do you provide foreign exchange services?",
    answer: "Absolutely! We offer secure, convenient, and competitive foreign exchange services for students and travelers. Our goal is to help you get the best currency exchange rates with minimal hassle. Whether you need funds for tuition, daily expenses, or travel, we ensure quick and secure transactions to support your financial needs abroad.",
  },
  {
    question: "How do I get started with GlobeNest Solutions?",
    answer: "Getting started is simple! Contact our team, and we will guide you through the entire process based on your specific needs. Whether you're looking for study abroad assistance, visa processing, accommodation, travel planning, or currency exchange, we provide personalized solutions to make your international journey smooth and worry-free. Reach out today and take the first step toward your global adventure! ",
  },
];


const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);
  const faqRefs = useRef([]);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  useEffect(() => {
    if (openIndex !== null) {
      gsap.fromTo(
        faqRefs.current[openIndex],
        { opacity: 0, y: -10 },
        { opacity: 1, y: 0, duration: 0.4, ease: "power2.out" }
      );
    }
  }, [openIndex]);

  return (
    <div className="max-w-3xl mx-auto py-16 px-6 text-center">
      {/* Heading */}
      <h2 className="text-4xl font-extrabold text-gray-900 leading-tight">Frequently Asked Questions</h2>
      <p className="text-gray-600 mt-2 text-lg">
      Got Questions? We’ve Got Answers! Everything You Need to Know for a Seamless Study, Travel, and Visa Experience with GlobeNest!
      </p>

      {/* FAQ List */}
      <div className="mt-8 space-y-4">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className={`border border-gray-300 rounded-lg overflow-hidden shadow-md transition-all ${
              openIndex === index ? "bg-gray-50 shadow-lg" : "bg-white"
            }`}
          >
            <button
              className="w-full flex justify-between items-center p-5 text-left text-gray-900 font-semibold transition-all hover:bg-gray-100"
              onClick={() => toggleFAQ(index)}
            >
              {faq.question}
              <span className="text-lg transition-transform transform">
                {openIndex === index ? "➖" : "➕"}
              </span>
            </button>
            <div
              ref={(el) => (faqRefs.current[index] = el)}
              className={`px-5 text-gray-700 text-md overflow-hidden transition-all duration-300 ${
                openIndex === index ? "max-h-40 opacity-100 py-3" : "max-h-0 opacity-0"
              }`}
            >
              {faq.answer}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;
