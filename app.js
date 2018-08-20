var express = require('express');
var app = express();

var webRouter = require("./lib/web_router");
var userRestApi = require("./lib/rest_api/user");
var fileRestApi = require("./lib/rest_api/file");
var serverRestApi = require("./lib/rest_api/server");
var chatSocket = require("./lib/chat_socket");
var dataBaseInit = require("./lib/dataBaseInit");
var exeRestApi = require("./lib/rest_api/exe");
var config = require('./lib/config').config;
var serverPort = config.serverPort;
var mongoDBPort = config.mongoDBPort;
var mongoDBName = config.mongoDBName;
var server = require('http').createServer(app);
var serverUse=require('./lib/serverUse');
let path = require('path');

// dataBaseInit.mongoDBInit(mongoDBPort,mongoDBName);
serverUse.on(app);
webRouter.on(app);
userRestApi.on(app);
fileRestApi.on(app);
exeRestApi.on(app);
serverRestApi.on(app);
chatSocket.on(app,server);
server.listen(process.env.PORT||serverPort);
console.log("iis 現在使用" + process.env.PORT + " port");
console.log("現在使用" + serverPort + "port");
