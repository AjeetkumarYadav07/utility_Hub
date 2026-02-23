import React, { useState } from "react";

const Text_Convert = () => {
  const [text, setText] = useState("");
  const [result, setResult] = useState("");

  const wordLimit = 1000;

  const countWords = (str) => {
    return str.trim() === ""
      ? 0
      : str.trim().split(/\s+/).length;
  };

  const handleChange = (e) => {
    const input = e.target.value;

    if (countWords(input) <= wordLimit) {
      setText(input);
    }
  };

  // 🔹 Converters
  const toLowerCase = () => setResult(text.toLowerCase());

  const toUpperCase = () => setResult(text.toUpperCase());

  const toSentenceCase = () =>
    setResult(
      text
        .toLowerCase()
        .replace(/(^\s*\w|[.!?]\s*\w)/g, (c) =>
          c.toUpperCase()
        )
    );

  const toCamelCase = () =>
    setResult(
      text
        .toLowerCase()
        .replace(/[^a-zA-Z0-9]+(.)/g, (_, chr) =>
          chr.toUpperCase()
        )
    );

  const handleCopy = () => {
    if (!result) return;
    navigator.clipboard.writeText(result);
    alert("Copied to clipboard!");
  };

  return (
    <section className="mt-10  flex items-center justify-center bg-gray-100 px-4">
      <div className="bg-white shadow-lg rounded-xl p-8 w-full max-w-2xl">

        {/* Header */}
        <div className="text-center mb-6">
          <h1 className="text-xl sm:text-2xl md:text-4xl  font-semibold">
            Welcome to Text Case Converter
          </h1>
          <p className=" text-xs sm:text-sm md:text-xl  text-gray-500">
            Paste your text and convert it as per your requirement.
          </p>
        </div>

        {/* Input */}
        <div className="mb-4">
          <textarea
            value={text}
            onChange={handleChange}
            placeholder="Enter your text (max 1000 words)..."
            rows="6"
            className="w-full border rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <p className="text-sm text-gray-500 mt-1">
            Words: {countWords(text)} / {wordLimit}
          </p>
        </div>

        {/* Options */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-6">
          <button
            onClick={toLowerCase}
            className="bg-gray-200 cursor-pointer py-2 rounded-lg hover:bg-gray-300"
          >
            Lowercase
          </button>
          <button
            onClick={toUpperCase}
            className="bg-gray-200 cursor-pointer py-2 rounded-lg hover:bg-gray-300"
          >
            Uppercase
          </button>
          <button
            onClick={toSentenceCase}
            className="bg-gray-200 cursor-pointer py-2 rounded-lg hover:bg-gray-300"
          >
            Sentence Case
          </button>
          <button
            onClick={toCamelCase}
            className="bg-gray-200 py-2   cursor-pointer  rounded-lg hover:bg-gray-300"
          >
            Camel Case
          </button>
        </div>

        {/* Result */}
        {result && (
          <div className="bg-gray-100 p-4 rounded-lg">
            <p className="mb-3 break-words">{result}</p>
            <button
              onClick={handleCopy}
              className="bg-blue-600 cursor-pointer text-white px-4 py-2 rounded-lg hover:bg-blue-700"
            >
              Copy
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default Text_Convert;
