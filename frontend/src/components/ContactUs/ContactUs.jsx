import React, { useState } from "react";
import { db } from "../../firebase";
import { collection, addDoc } from "firebase/firestore";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ 
      ...formData, 
      [e.target.name]: e.target.value 
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const contactRef = collection(db, "contacts"); // 👈 "contacts" collection me save hoga
      await addDoc(contactRef, formData);
      alert("Message sent successfully!");
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
    } catch (error) {
      console.error("Error sending message: ", error);
      alert("Failed to send message. Try again later!");
    }
  };

  return (
    <div className="bg-white py-16 px-6" data-aos="fade-up">
      <div className="container mx-auto max-w-6xl grid md:grid-cols-2 gap-8 items-center">
        {/* Left side - Contact Details */}
        <div>
          <h3 className="text-xl font-bold mb-4">Contact Us</h3>
          <p className="text-gray-600 mb-6">
            Have questions about your diet plan or need expert guidance? We're here to help you on your health journey.
          </p>
          <div className="mb-4">
            <p className="font-semibold">PHONE :</p>
            <p className="font-semibold">Mon–Sat, 9:00 AM – 7:00 PM</p>
            <p className="text-gray-600">+91 9021360459</p>
          </div>
          <div className="mb-4">
            <p className="font-semibold">EMAIL :</p>
            <p className="text-gray-600">rukhminipilare24@gmail.com</p>
          </div>
          <div className="mb-4">
            <p className="font-semibold">Live Chat</p>
            <p className="text-gray-600">Talk to our team directly from the app or website.
              Instant responses during working hours.</p>
          </div>
          <div>
            <p className="font-semibold">ADDRESS :</p>
            <p className="text-gray-600">Nagpur, Maharashtra, India</p>
          </div>
        </div>

        {/* Right side - Contact Form */}
        <div className="bg-gray-100 p-6 rounded-lg">
          <form className="grid gap-4" onSubmit={handleSubmit}>
            <div className="grid md:grid-cols-2 gap-4">
              <input
                type="text"
                name="name"
                placeholder="Name"
                value={formData.name}
                onChange={handleChange}
                className="border border-gray-300 rounded-md px-4 py-2 w-full"
                required
              />
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
                className="border border-gray-300 rounded-md px-4 py-2 w-full"
                required
              />
            </div>
            <input
              type="text"
              name="subject"
              placeholder="Subject"
              value={formData.subject}
              onChange={handleChange}
              className="border border-gray-300 rounded-md px-4 py-2 w-full"
              required
            />
            <textarea
              rows="5"
              name="message"
              placeholder="Message"
              value={formData.message}
              onChange={handleChange}
              className="border border-gray-300 rounded-md px-4 py-2 w-full"
              required
            ></textarea>
            <button
              type="submit"
              className="bg-orange-500 text-white py-3 px-6 rounded-md hover:bg-orange-600 transition-all w-full"
            >
              Send Now!
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
