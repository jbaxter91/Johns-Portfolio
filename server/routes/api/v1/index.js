const router = require("express").Router();
const images = require("./images");

// all routes
//*if* the URL path starts with "/api/images" then we call user.js inside api folder
router.use("/images", images);

// Base call to api V1 to get some info about the api
router.get("/", (req, res) => {
  res.json({ success: true });
});



module.exports = router;
