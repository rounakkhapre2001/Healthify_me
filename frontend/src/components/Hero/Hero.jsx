import React from "react";
import { Link, useNavigate } from 'react-router-dom';
import { auth } from "../../firebase"; // auth import karna hoga
import { useAuthState } from "react-firebase-hooks/auth"; // firebase hooks use karte hain

const Hero = () => {
  const [user] = useAuthState(auth);
  const navigate = useNavigate();

  const handleGetStarted = () => {
    if (user) {
      navigate("/get-diet"); // logged in hai, diet page
    } else {
      navigate("/login"); // nahi login hai, login page
    }
  };

  return (
    <div className="bg-black/20 h-full text-white relative z-50">
      <div className="h-full flex justify-center items-center p-4">
        <div className="container grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="space-y-4 lg:pr-36">
            <h1 data-aos="fade-up" className="text-5xl font-bold uppercase">
              Ditch the Diet.
            </h1>
            <h1 data-aos="fade-up" className="text-5xl font-bold uppercase">
              Find Your Balance.
            </h1>

            <p data-aos="fade-up" data-aos-delay="300">
              Discover the power of personalized nutrition.
              Our expert dieticians create balanced, sustainable plans tailored to your lifestyle.
              From mindful eating to complete wellness, we guide you every step of the way.
              Nourish your body, transform your life.
            </p>

            <button
              onClick={handleGetStarted}
              className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-6 rounded transition duration-300"
            >
              Get Started
            </button>
          </div>

          {/* Image or illustration space */}
          <div className="hidden sm:block">
            {/* Example: <img src="/hero-image.png" alt="Nutrition" /> */}
          </div>
        </div>
      </div>

      {/* bottom gradient section */}
      <div className="absolute bottom-0 w-full z-30 bg-gradient-to-b from-transparent from-10% to-black to-90% h-[20px] sm:h-[50px] md:h-[60px]"></div>
    </div>
  );
};

export default Hero;
