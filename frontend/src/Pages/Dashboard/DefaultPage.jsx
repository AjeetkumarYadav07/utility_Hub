
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaFilePdf, FaTextHeight, FaUsers, FaLink, FaQrcode, FaKey, FaFileWord,  FaBirthdayCake,  FaRobot } from "react-icons/fa";

const DefaultPage = () => {
  const navigate = useNavigate();
  const [activeFilter, setActiveFilter] = useState("All");

  const tools = [
    {
      title: "Word to PDF",
      desc: "Convert Word documents to PDF instantly",
      category: "PDF Tools",
      icon: <FaFilePdf size={28} />,
      path: "/user-dashboard/word_to_pdf",
    },
    {
      title: "Random User Generator",
      desc: "Transform text into any case formatProvides fake realistic user profiles (name, email, address, photos, etc.) for demos/testing",
      category: "Ai+ Tools",
      icon: <FaUsers size={28} />,
      path: "/user-dashboard/random_users_Generator",
    },
    {
      title: "Text Case Converter",
      desc: "Transform text into any case format",
      category: "Text Tools",
      icon: <FaTextHeight size={28} />,
      path: "/user-dashboard/text_convert",
    },
    {
      title: "QR Generator",
      desc: "Generate custom QR codes easily",
      category: "Utility Tools",
      icon: <FaQrcode size={28} />,
      path: "/user-dashboard/qr_generator",
    },
    {
      title: "URL Shortener",
      desc: "Shorten long URLs quickly",
      category: "Utility Tools",
      icon: <FaLink size={28} />,
      path: "/user-dashboard/url_shortener",
    },
    {
      title: "Age Calculater",
      desc: "Calculate your Age in  Years Days , or mintuee ",
      category: "Utility Tools",
      icon: < FaBirthdayCake size={28} />,
      path: "/user-dashboard/age_Calculator",
    },
   
    {
      title: "Password Generator",
      desc: "Create secure random passwords",
      category: "Utility Tools",
      icon: <FaKey size={28} />,
      path: "/user-dashboard/passwordGenerator",
    },
    {
      title: "PDF to Word",
      desc: "Convert PDF to Word Document instantly",
      category: "PDF Tools",
      icon: <FaFileWord size={28} />,
      path: "/user-dashboard/pdf_to_word",
    },
    {
      title: "AI PDF Summary",
      desc: "Summarize PDF using AI",
      category: "Ai+ Tools",
      icon: <FaRobot size={28} />,
      path: "/aiPdfSummary",
    },
  ];

  const filters = ["All", "PDF Tools", "Text Tools", "Utility Tools", "Ai+ Tools"];

  const filteredTools =
    activeFilter === "All"
      ? tools
      : tools.filter((tool) => tool.category === activeFilter);

  return (
    <section className="w-full px-6 py-10 bg-gray-50 min-h-screen">
      <div className="max-w-6xl mx-auto">

        {/* Heading */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-800">
            What We Do
          </h1>
          <p className="text-gray-500 mt-2">
            Powerful online tools designed to boost your productivity.
          </p>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap gap-3 mb-10">
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition
                ${
                  activeFilter === filter
                    ? "bg-[#7C3AED] text-white shadow-md"
                    : "bg-white border border-gray-300 hover:bg-purple-100"
                }`}
            >
              {filter}
            </button>
          ))}
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {filteredTools.map((tool, index) => (
            <div
              key={index}
              onClick={() => navigate(tool.path)}
              className="bg-white rounded-xl p-6 shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300 cursor-pointer group"
            >
              {/* Icon */}
              <div className="w-14 h-14 flex items-center justify-center rounded-lg bg-purple-100 text-[#7C3AED] mb-4 group-hover:bg-[#7C3AED] group-hover:text-white transition">
                {tool.icon}
              </div>

              {/* Title */}
              <h2 className="text-lg font-semibold text-gray-800 mb-2">
                {tool.title}
              </h2>

              {/* Description */}
              <p className="text-gray-500 text-sm">
                {tool.desc}
              </p>

              {/* Category Tag */}
              <div className="mt-4">
                <span className="text-xs px-3 py-1 bg-purple-50 text-[#7C3AED] rounded-full">
                  {tool.category}
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default DefaultPage;