import React, { useState } from 'react';
import Hub from '../../Asset/Hub.png';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faHeart, faCartShopping, faBars, faTimes } from "@fortawesome/free-solid-svg-icons";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [showSearch, setShowSearch] = useState(false);

  return (
    <div>
      {/* Top banner */}
      <div className="bg-black w-full h-10 text-white text-center flex items-center justify-center">
        <h1 className="text-xs md:text-sm font-extralight">
          Summer Sales For All Swim Suits And Free Express Delivery - OFF 50%! <span className="underline cursor-pointer">ShopNow</span>
        </h1>
      </div>

      {/* Navigation */}
      <nav className="bg-white w-full h-20 shadow-xl p-3 flex justify-between items-center md:px-8 relative">
        <img className="w-40" src={Hub} alt="Hub Logo" />

        {/* Navigation Links */}
        <div
          className={`absolute md:static top-full left-0 w-full md:w-auto bg-white transition-all duration-300 z-20 ${
            menuOpen ? 'block' : 'hidden md:block'
          }`}
        >
          <ul className="flex flex-col md:flex-row gap-4 md:gap-5 p-4 md:p-0">
            <li><a className="no-underline hover:underline" href="/">Home</a></li>
            <li><a className="no-underline hover:underline" href="/Contact">Contact</a></li>
            <li><a className="no-underline hover:underline" href="Aboutus">About</a></li>
            <li><a className="no-underline hover:underline" href="/CreateAcc">Sign Up</a></li>
          </ul>
        </div>

        {/* Right Side Icons */}
        <div className="flex items-center gap-3">
          {/* Search Bar: Visible only on larger screens or when toggled */}
          {(showSearch || window.innerWidth >= 768) && (
            <input
              type="search"
              placeholder="What are you looking?"
              className="w-full md:w-48 h-8 px-3 bg-slate-100 outline-none rounded"
            />
          )}

          <div className="flex items-center space-x-4">
            {/* Search Icon (toggles input on small screens) */}
            <FontAwesomeIcon
              icon={faSearch}
              className="text-gray-600 cursor-pointer"
              onClick={() => {
                if (window.innerWidth < 768) setShowSearch(!showSearch);
              }}
            />

            <FontAwesomeIcon icon={faHeart} className="text-red-500 cursor-pointer" />
            <a href="/cart"><FontAwesomeIcon icon={faCartShopping} className="text-blue-500 cursor-pointer" /></a>

            {/* Hamburger Icon */}
            <button className="md:hidden" onClick={() => setMenuOpen(!menuOpen)}>
              <FontAwesomeIcon icon={menuOpen ? faTimes : faBars} className="text-xl" />
            </button>
          </div>
        </div>
      </nav>
    </div>
  );
}
