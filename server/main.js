// this is my web server

const express = require("express");
const app = express();
//  se port
const port = 3000;
// this a method that have two paramters(path and callback)
app.get("/", (req, res) => {
  res.send("Hello World, from express");
});

// run
app.listen(port);
