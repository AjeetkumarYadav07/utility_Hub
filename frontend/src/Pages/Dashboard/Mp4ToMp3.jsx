import React, { useState, useRef } from "react";

const Mp4ToMp3 = () => {
  const [file, setFile] = useState(null);
  const [dragging, setDragging] = useState(false);
  const [progress, setProgress] = useState(0);
  const [converted, setConverted] = useState(false);

  const inputRef = useRef();

  const handleFile = (selectedFile) => {
    if (!selectedFile) return;
    if (selectedFile.type !== "video/mp4") {
      alert("Only MP4 files allowed");
      return;
    }
    setFile(selectedFile);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    setDragging(false);
    handleFile(e.dataTransfer.files[0]);
  };

  const handleConvert = () => {
    if (!file) return alert("Upload file first");

    // Fake progress simulation (replace with real API call)
    setProgress(0);
    let interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setConverted(true);
          return 100;
        }
        return prev + 10;
      });
    }, 300);
  };

  const handleCancel = () => {
    setFile(null);
    setProgress(0);
    setConverted(false);
  };

  return (
    <section className=" flex items-center justify-center bg-gradient-to-br  p-4">
      <div className="w-full max-w-xl bg-white rounded-2xl shadow-2xl p-8 space-y-6">

        {/* Title */}
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-800">
            Convert MP4 to MP3
          </h1>
          <p className="text-gray-500 text-sm">
            Fast, Secure & Easy Audio Extraction
          </p>
        </div>

        {/* Drag & Drop Area */}
        <div
          onClick={() => inputRef.current.click()}
          onDragOver={(e) => e.preventDefault()}
          onDragEnter={() => setDragging(true)}
          onDragLeave={() => setDragging(false)}
          onDrop={handleDrop}
          className={`border-2 border-dashed rounded-xl p-8 text-center cursor-pointer transition ${
            dragging
              ? "border-indigo-600 bg-indigo-50"
              : "border-gray-300 bg-gray-50"
          }`}
        >
          <input
            type="file"
            accept="video/mp4"
            ref={inputRef}
            hidden
            onChange={(e) => handleFile(e.target.files[0])}
          />
          {file ? (
            <p className="text-gray-700 font-medium">{file.name}</p>
          ) : (
            <p className="text-gray-500">
              Drag & Drop MP4 file here or Click to Upload
            </p>
          )}
        </div>

        {/* Progress Bar */}
        {progress > 0 && (
          <div className="w-full bg-gray-200 rounded-full h-3">
            <div
              className="bg-indigo-600 h-3 rounded-full transition-all"
              style={{ width: `${progress}%` }}
            ></div>
          </div>
        )}

        {/* Convert Button */}
        {!converted && (
          <button
            onClick={handleConvert}
            className="w-full bg-purple-400 hover:bg-purple-500 cursor-pointer  text-white py-3 rounded-xl font-semibold  transition"
          >
            Convert Now
          </button>
        )}

        {/* Download & Cancel */}
        {converted && (
          <div className="flex gap-4">
            <button className="flex-1 bg-green-600 cursor-pointer text-white py-3 rounded-xl font-semibold hover:bg-green-700 transition">
              Download MP3
            </button>
            <button
              onClick={handleCancel}
              className="flex-1 bg-red-500 cursor-pointer text-white py-3 rounded-xl font-semibold hover:bg-red-600 transition"
            >
              Cancel
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default Mp4ToMp3;