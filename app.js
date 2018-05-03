var express = require('express');
var app = express();

var webRouter = require("./lib/web_router");
var userRestApi = require("./lib/rest_api/user");
var chatSocket = require("./lib/chat_socket");
var dataBaseInit = require("./lib/dataBaseInit");
var config = require('./lib/config').config;
var serverPort = config.serverPort;
var mongoDBPort = config.mongoDBPort;
var mongoDBName = config.mongoDBName;
var server = require('http').createServer(app);
var serverUse=require('./lib/serverUse');
let path = require('path');

dataBaseInit.mongoDBInit(mongoDBPort,mongoDBName);
serverUse.on(app);
webRouter.on(app);
userRestApi.on(app);
chatSocket.on(app,server);
server.listen(serverPort);
console.log("現在使用" + serverPort + "port");
