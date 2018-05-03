exports.on = function(app) {
  let express = require('express');
  let bodyParser = require("body-parser");
  let path = require('path');
  let preWebPath = path.join(__dirname, '../client');
  app.use('/resource', express.static(path.join(__dirname, '../client/resource')))
  app.use(bodyParser.urlencoded({ extended: false }));
  app.use(bodyParser.json());
}
