const router = require("express").Router();
const v1 = require("./v1");
const versions = ["v1"];

// all routes
//*if* the URL path starts with "/api/v1" then we call user.js inside api folder
router.use("/v1", v1);

// Base call to api V1 to get some info about the api
router.get("/", (req, res) => {
    res.json({ success: true, versions });
  });

module.exports = router;