import React from 'react';

export default function Aboutus() {
  return (
    <div className="bg-gradient-to-br from-white via-blue-50 to-purple-100 py-20 px-6 lg:px-24">
      <div className="max-w-7xl mx-auto space-y-16">
        {/* Header Section */}
        <div className="text-center">
          <h1 className="text-5xl font-extrabold text-blue-600 mb-4 tracking-tight">
            <span className="text-black">Discover</span> PoeageHub
          </h1>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">
            Your trusted destination for premium, handpicked products — crafted for modern living, smart homes, and eco-conscious lifestyles.
          </p>
        </div>

        {/* Trusted Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          <div>
            <h2 className="text-3xl font-bold text-blue-600">50K+</h2>
            <p className="text-sm text-gray-600">Happy Customers</p>
          </div>
          <div>
            <h2 className="text-3xl font-bold text-blue-600">120+</h2>
            <p className="text-sm text-gray-600">Unique Products</p>
          </div>
          <div>
            <h2 className="text-3xl font-bold text-blue-600">4.8★</h2>
            <p className="text-sm text-gray-600">Average Rating</p>
          </div>
          <div>
            <h2 className="text-3xl font-bold text-blue-600">24/7</h2>
            <p className="text-sm text-gray-600">Support & Delivery</p>
          </div>
        </div>

        {/* Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {[
            {
              title: 'TechSmart Gadgets',
              desc: 'Latest innovation in personal and home tech. Built for utility, styled for elegance.',
            },
            {
              title: 'EcoBlend Essentials',
              desc: 'Sustainable, reusable, and responsibly made. Perfect for eco-conscious shoppers.',
            },
            {
              title: 'Lifestyle Enhancers',
              desc: 'Create mood and comfort with smart lighting, ergonomic accessories, and more.',
            },
          ].map((item, idx) => (
            <div key={idx} className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition">
              <h3 className="text-xl font-semibold text-blue-800 mb-2">{item.title}</h3>
              <p className="text-gray-600 text-sm">{item.desc}</p>
            </div>
          ))}
        </div>

        {/* Banner CTA */}
        <div className="bg-gradient-to-r from-blue-500 to-black text-white p-10 rounded-2xl flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h2 className="text-3xl font-bold mb-2">Experience Shopping Like Never Before</h2>
            <p className="text-sm opacity-90">Browse curated collections and limited editions, with fast delivery & dedicated support.</p>
          </div>
          <a
            href="/products"
            className="bg-white text-blue-700 px-6 py-3 rounded-full font-semibold shadow-md hover:shadow-lg hover:bg-gray-100 transition"
          >
            Visit Store
          </a>
        </div>
      </div>
    </div>
  );
}
