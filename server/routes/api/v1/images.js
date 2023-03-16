const express = require("express");
const router = express.Router();

const description = "This is the api endpoint for managing image updates, modifications, uploads, and downloads.";

// Base call to api V1 to get some info about the api
router.get("/", (req, res) => {
    res.json({ success: true, description });
  });

module.exports = router;
