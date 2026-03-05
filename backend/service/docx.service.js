

const mammoth = require("mammoth");
const puppeteer = require("puppeteer");

async function convertDocxBufferToPdf (buffer) {

  // 1️⃣ Convert docx to HTML
  const { value: html } = await mammoth.convertToHtml({ buffer });

  // 2️⃣ Launch headless browser
  const browser = await puppeteer.launch();
  const page = await browser.newPage();

  await page.setContent(html);

  // 3️⃣ Convert HTML to PDF
  const pdfBuffer = await page.pdf({
    format: "A4",
  });

  await browser.close();

  return pdfBuffer;
};


module.exports = {
  convertDocxBufferToPdf,
};