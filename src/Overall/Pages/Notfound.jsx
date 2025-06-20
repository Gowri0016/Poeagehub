import React from 'react';

export default function NotFound() {
  return (
    <div className="flex flex-col md:flex-row items-center justify-center min-h-screen bg-gray-50 px-6 py-12">
      {/* Mascot or Decorative Image */}
      <img
        src="https://images.unsplash.com/photo-1592194996308-7b43878e84a6?auto=format&fit=crop&w=400&q=80"
        alt="Mascot Dog"
        className="w-64 h-64 object-cover rounded-xl shadow-lg mb-8 md:mb-0 md:mr-12"
      />

      {/* Text Content */}
      <div className="text-center md:text-left max-w-lg">
        <h1 className="text-5xl font-bold text-gray-800 mb-2">404</h1>
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">Sorry, we couldn't find that page</h2>
        <p className="text-gray-600 mb-6">
          The page you are looking for might be unavailable or may have moved. Let’s help you get back on track.
        </p>
        <a
          href="/"
          className="inline-block bg-yellow-500 text-gray-900 font-bold px-6 py-3 rounded-full shadow hover:bg-yellow-600 transition duration-300"
        >
          Go to Homepage
        </a>
      </div>
    </div>
  );
}
