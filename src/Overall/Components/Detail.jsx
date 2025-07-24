import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Sparkles, Clock, Phone, Laptop, Shirt, Tv } from 'lucide-react';
import Addproduct from '../Pages/Addproduct';
import img1 from '../../Dassboard/Dasbord.png';
import banner from '../../Asset/online-shop.png';
import { motion } from 'framer-motion';

const slides = [
  {
    image: img1,
    title: 'Apple',
    desc: 'iPhone 16 Pro Max – Experience innovation like never before',
    tag: 'AI Pick',
  },
  {
    image: banner,
    title: 'Deals of the Day',
    desc: 'Save big on electronics and more. Limited time only!',
    tag: 'Hot Deal',
  },
];

const categories = [
  { title: 'Mobiles', Icon: Phone },
  { title: 'Laptops', Icon: Laptop },
  { title: 'Fashion', Icon: Shirt },
  { title: 'Electronics', Icon: Tv },
];

export default function HomePage() {
  const [current, setCurrent] = useState(0);
  const [autoSlide, setAutoSlide] = useState(true);

  const prevSlide = () => setCurrent((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  const nextSlide = () => setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));

  useEffect(() => {
    if (autoSlide) {
      const interval = setInterval(nextSlide, 4000);
      return () => clearInterval(interval);
    }
  }, [autoSlide]);

  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-blue-50 to-indigo-100 px-4 py-8">
      {/* Hero Carousel */}
      <div className="mb-10 relative w-full h-[240px] sm:h-[320px] lg:h-[440px] overflow-hidden rounded-xl shadow-lg"
        onMouseEnter={() => setAutoSlide(false)}
        onMouseLeave={() => setAutoSlide(true)}
      >
        <div
          className="flex transition-transform duration-1000 ease-in-out"
          style={{ transform: `translateX(-${current * 100}%)`, width: `${slides.length * 100}%` }}
        >
          {slides.map((slide, idx) => (
            <div key={idx} className="w-full h-full flex-shrink-0 relative">
              <img
                src={slide.image}
                alt={slide.title}
                className="w-full h-full object-cover object-center"
              />
              <div className="absolute top-4 left-4 bg-yellow-400 text-xs font-semibold px-2 py-1 rounded-full shadow">
                {slide.tag}
              </div>
              <div className="absolute bottom-4 left-4 bg-white/90 px-4 py-2 rounded-md shadow text-sm">
                <h2 className="font-semibold text-gray-900">{slide.title}</h2>
                <p className="text-xs text-gray-700">{slide.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Arrows */}
        <button
          onClick={prevSlide}
          className="absolute top-1/2 left-2 -translate-y-1/2 z-10 bg-white p-2 rounded-full shadow hover:bg-gray-100"
        >
          <ChevronLeft className="w-5 h-5 text-gray-700" />
        </button>
        <button
          onClick={nextSlide}
          className="absolute top-1/2 right-2 -translate-y-1/2 z-10 bg-white p-2 rounded-full shadow hover:bg-gray-100"
        >
          <ChevronRight className="w-5 h-5 text-gray-700" />
        </button>
      </div>

      {/* Categories */}
      <div className="px-2 md:px-6 mt-10">
        <h2 className="text-3xl font-bold text-indigo-700 mb-6">Shop by Category</h2>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-5">
          {categories.map(({ title, Icon }, index) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white border border-indigo-100 rounded-xl p-4 flex flex-col items-center hover:shadow-lg transition"
            >
              <Icon className="w-10 h-10 text-indigo-600 mb-2" />
              <span className="font-semibold text-gray-800">{title}</span>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Smart Picks Section */}
      <div className="mt-16 px-2 md:px-6">
        <div className="flex items-center gap-2 mb-4">
          <Sparkles className="text-indigo-600 w-5 h-5" />
          <h2 className="text-xl font-bold text-gray-800">Smart AI Recommendations</h2>
        </div>
        <div className="bg-white rounded-xl shadow p-4">
          <Addproduct />
        </div>
      </div>
    </div>
  );
}
