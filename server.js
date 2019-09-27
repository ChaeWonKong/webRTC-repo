const express = require("express");
const app = express();

console.log("server is running");
app.get("", (req, res) => {
  res.render("index.ejs");
});

app.listen(3000);
