import { useState } from "react";

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
      <section className="py-12">
        <div className="mx-auto max-w-5xl px-4">
          <div className="grid lg:grid-cols-2 grid-cols-1 gap-6">
            {/* Left Section - Contact Info */}
            <div className="relative">
              <img
                src="https://pagedone.io/asset/uploads/1696488602.png"
                alt="Contact Us"
                className="w-full h-auto rounded-lg"
              />
              <h1 className="absolute top-6 left-6 text-3xl font-bold text-white">Contact us</h1>
              <div className="absolute bottom-0 w-full p-4 bg-white rounded-lg shadow-md">
                <ContactInfo icon="📞" text="470-601-1911" href="tel:4706011911" />
                <ContactInfo icon="📩" text="GlobeNest@GlobeNest.com" href="https://veilmail.io/irish-geoff" />
                <ContactInfo icon="📍" text="Mumbai" />
              </div>
            </div>

            {/* Right Section - Form */}
            <div className="bg-gray-50 p-6 rounded-lg shadow-md">
              <h2 className="text-indigo-600 text-3xl font-semibold mb-6">Send Us A Message</h2>

              {/* Inputs */}
              <Input name="name" placeholder="Name" value={formData.name} onChange={handleChange} />
              <Input name="email" placeholder="Email" value={formData.email} onChange={handleChange} type="email" />
              <Input name="phone" placeholder="Phone" value={formData.phone} onChange={handleChange} type="tel" />

              {/* Message */}
              <textarea
                name="message"
                className="w-full h-24 text-gray-600 placeholder-gray-400 bg-transparent text-lg font-normal border border-gray-200 rounded-md p-3 focus:outline-none mb-6"
                placeholder="Message"
                value={formData.message}
                onChange={handleChange}
              />

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full h-10 text-white text-base font-semibold rounded-md bg-indigo-600 hover:bg-indigo-800 transition-all"
              >
                Send
              </button>
            </div>
          </div>
        </div>
      </section>
    </form>
  );
};

// Reusable Input Component
const Input = ({ name, type = "text", placeholder, value, onChange }) => (
  <input
    type={type}
    name={name}
    value={value}
    onChange={onChange}
    className="w-full h-10 text-gray-600 placeholder-gray-400 bg-transparent text-base border border-gray-200 rounded-md p-3 focus:outline-none mb-4"
    placeholder={placeholder}
  />
);

// Reusable Contact Info Component
const ContactInfo = ({ icon, text, href = "#" }) => (
  <a href={href} className="flex items-center mb-3">
    <span className="text-indigo-500 text-xl">{icon}</span>
    <h5 className="text-black text-base font-normal ml-3">{text}</h5>
  </a>
);

export default ContactForm;
