

import React, { useState } from "react";
import axios from "axios";

const Url_Shortener = () => {
  const [url, setUrl] = useState("");
  const [shortUrl, setShortUrl] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleGenerate = async () => {
    if (!url) {
      setError("Please enter a URL");
      return;
    }

    try {
      setLoading(true);
      setError("");
      setShortUrl("");

      const response = await axios.post(
        "http://localhost:5000/url/create",
        {
          originalUrl: url,
        }
      );

      setShortUrl(response.data.data.shortUrl);

    } catch (err) {
      setError(
        err.response?.data?.message || "Something went wrong"
      );
    } finally {
      setLoading(false);
    }
  };

  const handleCopy = () => {
    if (!shortUrl) return;
    navigator.clipboard.writeText(shortUrl);
    alert("Copied to clipboard!");
  };

  return (
    <section className=" mt-10 flex items-center justify-center bg-gray-100 px-4">
      <div className="bg-white shadow-lg rounded-xl p-8 w-full max-w-lg">
        
        <h1 className="text-xl sm:text-2xl md:text-4xl  font-semibold text-center mb-2">
          Welcome to URL Shortener
        </h1>

        <p className="text-center text-xs sm:text-lg    text-gray-500 mb-6">
          Paste your long URL below and generate a short one instantly.
        </p>

        {/* Input Section */}
        <div className="space-y-4">
          <input
            type="text"
            placeholder="Paste your URL here..."
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-300"
          />

          <button
            onClick={handleGenerate}
            disabled={loading}
            className="w-full bg-purple-400 cursor-pointer text-white py-2 font-semibold rounded-lg hover:bg-purple-500 transition disabled:opacity-50"
          >
            {loading ? "Generating..." : "Generate URL"}
          </button>
        </div>

        {/* Error Message */}
        {error && (
          <p className="text-red-500 text-sm mt-4 text-center">
            {error}
          </p>
        )}

        {/* Result Section */}
        {shortUrl && (
          <div className="mt-6 flex items-center justify-between bg-purple-100 p-3 rounded-lg">
            <p className="text-sm text-gray-700 truncate">
              {shortUrl}
            </p>

            <button
              onClick={handleCopy}
              className="ml-3 cursor-pointer text-purple-400 hover:text-purple-500"
            >
             <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M15.24 2h-3.894c-1.764 0-3.162 0-4.255.148c-1.126.152-2.037.472-2.755 1.193c-.719.721-1.038 1.636-1.189 2.766C3 7.205 3 8.608 3 10.379v5.838c0 1.508.92 2.8 2.227 3.342c-.067-.91-.067-2.185-.067-3.247v-5.01c0-1.281 0-2.386.118-3.27c.127-.948.413-1.856 1.147-2.593s1.639-1.024 2.583-1.152c.88-.118 1.98-.118 3.257-.118h3.07c1.276 0 2.374 0 3.255.118A3.6 3.6 0 0 0 15.24 2"/><path fill="currentColor" d="M6.6 11.397c0-2.726 0-4.089.844-4.936c.843-.847 2.2-.847 4.916-.847h2.88c2.715 0 4.073 0 4.917.847S21 8.671 21 11.397v4.82c0 2.726 0 4.089-.843 4.936c-.844.847-2.202.847-4.917.847h-2.88c-2.715 0-4.073 0-4.916-.847c-.844-.847-.844-2.21-.844-4.936z"/></svg>
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default Url_Shortener;