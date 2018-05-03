 let mongoDB = require('../db/mongoDB');
 let utilsValue = require('../utils/value');
 let config = require('../config').config;
 let userCollection = config.mongoDBCollection.userCollection;

 exports.login = function(username, password, callback) {
     if (utilsValue.isValid(username) && utilsValue.isValid(password)) {
         let queryObj = {
             '_id': username
         }
         mongoDB.queryFindOne(userCollection, queryObj, (result, item) => {
             console.log(result);
             console.log(item);
             if (result) {
                 if (item == null) {
                     callback(false, 'username error');
                 } else {
                     if (password == item.password) {
                         callback(true, '');
                     } else {
                         callback(false, 'password error');
                     }
                 }
             } else {
                 callback(false, 'mongoDB error');
             }
         })
     } else {
         callback(false, 'input error');
     }
 }

 exports.signIn = function(username, password, callback) {
     if (utilsValue.isValid(username) && utilsValue.isValid(password)) {
         let insertObj = {
             '_id': username,
             'password':password
         }
         mongoDB.insert(userCollection, insertObj, (result, item) => {
            console.log(result);
             console.log(item);
             callback(result);
         })
     } else {
         callback(false);
     }
 }
