
import React, { useState, useRef } from "react";
import axios from "axios";

const Mp4ToMp3 = () => {
  const [file, setFile] = useState(null);
  const [dragging, setDragging] = useState(false);
  const [progress, setProgress] = useState(0);
  const [converted, setConverted] = useState(false);
  const [loading, setLoading] = useState(false);

  const inputRef = useRef();

  const handleFile = (selectedFile) => {
    if (!selectedFile) return;

    if (selectedFile.type !== "video/mp4") {
      alert("Only MP4 files allowed");
      return;
    }

    setFile(selectedFile);
    setConverted(false);
    setProgress(0);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    setDragging(false);
    handleFile(e.dataTransfer.files[0]);
  };

  const handleConvert = async () => {
    if (!file) return alert("Upload file first");

    const formData = new FormData();
    formData.append("video", file);

    try {
      setLoading(true);
      setProgress(0);
      setConverted(false);

      const response = await axios.post(
        "http://localhost:5000/services/mp4-to-mp3",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
          responseType: "blob",
          onUploadProgress: (progressEvent) => {
            const percent = Math.round(
              (progressEvent.loaded * 100) / progressEvent.total
            );
            setProgress(percent);
          },
        }
      );

      // Create download link
      const url = window.URL.createObjectURL(new Blob([response.data]));
      const link = document.createElement("a");
      link.href = url;
      link.setAttribute("download", "converted.mp3");
      document.body.appendChild(link);
      link.click();
      link.remove();

      setConverted(true);
    } catch (error) {
      if (error.response?.data) {
        const reader = new FileReader();
        reader.onload = () => {
          try {
            const err = JSON.parse(reader.result);
            alert(err.error);
          } catch {
            alert("Conversion failed");
          }
        };
        reader.readAsText(error.response.data);
      } else {
        alert("Server error");
      }
    } finally {
      setLoading(false);
    }
  };

  const handleCancel = () => {
    setFile(null);
    setProgress(0);
    setConverted(false);
    setLoading(false);
  };

  return (
    <section className="flex items-center justify-center bg-gradient-to-br p-4 min-h-screen">
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
            disabled={loading}
            className={`w-full py-3 rounded-xl font-semibold text-white transition ${
              loading
                ? "bg-gray-400 cursor-not-allowed"
                : "bg-purple-500 hover:bg-purple-600"
            }`}
          >
            {loading ? "Converting..." : "Convert Now"}
          </button>
        )}

        {/* Download & Cancel */}
        {converted && (
          <div className="flex gap-4">
            <button
              onClick={handleCancel}
              className="flex-1 bg-blue-500 text-white py-3 rounded-xl font-semibold hover:bg-blue-600 transition"
            >
              Convert Another
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default Mp4ToMp3;
