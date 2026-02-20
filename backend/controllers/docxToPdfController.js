
const {convertDocxBufferToPdf} = require("../service/docx.service");

async function docxToPdf(req, res) {
   try {
    if (!req.file) {
      return res.status(400).json({
        success: false,
        message: "No file uploaded",
      });
    }

    const pdfBuffer = await convertDocxBufferToPdf(req.file.buffer);

    res.set({
      "Content-Type": "application/pdf",
      "Content-Disposition": "attachment; filename=converted.pdf",
    });

    res.send(pdfBuffer);

  } catch (error) {
    console.error(error);
    res.status(500).json({
      success: false,
      message: "Conversion failed",
    });
  }

}

module.exports = { docxToPdf };
