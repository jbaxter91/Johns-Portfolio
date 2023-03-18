const express = require("express");
const multer = require('multer');
const sharp = require('sharp');
const upload = multer();
const router = express.Router();

const description = "This is the api endpoint for managing image updates, modifications, uploads, and downloads.";

// Base call to api V1 to get some info about the api
router.get("/", (req, res) => {
    res.json({ success: true, description });
  });

// POST route to convert image to a specified format
router.post('/convert', upload.single('image'), async (req, res) => {
    try {
      // Get the uploaded image buffer from the request
      const imageBuffer = req.file.buffer;
  
      // Get the desired file type from the request body
      const { fileType } = req.body;

      console.log(req.body);

  
      // Use Sharp to convert the image buffer to the specified file type
      const convertedImageBuffer = await sharp(imageBuffer)
        .toFormat(fileType)
        .toBuffer();
  
      // Send the converted image buffer back in the response
      res.send(convertedImageBuffer);
    } catch (err) {
      console.error(err);
      res.status(500).send('Server error');
    }
  });

router.post('/resize', upload.single('image'), async (req, res) => {
    try {
        const file = req.file.buffer;
        const width = parseInt(req.body.width);
        const height = parseInt(req.body.height);

        const resizedBuffer = await sharp(file)
        .resize(width, height)
        .toBuffer();

        const resizedImageUrl = `data:${req.file.mimetype};base64,${resizedBuffer.toString('base64')}`;

        res.status(200).json({ resizedImageUrl });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error resizing image' });
    }
  });

module.exports = router;
