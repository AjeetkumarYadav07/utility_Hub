const { convertPdfToDocx } = require("../service/pdf.service");

async function   pdfToDocxController (req, res) {
  try {
    if (!req.file) {
      return res.status(400).json({
        success: false,
        message: "No file uploaded",
      });
    }

    // Convert PDF buffer → DOCX buffer
    const docxBuffer = await convertPdfToDocx(req.file.buffer);

    // Send as downloadable file
    res.set({
      "Content-Type":
        "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
      "Content-Disposition": "attachment; filename=converted.docx",
    });

    return res.send(docxBuffer);

  } catch (error) {
    console.error("PDF to DOCX Error:", error);

    return res.status(500).json({
      success: false,
      message: "Conversion failed",
    });
  }
};


module.exports = {
    pdfToDocxController ,
}