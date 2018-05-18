let uuid = require('node-uuid');
exports.isValid = function(value) {
    if (value != '' && value != undefined && value != null) {
        return true;
    } else {
        return false;
    }
}

exports.getUUID = function() {
   return parseInt(uuid.v4(), 16).toString();
}
