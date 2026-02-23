import React, { useState } from "react";
import axios from "axios";
import ConverterLayout from "../../layout/ConverterLayout";

const PdfToWord = () => {
  const [file, setFile] = useState(null);
  const [loading, setLoading] = useState(false);

  // Handle file selection
  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  // Handle conversion
  const handleConvert = async () => {
    if (!file) {
      alert("Please select a PDF file first");
      return;
    }

    try {
      setLoading(true);

      const formData = new FormData();
      formData.append("file", file);

      const response = await axios.post(
        "http://localhost:5000/services/pdf-to-word",
        formData,
        {
          responseType: "blob", // VERY IMPORTANT
        }
      );

      // Create download link
      const url = window.URL.createObjectURL(new Blob([response.data]));
      const link = document.createElement("a");
      link.href = url;
      link.setAttribute("download", "converted.docx");
      document.body.appendChild(link);
      link.click();

      link.remove();
      window.URL.revokeObjectURL(url);

    } catch (error) {
      console.error(error);
      alert("Please choose PDF only ");
    } finally {
      setLoading(false);
    }
  };

  return (
    <ConverterLayout
      title="Welcome to Easy PDF to Word Converter"
      description="Upload your PDF and convert it into Word"
      buttonText="Convert to Word"
      acceptType=".pdf"
      onFileChange={handleFileChange}
      onConvert={handleConvert}
      loading={loading}
      selectedFile={file}
    />
  );
};

export default PdfToWord;
