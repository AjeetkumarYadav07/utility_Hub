

import React from "react";
import { Link } from "react-router-dom";

const PageNotFound = () => {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center bg-[#E7FFFF] text-center px-6">

      {/* 404 Number */}
      <h1
        className="text-[120px] md:text-[150px] font-bold text-[#008B62]"
        style={{
          textShadow: `
            1px 1px 1px #00593E,
            2px 2px 1px #00593E,
            3px 3px 1px #00593E,
            4px 4px 1px #00593E,
            5px 5px 1px #00593E,
            6px 6px 1px #00593E,
            7px 7px 1px #00593E,
            8px 8px 1px #00593E,
            25px 25px 8px rgba(0,0,0,0.2)
          `,
        }}
      >
        404
      </h1>

      {/* Message */}
      <p className="mt-6 text-lg md:text-xl font-semibold text-gray-700">
        Ooops!!! The page you are looking for is not found
      </p>

      {/* Back Button */}
      <Link
        to="/"
        className="mt-8 inline-block bg-purple-500 text-white font-semibold uppercase tracking-wide px-6 py-3 rounded-md shadow-lg  transition duration-200"
      >
        Back to Home
      </Link>
    </section>
  );
};

export default PageNotFound;