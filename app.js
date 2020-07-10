const express = require("express");
const bodyParser = require("body-parser");
const request = require("request");
// const public = require("express-static");

const app = express();
app.use(express.static("public"));

app.use(bodyParser.urlencoded({
  extended: true
}));

app.get("/", function(req, res) {
  res.sendFile(__dirname + "/signup.html");
});

app.post("/", function(req, res) {
  
  res.send(req.body.inputEmail);

});

app.listen(3000, function() {
  console.log("server is running on port 3000");
})
