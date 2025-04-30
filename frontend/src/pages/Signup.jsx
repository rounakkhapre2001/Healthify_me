import React, { useState } from "react";
import { createUserWithEmailAndPassword, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth } from "../firebase";
import { useNavigate, Link } from "react-router-dom";
import bgVideo from "../assets/123-bg.mp4";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const provider = new GoogleAuthProvider();

  const handleSignup = async (e) => {
    e.preventDefault();
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      setEmail("");
      setPassword("");
      alert("Signup successful! Please login to continue."); // 👈 Success message
      navigate("/login"); // 👈 Now navigate to Login page
    } catch (error) {
      console.error(error);
      alert(error.message);
      setEmail("");
      setPassword("");
    }
  };

  const handleGoogleSignup = async () => {
    try {
      await signInWithPopup(auth, provider);
      navigate("/");
    } catch (error) {
      console.error(error);
      alert(error.message);
    }
  };

  return (
    <div className="relative min-h-screen flex flex-col pt-24 pb-16 items-center justify-start">
      {/* Background Video */}
      <video autoPlay loop muted className="absolute top-0 left-0 w-full h-full object-cover -z-10">
        <source src={bgVideo} type="video/mp4" />
      </video>

      {/* Signup Box */}
      <div className="bg-white/80 backdrop-blur-md p-8 sm:p-10 rounded-xl shadow-lg flex flex-col items-center w-full max-w-md">
        <h1 className="text-3xl sm:text-4xl font-bold mb-6 text-center">Signup</h1>

        <form onSubmit={handleSignup} className="flex flex-col gap-4 w-full">
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="p-3 border rounded bg-yellow-100"
            autoComplete="off"
            required
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="p-3 border rounded bg-yellow-100"
            autoComplete="off"
            required
          />
          <button type="submit" className="p-3 bg-green-500 hover:bg-green-600 text-white font-semibold rounded">
            Signup
          </button>
        </form>

        <p className="mt-4 text-gray-700">
          Already have an account?{" "}
          <Link to="/login" className="text-blue-600 font-semibold hover:underline">
            Login
          </Link>
        </p>

        <div className="mt-6 w-full">
          <button
            onClick={handleGoogleSignup}
            className="flex items-center justify-center gap-2 w-full px-4 py-3 border border-gray-400 rounded hover:bg-gray-100"
          >
            <img src="https://cdn-icons-png.flaticon.com/512/2991/2991148.png" alt="Google" className="w-5 h-5" />
            Continue with Google
          </button>
        </div>
      </div>
    </div>
  );
};

export default Signup;
