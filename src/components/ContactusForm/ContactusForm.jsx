import { useState } from "react";
import { motion } from "framer-motion";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted:", formData);
    // Send data to API or Fabform.io
  };

  return (
    <form action="https://fabform.io/f/xxxxx" method="post" onSubmit={handleSubmit}>
      <motion.section
        className="py-12"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={{
          hidden: { opacity: 0, y: 50 },
          visible: { opacity: 1, y: 0, transition: { duration: 1 } },
        }}
      >
        <div className="mx-auto max-w-5xl px-4">
          <div className="grid lg:grid-cols-2 grid-cols-1 gap-6">
            {/* Left Section - Contact Info */}
            <motion.div
              className="relative"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, ease: "easeOut" }}
              viewport={{ once: true, amount: 0.2 }}
            >
              <img
                src="https://www.digitalallo.ca/wp-content/uploads/2023/04/Digital-Allo-Contact-Us.gif"
                alt="Contact Us"
                className="w-full h-auto rounded-lg"
              />
              <motion.h1
                className="absolute top-6 left-6 text-3xl font-bold text-white"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1, delay: 0.3 }}
              >
                Contact us
              </motion.h1>

              <motion.div
                className="absolute bottom-0 w-full p-4 bg-white rounded-lg shadow-md"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.5 }}
              >
                <ContactInfo icon="📞" text="470-601-1911" href="tel:4706011911" />
                <ContactInfo icon="📩" text="GlobeNest@GlobeNest.com" href="https://veilmail.io/irish-geoff" />
                <ContactInfo icon="📍" text="Mumbai" />
              </motion.div>
            </motion.div>

            {/* Right Section - Form */}
            <motion.div
              className="bg-gray-50 p-6 rounded-lg shadow-md"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, ease: "easeOut" }}
              viewport={{ once: true, amount: 0.2 }}
            >
              <h2 className="text-indigo-600 text-3xl font-semibold mb-6">Send Us A Message</h2>

              {/* Inputs with Animation */}
              <Input name="name" placeholder="Name" value={formData.name} onChange={handleChange} />
              <Input name="email" placeholder="Email" value={formData.email} onChange={handleChange} type="email" />
              <Input name="phone" placeholder="Phone" value={formData.phone} onChange={handleChange} type="tel" />

              {/* Message */}
              <motion.textarea
                name="message"
                className="w-full h-24 text-gray-600 placeholder-gray-400 bg-transparent text-lg font-normal border border-gray-200 rounded-md p-3 focus:outline-none mb-6"
                placeholder="Message"
                value={formData.message}
                onChange={handleChange}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.4 }}
              />

              {/* Submit Button */}
              <motion.button
                type="submit"
                className="w-full h-10 text-white text-base font-semibold rounded-md bg-indigo-600 hover:bg-indigo-800 transition-all"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, ease: "easeOut", delay: 0.6 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Send
              </motion.button>
            </motion.div>
          </div>
        </div>
      </motion.section>
    </form>
  );
};

// Reusable Input Component with Animation
const Input = ({ name, type = "text", placeholder, value, onChange }) => (
  <motion.input
    type={type}
    name={name}
    value={value}
    onChange={onChange}
    className="w-full h-10 text-gray-600 placeholder-gray-400 bg-transparent text-base border border-gray-200 rounded-md p-3 focus:outline-none mb-4"
    placeholder={placeholder}
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 1, delay: 0.2 }}
  />
);

// Reusable Contact Info Component
const ContactInfo = ({ icon, text, href = "#" }) => (
  <motion.a
    href={href}
    className="flex items-center mb-3"
    initial={{ opacity: 0, x: -20 }}
    whileInView={{ opacity: 1, x: 0 }}
    transition={{ duration: 1, delay: 0.2 }}
  >
    <span className="text-indigo-500 text-xl">{icon}</span>
    <h5 className="text-black text-base font-normal ml-3">{text}</h5>
  </motion.a>
);

export default ContactForm;
