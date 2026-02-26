import React, { useState } from "react";
import { Link } from "react-router-dom";
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="w-full bg-white text-black sticky top-0 z-50 shadow-md transition-all duration-300">
      <div className="max-w-[1220px] mx-auto px-5 ">
        <div className="flex items-center justify-between ">
          
          {/* Logo */}
          <img
            src="../../assets/HomePage/utility_hub_logo.png"
            className="w-15 md:w-20 object-contain"
            alt="utility_hub_logo"
          />

          {/* Desktop Menu */}
          <ul className="hidden md:flex gap-8 font-medium">
            <li className="cursor-pointer hover:text-purple-600 transition">Home</li>
            <a href="#about">  <li  className="cursor-pointer hover:text-purple-600 transition">About</li></a>
            <li className="cursor-pointer hover:text-purple-600 transition">Service</li>
              <a href="#footer"> <li className="cursor-pointer hover:text-purple-600 transition">Contact</li> </a>
          </ul>

          {/* Desktop Buttons */}
          <div className="hidden md:flex gap-4">
            <a href="/login"
             >
             <button className="px-6 py-2 cursor-pointer font-semibold bg-purple-500 text-white rounded-md hover:bg-purple-600 transition">
                 Log In
            </button>
            </a>

            <a href="/sign-up">
           <button className="px-6 py-2 cursor-pointer font-semibold border border-purple-500 text-purple-600 rounded-md hover:bg-purple-50 transition">
               Sign Up
            </button>
            </a>
            
          </div>

          {/* Mobile Hamburger */}
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? "✕" : "☰"}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden flex flex-col gap-4 pb-4">
            <ul className="flex flex-col gap-4 font-medium">
              <li className="cursor-pointer">Home</li>
              <li className="cursor-pointer">About</li>
              <li className="cursor-pointer">Service</li>
              <li className="cursor-pointer">Contact</li>
            </ul>

            <div className="flex flex-col gap-3">
             <a href="/login">
               <button className="w-full py-2 bg-purple-500 text-white rounded-md">
                  Log In
              </button>
             </a>
             
             <a href="/sign-up">
                 <button className="w-full py-2 border border-purple-500 text-purple-600 rounded-md">
                       Sign Up
              </button>
             </a>
            </div>
          </div>


        )}
      </div>
    </header>
  );
};

export default Navbar;
