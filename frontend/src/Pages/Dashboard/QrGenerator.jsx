import React, { useState } from "react";
import QRCode from "qrcode";

const QrGenerator = () => {
  const [text, setText] = useState("");
  const [qrUrl, setQrUrl] = useState("");

  const generateQR = async () => {
    if (!text.trim()) {
      alert("Please enter something");
      return;
    }

    try {
      const url = await QRCode.toDataURL(text, {
        width: 300,
        margin: 2,
      });
      setQrUrl(url);
    } catch (err) {
      console.error(err);
      alert("Failed to generate QR");
    }
  };

  const downloadQR = () => {
    const link = document.createElement("a");
    link.href = qrUrl;
    link.download = "qr-code.png";
    link.click();
  };

  const clearQR = () => {
    setText("");
    setQrUrl("");
  };


  return (
    <section className=" mt-5 flex items-center justify-center bg-gray-100 px-4">
      <div className="bg-white w-full max-w-md rounded-xl shadow-lg p-6 space-y-6">

        <h2 className="text-2xl font-bold text-center text-gray-800">
          QR Code Generator
        </h2>

        {/* Input + Button */}
        <div className="flex gap-2">
          <input
            type="text"
            placeholder="Enter text, URL, or phone"
            value={text}
            onChange={(e) => setText(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && generateQR() }
            className="flex-1 px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-200"
          />

          <button
            onClick={generateQR}
            className="px-4 py-2 bg-purple-300 text-white rounded-lg hover:bg-purple-400  cursor-pointer transition"
          >
            Generate
          </button>
        </div>

        {/* QR Display */}
        {qrUrl && (
          <div className="relative flex flex-col items-center space-y-4">

            <button
              onClick={clearQR}
              className="absolute -top-3 -right-3 bg-red-500 text-white rounded-full w-6 h-6 text-sm hover:bg-red-600"
            >
              ✕
            </button>

            <div className="bg-gray-50 p-4 rounded-lg shadow-inner">
              <img src={qrUrl} alt="QR Code" />
            </div>

            <button
              onClick={downloadQR}
              className="w-full py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition"
            >
              Save as PNG
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default QrGenerator;