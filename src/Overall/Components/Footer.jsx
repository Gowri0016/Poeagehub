import React from "react";
import { Link } from "react-router-dom";
import logo from "../../Asset/Hub.png";
import play from "../../Asset/play.webp";
import app from "../../Asset/Mac.svg";

export default function Footer() {
  return (
    <footer className="relative bg-black text-white py-10 px-4 shadow-2xl overflow-hidden">
      
      {/* Layout container */}
      <div className="max-w-7xl mx-auto relative z-10 grid grid-cols-1 sm:grid-cols-2 md:flex md:flex-wrap md:justify-between gap-10">

        {/* Logo and Description */}
        <div className="text-center md:text-left transform hover:scale-105 transition duration-300 flex-1 min-w-[200px]">
          {logo && (
            <img src={logo} alt="PrimePick Logo" className="mx-auto md:mx-0 w-20 h-20 object-contain drop-shadow-3xl" />
          )}
          <p className="text-sm mt-3 drop-shadow-lg">
            Your one-stop destination for quality products delivered at your doorstep.
          </p>
        </div>

        {/* Content sections */}
        <div className="w-full grid grid-cols-2 md:flex md:justify-around md:flex-wrap md:gap-6">
          
          {/* Company Info */}
          <div className="flex-1 min-w-[150px] mb-6 md:mb-0">
            <h3 className="text-lg font-semibold mb-3 drop-shadow-lg">Company</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/aboutus" className="hover:underline">About Us</Link></li>
              <li><Link to="/careers" className="hover:underline">Careers</Link></li>
              <li><Link to="/blog" className="hover:underline">Blog</Link></li>
            </ul>
          </div>

          {/* Support */}
          <div className="flex-1 min-w-[150px] mb-6 md:mb-0">
            <h3 className="text-lg font-semibold mb-3 drop-shadow-lg">Support</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/contact" className="hover:underline">Contact Us</Link></li>
              <li><Link to="/faq" className="hover:underline">FAQs</Link></li>
              <li><Link to="/shipping" className="hover:underline">Shipping Info</Link></li>
            </ul>
          </div>

          {/* Account */}
          <div className="flex-1 min-w-[150px] mb-6 md:mb-0">
            <h3 className="text-lg font-semibold mb-3 drop-shadow-lg">Account</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/login" className="hover:underline">Login</Link></li>
              <li><Link to="/register" className="hover:underline">Register</Link></li>
              <li><Link to="/orders" className="hover:underline">My Orders</Link></li>
            </ul>
          </div>

          {/* App Download */}
          <div className="flex-1 min-w-[150px]">
            <h3 className="text-lg font-semibold mb-3 drop-shadow-lg">Download the App</h3>
            <div className="flex flex-col items-center md:items-start gap-3">
              {play && <img src={play} alt="Play Store" className="w-32 cursor-pointer" />}
              {app && <img src={app} alt="App Store" className="w-32 cursor-pointer" />}
            </div>
          </div>
        </div>
      </div>

      {/* Subscription Section */}
      <div className="max-w-3xl mx-auto mt-10 text-center z-10 relative px-4">
        <h3 className="text-lg font-semibold mb-2 drop-shadow-lg">Subscribe & Get 10% Off</h3>
        <p className="text-sm mb-4 drop-shadow">Enter your email to receive a 10% discount on your first order.</p>
        <form className="flex flex-col sm:flex-row justify-center items-center gap-3">
          <input
            type="email"
            placeholder="Enter your email"
            className="px-4 py-2 rounded-md text-black w-full sm:w-2/3"
          />
          <button
            type="submit"
            className="bg-lime-500 hover:bg-lime-600 text-black font-semibold px-5 py-2 rounded-md shadow-md transition"
          >
            Subscribe
          </button>
        </form>
      </div>

      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-r from-green-700 to-lime-400 opacity-20 blur-3xl pointer-events-none"></div>

      {/* Bottom Text */}
      <div className="text-center text-sm mt-10 relative z-10">
        © 2025 PrimePick. All rights reserved.
      </div>
    </footer>
  );
}
