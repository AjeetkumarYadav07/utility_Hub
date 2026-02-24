import React, { useState } from "react";

const PasswordGenerator = () => {
  const [length, setLength] = useState(12);
  const [password, setPassword] = useState("");
  const [copied, setCopied] = useState(false);

  const [options, setOptions] = useState({
    upper: true,
    lower: true,
    number: true,
    symbol: false,
  });

  const generatePassword = () => {
    let chars = "";
    if (options.upper) chars += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    if (options.lower) chars += "abcdefghijklmnopqrstuvwxyz";
    if (options.number) chars += "0123456789";
    if (options.symbol) chars += "!@#$%^&*()_+[]{}<>?";

    if (!chars) return alert("Select at least one option");

    let newPass = "";
    for (let i = 0; i < length; i++) {
      newPass += chars.charAt(Math.floor(Math.random() * chars.length));
    }

    setPassword(newPass);
    setCopied(false);
  };

  const copyPassword = () => {
    navigator.clipboard.writeText(password);
    setCopied(true);
  };

  const calculateStrength = () => {
    if (length < 8) return "Weak";
    if (length < 14) return "Medium";
    return "Strong";
  };

  return (
    <section className="w-full px-4 py-10 flex justify-center">
      <div className="w-full max-w-md bg-white shadow-lg rounded-2xl p-6 space-y-6">

        <h1 className="text-2xl font-bold text-center">
          Generate Password
        </h1>

        {/* Password Display */}
        <div className="flex items-center justify-between bg-gray-100 p-3 rounded-lg">
          <span className="break-all">{password || "Your password..."}</span>
          <button
            onClick={copyPassword}
            className="text-sm text-blue-600 font-medium"
          >
            {copied ? "Copied!" : "Copy"}
          </button>
        </div>

        {/* Strength */}
        <div className="text-sm">
          Strength:{" "}
          <span
            className={`font-semibold ${
              calculateStrength() === "Strong"
                ? "text-green-600"
                : calculateStrength() === "Medium"
                ? "text-yellow-500"
                : "text-red-500"
            }`}
          >
            {calculateStrength()}
          </span>
        </div>

        {/* Length Slider */}
        <div>
          <label className="block text-sm font-medium mb-2">
            Password Length: {length}
          </label>
          <input
            type="range"
            min="4"
            max="32"
            value={length}
            onChange={(e) => setLength(e.target.value)}
            className="w-full"
          />
        </div>

        {/* Options */}
        <div className="space-y-2">
          {Object.keys(options).map((key) => (
            <label key={key} className="flex items-center gap-2 text-sm">
              <input
                type="checkbox"
                checked={options[key]}
                onChange={() =>
                  setOptions({ ...options, [key]: !options[key] })
                }
              />
              {key === "upper" && "Include Uppercase (A-Z)"}
              {key === "lower" && "Include Lowercase (a-z)"}
              {key === "number" && "Include Numbers (0-9)"}
              {key === "symbol" && "Include Symbols (!@#$)"}
            </label>
          ))}
        </div>

        {/* Generate Button */}
        <button
          onClick={generatePassword}
          className="w-full bg-blue-600 text-white py-2 rounded-lg font-semibold hover:bg-blue-700 transition"
        >
          Generate Now
        </button>
      </div>
    </section>
  );
};

export default PasswordGenerator;