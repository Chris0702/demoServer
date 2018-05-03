exports.isValid = function(value) {
    if (value != '' && value != undefined && value != null) {
        return true;
    } else {
        return false;
    }
}
