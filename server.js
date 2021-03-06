var express = require("express");
const path = require("path");
var app = express();

app.set("port", process.env.PORT || 5000);

//For avoidong Heroku $PORT error
app
  .get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "index.html"));
  })
  .listen(app.get("port"), function() {
    console.log(
      "App is running, server is listening on port ",
      app.get("port")
    );
  });

// var http = require("http");

// http
//   .createServer(function(req, res) {
//     res.writeHead(200, { "Content-Type": "text/plain" });
//     res.send("it is running\n");
//   })
//   .listen(process.env.PORT || 5000);