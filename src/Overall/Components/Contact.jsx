import React from 'react';
import { PhoneIcon, EnvelopeIcon } from '@heroicons/react/24/outline';
import { motion } from 'framer-motion';

export default function Contact() {
  return (
    <div className=" bg-gradient-to-br from-white via-blue-50 to-blue-100 px-6 py-16">
      <h2 className="text-4xl md:text-5xl font-extrabold text-center text-transparent bg-clip-text bg-gradient-to-r from-blue-700 to-blue-400 mb-16">
        Let's Connect
      </h2>

      <div className="flex flex-col md:flex-row gap-12 max-w-6xl mx-auto">
        {/* Contact Info Card */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex-1 bg-white/40 backdrop-blur-lg rounded-3xl shadow-xl p-10 space-y-10 border border-white/30"
        >
          <div className="flex items-start gap-4">
            <PhoneIcon className="w-8 h-8 text-blue-700 mt-1" />
            <div>
              <h3 className="font-bold text-xl text-gray-800">Call Us</h3>
              <p className="text-sm text-gray-600">We’re available 24/7.</p>
              <p className="text-base font-medium mt-2 text-blue-900">+91 73580 39616</p>
            </div>
          </div>

          <div className="h-px bg-gradient-to-r from-blue-400 to-black" />

          <div className="flex items-start gap-4">
            <EnvelopeIcon className="w-8 h-8 text-blue-700 mt-1" />
            <div>
              <h3 className="font-bold text-xl text-gray-800">Email Us</h3>
              <p className="text-sm text-gray-600">We reply within 24 hours.</p>
              <p className="text-base font-medium mt-2 text-blue-900">customer@exclusive.com</p>
              <p className="text-base font-medium text-blue-900">preloggowri@gmail.com</p>
            </div>
          </div>
        </motion.div>

        {/* Contact Form */}
        <motion.form
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex-1 bg-white/40 backdrop-blur-lg rounded-3xl shadow-xl p-10 space-y-6 border border-white/30"
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {['Your Name *', 'Your Email *', 'Your Phone *'].map((placeholder, index) => (
              <div key={index} className="relative">
                <input
                  type={placeholder.includes("Email") ? "email" : placeholder.includes("Phone") ? "tel" : "text"}
                  required
                  className="peer w-full border border-gray-300 bg-white/70 backdrop-blur-md px-4 py-3 pt-5 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-sm placeholder-transparent"
                  placeholder={placeholder}
                />
                <label className="absolute left-4 top-3 text-sm text-gray-500 peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 transition-all duration-200">
                  {placeholder}
                </label>
              </div>
            ))}
          </div>

          <div className="relative">
            <textarea
              required
              placeholder="Your Message"
              className="peer w-full h-32 border border-gray-300 bg-white/70 backdrop-blur-md px-4 py-3 pt-5 rounded-md resize-none focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-sm placeholder-transparent"
            />
            <label className="absolute left-4 top-3 text-sm text-gray-500 peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 transition-all duration-200">
              Your Message
            </label>
          </div>

          <button
            type="submit"
            className="relative w-full md:w-auto px-6 py-3 rounded-md text-white font-semibold bg-gradient-to-r from-blue-700 to-black hover:from-blue-800 hover:to-gray-900 transition-all duration-300 shadow-md overflow-hidden group"
          >
            <span className="absolute inset-0 bg-gradient-to-r from-blue-300 to-purple-400 opacity-0 group-hover:opacity-10 transition duration-300" />
            Send Message
          </button>
        </motion.form>
      </div>
    </div>
  );
}
