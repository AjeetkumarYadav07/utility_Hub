import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Hero = () => {
  const navigate  = useNavigate();

     function getStart (){
        const token  = localStorage.getItem("token")
        navigate(token ? "/user-dashboard" : "/login")
     }

  return (
    <section id="about" className="w-full bg-purple-100  ">
      <div className="max-w-[1220px] mx-auto px-5">

        {/* Grid Container */}
        <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-10 pt-20 md:pt-30 pb-20">

          {/* ================= TEXT SECTION ================= */}
          <div className="space-y-6 text-center md:text-left">
            
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-lato font-bold leading-tight">
              All Your Essential Tools. One Simple Platform
            </h1>
            
            <p className="text-gray-700 font-inter text-sm sm:text-lg md:text-xl max-w-xl mx-auto md:mx-0">
              Convert, compress, and transform files instantly — from Image to
              PDF, Word to PDF, Excel tools, text formatting, and more.
              No installs. No confusion. Just fast results.
            </p>

            {/* CTA Buttons */}
            <div className="flex   sm:flex-row gap-4 justify-center md:justify-start pt-4">
              <button 
              onClick={getStart  }
               className="px-6 py-3 font-semibold bg-purple-500 cursor-pointer  text-white rounded-md hover:bg-purple-600 transition">
                Get Started
              </button>

              <button className="px-6 py-3 font-semibold border border-purple-500 text-purple-600 rounded-md hover:bg-purple-200 transition">
                Learn More
              </button>
            </div>

          </div>

          {/* ================= IMAGE SECTION ================= */}
          <div className="flex justify-center md:justify-end">
            <img
              src="../../assets/HomePage/hero_section_img.png"
              alt="hero_section_img"
              className="w-full max-w-md md:max-w-lg lg:max-w-xl rounded-xl object-contain"
            />
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
