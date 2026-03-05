

import React, { useState } from "react";
import axios from "axios";
import ConverterLayout from "../../layout/ConverterLayout";

const PdfConverter = () => {
  const [file, setFile] = useState(null);
  const [loading, setLoading] = useState(false);

  // Handle file selection
  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  // Handle conversion
  const handleConvert = async () => {
    if (!file) {
      alert("Please select a file first");
      return;
    }
    

    try {
      setLoading(true);

      const formData = new FormData();
      formData.append("file", file);

      const response = await axios.post(
        "http://localhost:5000/services/docx-to-pdf",
        formData,
        {
          responseType: "blob", // VERY IMPORTANT
        }
      );

      // Create download link
      const url = window.URL.createObjectURL(new Blob([response.data]));
      const link = document.createElement("a");
      link.href = url;
      link.setAttribute("download", "converted.pdf");
      document.body.appendChild(link);
      link.click();

      link.remove();
      window.URL.revokeObjectURL(url);

    } catch (error) {
      console.error(error);
      alert("Conversion failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <ConverterLayout
      title="Welcome to Easy Word to PDF Converter"
      description="Upload your Word file and convert it into PDF"
      buttonText="Convert to PDF"
      acceptType=".doc,.docx"
      onFileChange={handleFileChange}
      onConvert={handleConvert}
      loading={loading}
      selectedFile={file}
    />
  );
};

export default PdfConverter;

