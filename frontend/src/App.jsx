import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import bgVideo from "./assets/123-bg.mp4";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Banner from "./components/Banner/Banner";
import Services from "./components/Services/Services";
import Testimonial from "./components/Testimonial/Testimonial";
import ContactUs from "./components/ContactUs/ContactUs"; 
import Footer from "./components/Footer/Footer";

import GetDiet from './pages/GetDiet';
import Login from './pages/Login';   // ✅ Added
import Signup from './pages/Signup'; // ✅ Added

import AOS from "aos";
import "aos/dist/aos.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const App = () => {
  useEffect(() => {
    AOS.init({
      duration: 1200,
      easing: "ease-out-in",
    });
  }, []);

  return (
    <Router>
      <div className="flex flex-col min-h-screen w-full scroll-smooth">
        {/* Background Video */}
        <video
          autoPlay
          loop
          muted
          className="fixed top-0 left-0 w-full h-[700px] object-cover -z-10"
        >
          <source src={bgVideo} type="video/mp4" />
        </video>

        {/* Navbar */}
        <Navbar />

        {/* Define Routes */}
        <Routes>
          <Route
            path="/"
            element={
              <div className="flex-grow">
                <section id="home" className="relative h-[700px]">
                  <Hero />
                </section>

                <section id="about">
                  <Banner />
                </section>

                <section id="services">
                  <Services />
                </section>

                <section id="testimonial" className="mb-0 pb-0">
                  <Testimonial />
                </section>

                <section id="contact" className="mt-0 pt-0">
                  <ContactUs />
                </section>
              </div>
            }
          />

          <Route path="/get-diet" element={<GetDiet />} />

          {/* ✅ Added these two routes */}
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>

        {/* Footer */}
        <Footer />
      </div>
    </Router>
  );
};

export default App;
