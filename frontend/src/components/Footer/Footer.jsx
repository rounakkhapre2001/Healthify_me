import { FaFacebookF, FaInstagram, FaTelegramPlane, FaGoogle } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-green-800 to-green-500 text-white">
      <div className="container mx-auto px-4 py-10 grid md:grid-cols-3 gap-8">
        {/* Company Info */}
        <div>
          <h2 className="text-2xl font-bold mb-4">Healthify me</h2>
          <p className="text-sm text-white/80">
            Helping you find your perfect balance with food and nutrition.
            Begin your journey towards a balanced and healthy relationship with food,
            guided by expert nutritionists who understand your unique needs.
          </p>
        </div>

        {/* Quick Links */}
        <div className="grid grid-cols-2 gap-4">
          <div>
            <h2 className="text-xl font-bold mb-4">Quick Links</h2>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:underline">Home</a></li>
              <li><a href="#about" className="hover:underline">About</a></li>
              <li><a href="#services" className="hover:underline">Services</a></li>
              <li><a href="#testimonial" className="hover:underline">Testimonial</a></li>
              <li><a href="#" className="hover:underline">Privacy Policy</a></li>
            </ul>
          </div>
          <div>
            <h2 className="text-xl font-bold mb-4 invisible">Quick Links</h2>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:underline">Home</a></li>
              <li><a href="#about" className="hover:underline">About</a></li>
              <li><a href="#services" className="hover:underline">Services</a></li>
              <li><a href="#testimonial" className="hover:underline">Testimonial</a></li>
              <li><a href="#" className="hover:underline">Privacy Policy</a></li>
            </ul>
          </div>
        </div>

        {/* Follow Us */}
        <div>
          <h2 className="text-xl font-bold mb-4">Follow Us</h2>
          <p className="text-sm text-white/80 mb-2">+91 9021360459</p>
          <p className="text-sm text-white/80 mb-4">Nagpur, Maharashtra</p>
          <div className="flex gap-4 text-2xl">
            <a href="#" className="hover:text-gray-300"><FaFacebookF /></a>
            <a href="#" className="hover:text-gray-300"><FaInstagram /></a>
            <a href="#" className="hover:text-gray-300"><FaTelegramPlane /></a>
            <a href="#" className="hover:text-gray-300"><FaGoogle /></a>
          </div>
        </div>
      </div>

      {/* Divider Line */}
      <div className="border-t border-white/50"></div>

      {/* Copyright */}
      <div className="text-center py-4 text-sm">
        Copyright © 2025 iitian infotech. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
