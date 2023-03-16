const express = require("express");
const routes = require("./routes");
const morgan = require("morgan");
require("dotenv").config();
const PORT = process.env.PORT || 3001;
const app = express();


//express urlencoded allows use of params
app.use(require("body-parser").urlencoded({ extended: true }));
app.use(morgan("combined"));
//json.. nuff said :D
app.use(express.json());

//Open routes
app.use(routes);


app.listen(PORT, function () {
    console.log(`http://127.0.0.1:${PORT} Server Running on port ${PORT}!`);
  });