import React, { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { auth } from "../../firebase";
import { onAuthStateChanged, signOut } from "firebase/auth";

import Logo from "../../assets/logo.png";
import { Menu, X } from "lucide-react"; // Using lucide-react icons for Hamburger

const Navbar = () => {
  const [user, setUser] = useState(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return () => unsubscribe();
  }, []);

  const handleLogout = async () => {
    try {
      await signOut(auth);
      navigate("/login");
    } catch (error) {
      console.log(error.message);
    }
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const isAuthOrDietPage =
    location.pathname === "/login" ||
    location.pathname === "/signup" ||
    location.pathname === "/get-diet";

  return (
    <div
      data-aos="fade-down"
      className="fixed top-0 right-0 w-full z-[99] bg-black/10 backdrop-blur-sm py-3"
    >
      <div className="container mx-auto flex justify-between items-center px-4">
        {/* Logo and Name */}
        <Link to="/" className="flex items-center gap-2 text-white font-bold text-2xl">
          <img src={Logo} alt="logo" className="w-12" />
          <h1 className="text-2xl sm:text-3xl font-bold uppercase">
            HEALTHIFY <span className="font-normal text-lg sm:text-2xl">Me</span>
          </h1>
        </Link>

        {/* Hamburger and Menu */}
        {!isAuthOrDietPage && (
          <div className="flex items-center gap-4">
            {/* Desktop Menu */}
            <ul className="hidden md:flex items-center gap-6 text-white text-lg">
              <li><a href="#home" className=" text-green-700 hover:text-white">Home</a></li>
              <li><a href="#about" className="hover:text-green-700">About</a></li>
              <li><a href="#services" className="hover:text-green-700">Services</a></li>
              <li><a href="#testimonial" className="hover:text-green-700">Testimonial</a></li>
              <li><a href="#contact" className="hover:text-green-700">Contact Us</a></li>
            </ul>

            {/* Mobile Hamburger */}
            <button className="md:hidden text-white" onClick={toggleMenu}>
              {menuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        )}

        {/* Login / Logout */}
        {/* Login / Logout */}
<div className="ml-4">
  {user ? (
    <button
      onClick={handleLogout}
      className="text-white border-2 border-white px-3 py-1 rounded-md text-sm sm:text-base hover:bg-green-700 hover:text-white transition duration-300"
    >
      LogOut
    </button>
  ) : (
    <Link to="/login">
      <button className="text-white border-2 border-white px-3 py-1 rounded-md text-sm sm:text-base hover:bg-green-700 hover:text-white transition duration-300">
        LogIn
      </button>
    </Link>
  )}
</div>

      </div>

      {/* Mobile Menu Dropdown */}
      {menuOpen && !isAuthOrDietPage && (
        <div className="md:hidden bg-black/10 backdrop-blur-md text-white flex flex-col items-center space-y-6 py-6">
          <a href="#home" className="hover:text-green-700" onClick={() => setMenuOpen(false)}>Home</a>
          <a href="#about" className="hover:text-green-700" onClick={() => setMenuOpen(false)}>About</a>
          <a href="#services" className="hover:text-green-700" onClick={() => setMenuOpen(false)}>Services</a>
          <a href="#testimonial" className="hover:text-green-700" onClick={() => setMenuOpen(false)}>Testimonial</a>
          <a href="#contact" className="hover:text-green-700" onClick={() => setMenuOpen(false)}>Contact Us</a>
        </div>
      )}
    </div>
  );
};

export default Navbar;
