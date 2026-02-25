import React, { useState, useRef } from "react";

const ConverterLayout = ({
  title,
  description,
  buttonText,
  acceptType,
  onFileChange,
  onConvert,
  loading,
  selectedFile,
}) => {
  const [dragActive, setDragActive] = useState(false);
  const fileInputRef = useRef(null);

  const handleDragOver = (e) => {
    e.preventDefault();
    setDragActive(true);
  };

  const handleDragLeave = () => {
    setDragActive(false);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    setDragActive(false);

    const file = e.dataTransfer.files[0];
    if (file) {
      onFileChange({ target: { files: [file] } });
    }
  };

  return (
    <section className="mt-6 flex items-center justify-center px-2 py-5">
      <div className="w-full max-w-3xl bg-white shadow-lg rounded-xl p-4 md:p-10">
        
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-lg md:text-4xl font-bold mb-3">
            {title}
          </h1>
          <p className="text-gray-600 text-sm md:text-lg">
            {description}
          </p>
        </div>

        {/* Upload Box */}
        <div
          className={`border-2 border-dashed rounded-xl p-10 text-center cursor-pointer transition mb-6
            ${
              dragActive
                ? "border-purple-600 bg-purple-50"
                : "border-purple-300 hover:border-purple-400"
            }`}
          onClick={() => fileInputRef.current.click()}
          onDragOver={handleDragOver}
          onDragLeave={handleDragLeave}
          onDrop={handleDrop}
        >
          <div className="flex flex-col items-center gap-4">
            <div className="text-5xl text-purple-400 hover:text-purple-600">+</div>

            <p className="text-gray-500">
              Drag & Drop your file here
            </p>

            <p className="text-sm text-gray-400">
              or click to browse
            </p>

            {selectedFile && (
              <p className="text-sm text-green-600 font-medium">
                Selected: {selectedFile.name}
              </p>
            )}
          </div>

          {/* Hidden File Input */}
          <input
            ref={fileInputRef}
            type="file"
            accept={acceptType}
            onChange={onFileChange}
            className="hidden"
          />
        </div>

        {/* Convert Button */}
        <div className="text-center">
          <button
            onClick={onConvert}
            disabled={loading}
            className="px-8 py-3 bg-purple-400 text-white rounded-lg  cursor-pointer font-semibold hover:bg-purple-500 transition disabled:opacity-50"
          >
            {loading ? "Converting..." : buttonText}
          </button>
        </div>
      </div>
    </section>
  );
};

export default ConverterLayout;