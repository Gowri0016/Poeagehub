import React, { useState, useEffect } from 'react';
import Hub from '../../Asset/Hub.png';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faHeart, faCartShopping, faBars, faTimes, faRobot } from "@fortawesome/free-solid-svg-icons";

const trendingSuggestions = [
  "iPhone 16 Pro Max",
  "Noise Cancelling Headphones",
  "Smart Watches",
  "Best Summer Deals",
];

const categories = [
  "Electronics", "Smartphones", "Wearables", "Home Appliances",
  "Books", "Fashion", "Fitness", "Gadgets"
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [showSearch, setShowSearch] = useState(false);
  const [query, setQuery] = useState("");
  const [suggestionsVisible, setSuggestionsVisible] = useState(false);

  useEffect(() => {
    setSuggestionsVisible(query.length > 0);
  }, [query]);

  return (
    <div className="relative shadow-xl rounded-b-2xl overflow-hidden bg-white z-50">
      {/* Top AI Banner */}
      <div className="bg-gradient-to-r from-black via-gray-900 to-black w-full h-10 text-white text-center flex items-center justify-center">
        <h1 className="text-xs md:text-sm font-light animate-pulse">
          <span className="text-yellow-400">AI Smart Deal:</span> 50% OFF on all Smart Wearables!
          <span className="underline ml-2 cursor-pointer hover:text-yellow-300 transition">Shop Now</span>
        </h1>
      </div>

      {/* Navigation Bar */}
      <nav className="bg-white h-20 px-4 md:px-10 flex items-center justify-between relative">
        {/* Logo */}
       <a href="/"> <img className="w-36 sm:w-40" src={Hub} alt="Hub Logo" /></a>

        {/* Centered Search */}
        <div className="hidden md:flex justify-center flex-1 relative">
          <div className="relative w-3/4 max-w-lg">
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="🔍 Ask AI to find your product…"
              className="w-full h-10 px-4 pr-10 bg-slate-100 outline-none rounded-full text-sm shadow-inner focus:ring-2 focus:ring-indigo-300 transition-all"
            />
            <FontAwesomeIcon icon={faRobot} className="absolute right-3 top-3 text-indigo-500 text-sm" />
            {suggestionsVisible && (
              <div className="absolute top-12 left-0 w-full bg-white border shadow-lg rounded-md overflow-hidden z-30">
                <ul className="text-sm text-gray-700 py-2">
                  {trendingSuggestions
                    .filter(item => item.toLowerCase().includes(query.toLowerCase()))
                    .map((item, idx) => (
                      <li
                        key={idx}
                        onClick={() => {
                          setQuery(item);
                          setSuggestionsVisible(false);
                        }}
                        className="px-4 py-2 hover:bg-indigo-50 hover:text-indigo-700 cursor-pointer flex justify-between items-center"
                      >
                        {item}
                        <FontAwesomeIcon icon={faRobot} className="text-indigo-400 text-xs" />
                      </li>
                    ))}
                  {trendingSuggestions.filter(i => i.toLowerCase().includes(query.toLowerCase())).length === 0 && (
                    <li className="px-4 py-2 text-gray-400">No matches</li>
                  )}
                </ul>
              </div>
            )}
          </div>
        </div>

        {/* Icons */}
        <div className="flex items-center space-x-4">
          {/* Mobile Search Toggle */}
          <FontAwesomeIcon
            icon={faSearch}
            className="text-gray-600 md:hidden cursor-pointer"
            onClick={() => setShowSearch(!showSearch)}
          />
          <FontAwesomeIcon icon={faHeart} className="text-red-500 cursor-pointer hover:scale-110 transition" />
          <a href="/cart">
            <FontAwesomeIcon icon={faCartShopping} className="text-blue-500 cursor-pointer hover:scale-110 transition" />
          </a>
          {/* Mobile Menu Toggle */}
          <button className="md:hidden" onClick={() => setMenuOpen(!menuOpen)}>
            <FontAwesomeIcon icon={menuOpen ? faTimes : faBars} className="text-xl" />
          </button>
        </div>

   {/* Unique AI Menu Toggle */}
<button
  className="md:hidden relative group"
  onClick={() => setMenuOpen(!menuOpen)}
>
  <div className={`w-11 h-11 rounded-full flex items-center justify-center 
    transition-all duration-300 ease-in-out border-2 border-indigo-300 
    bg-gradient-to-br from-indigo-100 via-white to-indigo-50 shadow-lg 
    ${menuOpen ? 'animate-spin-slow' : 'group-hover:animate-pulse'}`}>
    <FontAwesomeIcon
      icon={menuOpen ? faTimes : faRobot}
      className="text-indigo-600 text-lg transition-transform duration-300"
    />
  </div>
  <span className="absolute -bottom-5 text-xs text-indigo-500 font-semibold w-max left-1/2 -translate-x-1/2">
    {menuOpen ? 'Close' : 'AI Menu'}
  </span>
</button>

      </nav>

      {/* Mobile Search Field */}
      {showSearch && (
        <div className="bg-white px-4 py-3 shadow-inner md:hidden">
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="🔍 AI search..."
            className="w-full h-10 px-4 pr-10 bg-slate-100 outline-none rounded-md text-sm shadow-sm"
          />
        </div>
      )}

  

      {/* AI Category Bar */}
      <div className="backdrop-blur-sm bg-white/60 border-t border-indigo-100 px-6 py-3 flex flex-wrap items-center justify-center gap-4 text-sm font-semibold text-indigo-700 rounded-b-2xl shadow-inner">
        {categories.map((cat, idx) => (
          <span
            key={idx}
            className="cursor-pointer hover:text-indigo-900 hover:underline transition-all px-2 py-1 rounded-md"
          >
            {cat}
          </span>
        ))}
      </div>
    </div>
  );
}
