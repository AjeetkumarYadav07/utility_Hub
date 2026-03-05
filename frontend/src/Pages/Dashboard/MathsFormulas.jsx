// import React, { useState } from "react";

// const MathsFormulas = () => {
//   const [query, setQuery] = useState("");
//   const [result, setResult] = useState(null);
//   const [loading, setLoading] = useState(false);

//   const suggestions = [
//     "Area of Circle",
//     "Area of Triangle",
//     "Pythagorean Theorem",
//     "Simple Interest Formula",
//     "Quadratic Formula"
//   ];

//   const handleGenerate = async (customQuery) => {
//     const finalQuery = customQuery || query;
//     if (!finalQuery.trim()) return;

//     setLoading(true);
//     setResult(null);

//     // TEMP MOCK — replace with Gemini API later
//     setTimeout(() => {
//       setResult({
//         formula: "A = πr²",
//         explanation:
//           "The area of a circle is calculated by multiplying pi (π) with the square of its radius.",
//         example:
//           "If r = 5 cm → A = 3.14 × 25 = 78.5 cm²"
//       });
//       setLoading(false);
//     }, 1200);
//   };

//   const handleSuggestionClick = (text) => {
//     setQuery(text);
//     handleGenerate(text);
//   };

//   const copyToClipboard = () => {
//     if (result?.formula) {
//       navigator.clipboard.writeText(result.formula);
//     }
//   };

//   return (
//     <section className="mt-10 bg-white py-12 px-4">
//       <div className="max-w-3xl mx-auto">

//         <div className="bg-gradient-to-br from-purple-300 to-purple-700 p-[2px] rounded-2xl shadow-lg">
//           <div className="bg-white rounded-2xl p-8">

//             <h2 className="text-2xl font-bold text-gray-800 mb-6">
//               AI Formula Generator
//             </h2>

//             <p className="text-gray-600 mb-4">
//               Enter the formula you want to know
//             </p>

//             {/* Input */}
//             <div className="flex gap-3 mb-6">
//               <input
//                 type="text"
//                 placeholder="e.g. area of circle"
//                 maxLength={40}
//                 value={query}
//                 onChange={(e) => setQuery(e.target.value)}
//                 onKeyDown={(e) => e.key === "Enter" && handleGenerate()}
//                 className="flex-1 border border-purple-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
//               />

//               <button
//                 onClick={() => handleGenerate()}
//                 disabled={loading}
//                 className={`px-6 py-2 rounded-lg font-medium text-white transition
//                   ${loading
//                     ? "bg-purple-400 cursor-not-allowed"
//                     : "bg-gradient-to-r from-purple-500 to-purple-700 hover:opacity-90"
//                   }`}
//               >
//                 {loading ? "Generating..." : "Generate"}
//               </button>
//             </div>

//             {/* Suggestions */}
//             <div className="mb-6">
//               <p className="text-sm text-gray-500 mb-2">Popular formulas:</p>
//               <div className="flex flex-wrap gap-3">
//                 {suggestions.map((item, index) => (
//                   <button
//                     key={index}
//                     onClick={() => handleSuggestionClick(item)}
//                     className="bg-purple-100 text-purple-700 px-3 py-1 rounded-full text-sm hover:bg-purple-200 transition"
//                   >
//                     {item}
//                   </button>
//                 ))}
//               </div>
//             </div>

//             {/* Response */}
//             {result && (
//               <div className="mt-6 border-t pt-6">

//                 <div className="flex justify-between items-center mb-2">
//                   <h3 className="text-lg font-semibold text-purple-700">
//                     Formula
//                   </h3>

//                   <button
//                     onClick={copyToClipboard}
//                     className="text-sm text-purple-600 hover:underline"
//                   >
//                     Copy
//                   </button>
//                 </div>

//                 <p className="text-xl font-mono mb-4">
//                   {result.formula}
//                 </p>

//                 <h3 className="text-lg font-semibold text-purple-700 mb-2">
//                   Explanation
//                 </h3>
//                 <p className="text-gray-700 mb-4">
//                   {result.explanation}
//                 </p>

//                 <h3 className="text-lg font-semibold text-purple-700 mb-2">
//                   Example
//                 </h3>
//                 <p className="text-gray-700">
//                   {result.example}
//                 </p>
//               </div>
//             )}

//           </div>
//         </div>

//       </div>
//     </section>
//   );
// };

// export default MathsFormulas;
import React, { useState } from "react";
import axios from "axios";

const MathsFormulas = () => {
  const [query, setQuery] = useState("");
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const suggestions = [
    "Area of Circle",
    "Area of Triangle",
    "Pythagorean Theorem",
    "Simple Interest Formula",
    "Quadratic Formula"
  ];

  // Helper to parse AI text into structured object
  const parseAIResponse = (text) => {
    if (!text) return null;

    const formula = text.match(/Formula:\s*(.*)/i)?.[1] || "";
    const explanation = text.match(/Explanation:\s*(.*)/i)?.[1] || "";
    const example = text.match(/Example:\s*(.*)/i)?.[1] || "";

    return { formula, explanation, example };
  };

  // Generate formula from API
  const handleGenerate = async (customQuery) => {
    const finalQuery = customQuery || query;
    if (!finalQuery.trim()) {
      setError("Please enter a formula name.");
      return;
    }

    setLoading(true);
    setResult(null);
    setError(null);

    try {
      const response = await axios.post(
        "http://localhost:5000/services/formula-generator",
        { query: finalQuery }
      );

      if (response.data?.success) {
        const parsed = parseAIResponse(response.data.data);
        if (parsed) {
          setResult(parsed);
        } else {
          setError("Failed to parse formula response.");
        }
      } else {
        setError(response.data?.message || "Something went wrong.");
      }
    } catch (err) {
      console.error("API Error:", err);
      const message =
        err.response?.data?.message || "Server error. Please try again.";
      setError(message);
    } finally {
      setLoading(false);
    }
  };

  const handleSuggestionClick = (text) => {
    setQuery(text);
    handleGenerate(text);
  };

  const copyToClipboard = () => {
    if (result?.formula) {
      navigator.clipboard.writeText(result.formula);
      alert("Formula copied!");
    }
  };

  return (
    <section className="mt-10 bg-white py-12 px-4">
      <div className="max-w-3xl mx-auto">
        <div className="bg-gradient-to-br from-purple-300 to-purple-700 p-[2px] rounded-2xl shadow-lg">
          <div className="bg-white rounded-2xl p-8">

            <h2 className="text-2xl font-bold text-gray-800 mb-6">
              AI Formula Generator
            </h2>

            <p className="text-gray-600 mb-4">
              Enter the formula you want to know
            </p>

            {/* Input */}
            <div className="flex gap-3 mb-6">
              <input
                type="text"
                placeholder="e.g. area of circle"
                maxLength={40}
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && handleGenerate()}
                className="flex-1 border border-purple-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
              />

              <button
                onClick={() => handleGenerate()}
                disabled={loading}
                className={`px-6 py-2 rounded-lg font-medium text-white transition
                  ${loading
                    ? "bg-purple-400 cursor-not-allowed"
                    : "bg-gradient-to-r from-purple-500 to-purple-700 hover:opacity-90"
                  }`}
              >
                {loading ? "Generating..." : "Generate"}
              </button>
            </div>

            {/* Suggestions */}
            <div className="mb-6">
              <p className="text-sm text-gray-500 mb-2">Popular formulas:</p>
              <div className="flex flex-wrap gap-3">
                {suggestions.map((item, index) => (
                  <button
                    key={index}
                    onClick={() => handleSuggestionClick(item)}
                    className="bg-purple-100 text-purple-700 px-3 py-1 rounded-full text-sm hover:bg-purple-200 transition"
                  >
                    {item}
                  </button>
                ))}
              </div>
            </div>

            {/* Error */}
            {error && (
              <p className="text-red-500 mb-4">{error}</p>
            )}

            {/* Response */}
            {result && (
              <div className="mt-6 border-t pt-6">

                <div className="flex justify-between items-center mb-2">
                  <h3 className="text-lg font-semibold text-purple-700">
                    Formula
                  </h3>

                  <button
                    onClick={copyToClipboard}
                    className="text-sm text-purple-600 hover:underline"
                  >
                    Copy
                  </button>
                </div>

                <p className="text-xl font-mono mb-4">{result.formula}</p>

                {result.explanation && (
                  <>
                    <h3 className="text-lg font-semibold text-purple-700 mb-2">
                      Explanation
                    </h3>
                    <p className="text-gray-700 mb-4">{result.explanation}</p>
                  </>
                )}

                {result.example && (
                  <>
                    <h3 className="text-lg font-semibold text-purple-700 mb-2">
                      Example
                    </h3>
                    <p className="text-gray-700">{result.example}</p>
                  </>
                )}

              </div>
            )}

          </div>
        </div>
      </div>
    </section>
  );
};

export default MathsFormulas;