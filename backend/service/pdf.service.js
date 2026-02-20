const pdfParse = require("pdf-parse");
const { Document, Packer, Paragraph, TextRun } = require("docx");

exports.convertPdfToDocx = async (pdfBuffer) => {
  // 1️⃣ Extract text from PDF
  const data = await pdfParse(pdfBuffer);

  const text = data.text || "";

  // 2️⃣ Split into paragraphs
  const lines = text.split("\n").filter((line) => line.trim() !== "");

  // 3️⃣ Create Word document
  const doc = new Document({
    sections: [
      {
        children: lines.map(
          (line) =>
            new Paragraph({
              children: [new TextRun(line)],
            })
        ),
      },
    ],
  });

  // 4️⃣ Convert to buffer
  const docxBuffer = await Packer.toBuffer(doc);

  return docxBuffer;
};
