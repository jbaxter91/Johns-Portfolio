const path = require("path");
const router = require("express").Router();
const apiRoutes = require("./api");

// API Routes
//This route will call index.js inside /api folder
//*if* the URL path starts with "/api"
router.use("/api", apiRoutes);

// If no API routes are hit, send the React app

module.exports = router;