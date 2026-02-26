import React from "react";

const Footer = () => {
  return (
    <footer id="footer" className="w-full bg-purple-100 pt-14">
      <div className="max-w-[1220px] mx-auto px-5">

        {/* ================= TOP SECTION ================= */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 text-center md:text-left">

          {/* Logo + Description */}
          <div className="space-y-4">
            <img
              className="w-20 md:w-30 mx-auto md:mx-0 object-contain"
              src="../../assets/HomePage/utility_hub_logo.png"
              alt="logo_img"
            />

            <p className="font-inter text-gray-700 text-sm md:text-base">
              Save time with lightning-fast utilities designed for students,
              professionals, and businesses. Everything you need — right here.
            </p>
          </div>

          {/* Navigation Links */}
          <div>
            <h3 className="font-lato font-bold text-lg mb-4">Quick Links</h3>
            <ul className="font-lato font-semibold space-y-3 text-gray-800">
              <li className="cursor-pointer hover:text-purple-600 transition">Home</li>
              <li className="cursor-pointer hover:text-purple-600 transition">About</li>
              <li className="cursor-pointer hover:text-purple-600 transition">Service</li>
              <li className="cursor-pointer hover:text-purple-600 transition">Contact</li>
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h3 className="font-lato font-bold text-lg mb-4">Follow Us</h3>
            <ul className="flex justify-center md:justify-start gap-6 text-gray-800">
              <li className="cursor-pointer hover:text-purple-600 transition">
                {/* LinkedIn */}
                <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2zm-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93zM6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37z" />
                </svg>
              </li>

              <li className="cursor-pointer hover:text-purple-600 transition">
                {/* Facebook */}
                <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c5.05-.5 9-4.76 9-9.95" />
                </svg>
              </li>

              <li className="cursor-pointer hover:text-purple-600 transition">
                {/* Instagram */}
                <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M7.8 2h8.4C19.4 2 22 4.6 22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8C4.6 22 2 19.4 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2m-.2 2A3.6 3.6 0 0 0 4 7.6v8.8C4 18.39 5.61 20 7.6 20h8.8a3.6 3.6 0 0 0 3.6-3.6V7.6C20 5.61 18.39 4 16.4 4zm9.65 1.5a1.25 1.25 0 0 1 1.25 1.25A1.25 1.25 0 0 1 17.25 8A1.25 1.25 0 0 1 16 6.75a1.25 1.25 0 0 1 1.25-1.25M12 7a5 5 0 0 1 5 5a5 5 0 0 1-5 5a5 5 0 0 1-5-5a5 5 0 0 1 5-5m0 2a3 3 0 0 0-3 3a3 3 0 0 0 3 3a3 3 0 0 0 3-3a3 3 0 0 0-3-3" />
                </svg>
              </li>
            </ul>
          </div>
        </div>

        {/* ================= DIVIDER ================= */}
        <div className="border-t border-black/20 my-10"></div>

        {/* ================= BOTTOM ================= */}
        <div className="text-center font-inter text-gray-700 pb-6 text-sm">
          Powered By Utility Hub  ©2026
        </div>
      </div>
    </footer>
  );
};

export default Footer;
