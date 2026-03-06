import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const token = localStorage.getItem("token");

  const handleNavigate = (path) => {
    navigate(path);
    setIsOpen(false); // close mobile menu after click
  };

  return (
    <header className="w-full bg-white text-black sticky top-0 z-50 shadow-md transition-all duration-300">
      <div className="max-w-[1220px] mx-auto px-5">
        <div className="flex items-center justify-between">

          {/* Logo */}
          <img
            src="../../assets/HomePage/utility_hub_logo.png"
            className="w-15 md:w-20 object-contain cursor-pointer"
            alt="utility_hub_logo"
            onClick={() => handleNavigate("/")}
          />

          {/* Desktop Menu */}
          <ul className="hidden md:flex gap-8 font-medium">
            <li
              className="cursor-pointer hover:text-purple-600 transition"
              onClick={() => handleNavigate("/")}
            >
              Home
            </li>

            <li
              className="cursor-pointer hover:text-purple-600 transition"
              onClick={() => handleNavigate("/#about")}
            >
              About
            </li>

            <li
              className="cursor-pointer hover:text-purple-600 transition"
              onClick={() => handleNavigate("/#footer")}
            >
              Contact
            </li>
          </ul>

          {/* Desktop Buttons */}
          <div className="hidden md:flex items-center gap-4">
            {token ? (
              <button
                onClick={() => handleNavigate("/user-dashboard")}
                className="px-6 py-2 cursor-pointer font-semibold bg-purple-500 text-white rounded-md hover:bg-purple-600 transition"
              >
                Back to Dashboard
              </button>
            ) : (
              <div className="flex gap-4">
                <button
                  onClick={() => handleNavigate("/login")}
                  className="px-6 py-2 cursor-pointer font-semibold bg-purple-500 text-white rounded-md hover:bg-purple-600 transition"
                >
                  Log In
                </button>

                <button
                  onClick={() => handleNavigate("/sign-up")}
                  className="px-6 py-2 cursor-pointer font-semibold border border-purple-500 text-purple-600 rounded-md hover:bg-purple-50 transition"
                >
                  Sign Up
                </button>
              </div>
            )}
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
          <div className="flex flex-col gap-4 mt-2 pb-4">
            <ul className="flex flex-col gap-4 font-medium">
              <li
                className="cursor-pointer"
                onClick={() => handleNavigate("/")}
              >
                Home
              </li>

              <li
                className="cursor-pointer"
                onClick={() => handleNavigate("/#about")}
              >
                About
              </li>

              <li
                className="cursor-pointer"
                onClick={() => handleNavigate("/#footer")}
              >
                Contact
              </li>
            </ul>

            {/* Mobile Buttons */}
            {token ? (
              <button
                onClick={() => handleNavigate("/user-dashboard")}
                className="w-full py-2 bg-purple-500 text-white rounded-md hover:bg-purple-600 transition"
              >
                Back to Dashboard
              </button>
            ) : (
              <div className="flex flex-col gap-3">
                <button
                  onClick={() => handleNavigate("/login")}
                  className="w-full py-2 bg-purple-500 text-white rounded-md hover:bg-purple-600 transition"
                >
                  Log In
                </button>

                <button
                  onClick={() => handleNavigate("/sign-up")}
                  className="w-full py-2 border border-purple-500 text-purple-600 rounded-md hover:bg-purple-50 transition"
                >
                  Sign Up
                </button>
              </div>
            )}
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;