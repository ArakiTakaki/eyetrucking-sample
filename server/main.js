("use strict");
const express = require("express");
const app = express();
var bodyParser = require("body-parser");
const registSocket = require("./websocket/regist");

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(require("./middleware"));
app.use(require("./routes/api"));
const server = app.listen(3000, "0.0.0.0", function() {
  const host = server.address().address;
  const port = server.address().port;
  console.log(`STERT SERVER http://${host}:${port}`);
});
registSocket(server);
