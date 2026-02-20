const express = require("express");
const router = express.Router() ;
// const auth = require("../middleware/authMiddleware");
const upload = require("../middleware/upload");
const createLimiter = require("../middleware/rateLimiter");

const limiter = createLimiter(10);
const {docxToPdf} = require("../controllers/docxToPdfController");
const {pdfToDocxController} = require("../controllers/pdfToDocxController");
const allowedMimeTypes = require("../utils/allowedMimeTypes");

router.post(
    "/docx-to-pdf",
    // auth,
    limiter ,
    upload(allowedMimeTypes.docx).single("file"),
    docxToPdf 
);

router.post(
    "/pdf-to-word",
    //auth ,
    limiter ,
    upload(allowedMimeTypes.pdf).single("file"),
    pdfToDocxController 

)


module.exports = router 