const express = require("express");
const router = express.Router() ;
// const auth = require("../middleware/authMiddleware");
const upload = require("../middleware/upload");
const createLimiter = require("../middleware/rateLimiter");
const videoupload  = require("../middleware/videoupload");
const {convertFile} = require("../controllers/mp4tomp3Controller");
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
router.post(
    "/mp4-to-mp3" ,
    videoupload.single("video"),convertFile
);


module.exports = router 