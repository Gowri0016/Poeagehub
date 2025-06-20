import React, { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import img1 from '../../Dassboard/Dasbord.png';
import Addproduct from '../Pages/Addproduct';

const slides = [
  { image: img1, title: 'Apple', desc: 'iPhone 16 Pro Max - Experience innovation' },
];

export default function Detail() {
  const [current, setCurrent] = useState(0);
  const [autoSlide, setAutoSlide] = useState(true);
  const carouselRef = useRef(null);

  const prevSlide = () => setCurrent((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  const nextSlide = () => setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));

  useEffect(() => {
    if (autoSlide) {
      const interval = setInterval(nextSlide, 4000);
      return () => clearInterval(interval);
    }
  }, [autoSlide]);

  return (
    <div className="min-h-screen px-6 py-10 bg-gradient-to-br from-white via-blue-50 to-indigo-100">
      {/* Top Section */}
      <div className="flex flex-col md:flex-row gap-8">
        {/* Image Slider */}
        <div
          className="relative w-full md:w-3/4 h-[220px] sm:h-[300px] md:h-[420px] rounded-3xl overflow-hidden shadow-2xl bg-gradient-to-br from-indigo-100 via-white to-blue-200"
          onMouseEnter={() => setAutoSlide(false)}
          onMouseLeave={() => setAutoSlide(true)}
        >
          <div
            className="flex transition-transform duration-1000 ease-in-out"
            style={{ transform: `translateX(-${current * 100}%)`, width: `${slides.length * 100}%` }}
          >
            {slides.map((slide, index) => (
              <div
                key={index}
                className={`relative w-full h-full flex-shrink-0 flex items-center justify-center transition-transform duration-500 ${
                  index === current ? 'scale-100' : 'scale-95 opacity-70'
                }`}
              >
                <img
                  src={slide.image}
                  alt={slide.title}
                  className="w-full h-full object-cover rounded-3xl"
                />
                <div className="absolute inset-0 bg-white/10 backdrop-blur-lg rounded-3xl flex flex-col items-center justify-center text-white p-6">
                  <h2 className="text-3xl sm:text-4xl font-bold drop-shadow-lg">{slide.title}</h2>
                  <p className="text-sm sm:text-base mt-2 text-center drop-shadow-md">{slide.desc}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Controls */}
          <button
            className="absolute top-1/2 left-3 transform -translate-y-1/2 z-10 bg-white/70 hover:bg-white text-gray-700 p-2 rounded-full shadow-lg transition-all"
            onClick={prevSlide}
          >
            <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
          </button>
          <button
            className="absolute top-1/2 right-3 transform -translate-y-1/2 z-10 bg-white/70 hover:bg-white text-gray-700 p-2 rounded-full shadow-lg transition-all"
            onClick={nextSlide}
          >
            <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
          </button>

          {/* Pagination Dots */}
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2">
            {slides.map((_, idx) => (
              <span
                key={idx}
                className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                  current === idx ? 'bg-indigo-600 scale-125' : 'bg-gray-300'
                }`}
              ></span>
            ))}
          </div>
        </div>

        {/* Sidebar Categories */}
        <div className="relative w-full md:w-1/4 bg-white/80 backdrop-blur-md rounded-xl shadow-md p-4">
          <h3 className="text-lg sm:text-xl font-semibold mb-3 text-gray-800">Categories</h3>
          <ul
            ref={carouselRef}
            className="flex md:flex-col flex-wrap gap-2 md:space-y-2 overflow-x-auto scrollbar-hidden md:overflow-y-auto w-full md:h-[400px]"
          >
            {[
              "Women's Fashion", "Men's Fashion", 'Electronics', 'Home & Lifestyle',
              'Machinery', 'Sports & Outdoors', 'Baby & Toys',
              'Groceries & Pet Supplies', 'Health & Beauty',
            ].map((item, index) => (
              <li
                key={index}
                className="flex-shrink-0 text-xs sm:text-sm md:text-base px-3 py-2 rounded-lg hover:bg-blue-100 hover:text-blue-700 transition-all cursor-pointer"
              >
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Product Section */}
      <div className="mt-14">
        <Addproduct />
      </div>
    </div>
  );
}
