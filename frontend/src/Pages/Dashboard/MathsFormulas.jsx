// import React, { useState } from 'react'

// const MathsFormulas = () => {
//   const [query, setQuery] = useState("")
//   const [result, setResult] = useState(null)
//   const [loading, setLoading] = useState(false)

//   const handleGenerate = () => {
//     if (!query.trim()) return
//     setLoading(true)

//     // later replace with API call
//     setTimeout(() => {
//       setResult({
//         formula: "A = πr²",
//         explanation:
//           "The area of a circle is calculated by multiplying pi (π) with the square of its radius.",
//         example:
//           "If radius r = 5 cm → A = 3.14 × 25 = 78.5 cm²"
//       })
//       setLoading(false)
//     }, 1000)
//   }

//   return (
//     <section className="mt-10 bg-white py-12 px-4">
//       <div className="max-w-3xl mx-auto">

//         {/* Card */}
//         <div className="bg-gradient-to-br from-purple-300 to-purple-700 p-[2px] rounded-2xl shadow-lg">
//           <div className="bg-white rounded-2xl p-8">

//             <h2 className="text-2xl font-bold text-gray-800 mb-6">
//               AI Formula Generator
//             </h2>

//             <p className="text-gray-600 mb-4">
//               Enter the formula you want to know
//             </p>

//             {/* Input Area */}
//             <div className="flex gap-3 mb-6">
//               <input
//                 type="text"
//                 placeholder="e.g. area of circle"
//                 value={query}
//                 onChange={(e) => setQuery(e.target.value)}
//                 className="flex-1 border border-purple-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
//               />
//               <button
//                 onClick={handleGenerate}
//                 className="bg-gradient-to-r from-purple-500 to-purple-700 text-white px-6 py-2 rounded-lg font-medium hover:opacity-90 transition"
//               >
//                 Generate
//               </button>
//             </div>

//             {/* Example Suggestions */}
//             <div className="mb-6">
//               <p className="text-sm text-gray-500 mb-2">Popular formulas:</p>
//               <ul className="flex flex-wrap gap-3 text-sm">
//                 <li className="bg-purple-100 text-purple-700 px-3 py-1 rounded-full cursor-pointer">
//                   Area of Triangle
//                 </li>
//                 <li className="bg-purple-100 text-purple-700 px-3 py-1 rounded-full cursor-pointer">
//                   Pythagorean Theorem
//                 </li>
//                 <li className="bg-purple-100 text-purple-700 px-3 py-1 rounded-full cursor-pointer">
//                   Square Formula
//                 </li>
//               </ul>
//             </div>

//             {/* Response Area */}
//             {loading && (
//               <p className="text-purple-600 font-medium">Generating...</p>
//             )}

//             {result && (
//               <div className="mt-6 border-t pt-6">
//                 <h3 className="text-lg font-semibold text-purple-700 mb-2">
//                   Formula
//                 </h3>
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
//   )
// }

// export default MathsFormulas



import React, { useState } from "react";

const MathsFormulas = () => {
  const [query, setQuery] = useState("");
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);

  const suggestions = [
    "Area of Circle",
    "Area of Triangle",
    "Pythagorean Theorem",
    "Simple Interest Formula",
    "Quadratic Formula"
  ];

  const handleGenerate = async (customQuery) => {
    const finalQuery = customQuery || query;
    if (!finalQuery.trim()) return;

    setLoading(true);
    setResult(null);

    // TEMP MOCK — replace with Gemini API later
    setTimeout(() => {
      setResult({
        formula: "A = πr²",
        explanation:
          "The area of a circle is calculated by multiplying pi (π) with the square of its radius.",
        example:
          "If r = 5 cm → A = 3.14 × 25 = 78.5 cm²"
      });
      setLoading(false);
    }, 1200);
  };

  const handleSuggestionClick = (text) => {
    setQuery(text);
    handleGenerate(text);
  };

  const copyToClipboard = () => {
    if (result?.formula) {
      navigator.clipboard.writeText(result.formula);
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

                <p className="text-xl font-mono mb-4">
                  {result.formula}
                </p>

                <h3 className="text-lg font-semibold text-purple-700 mb-2">
                  Explanation
                </h3>
                <p className="text-gray-700 mb-4">
                  {result.explanation}
                </p>

                <h3 className="text-lg font-semibold text-purple-700 mb-2">
                  Example
                </h3>
                <p className="text-gray-700">
                  {result.example}
                </p>
              </div>
            )}

          </div>
        </div>

      </div>
    </section>
  );
};

export default MathsFormulas;