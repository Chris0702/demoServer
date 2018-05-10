var fs = require('fs');
var globule = require('globule');
var path = require('path');
exports.moveFile = function(orgPath, distPath, callback) {
    fs.readFile(orgPath, function(err, data) {
        if (err) {
            console.error(err.message);
            callback(false)
        } else {
            fs.writeFile(distPath, data, function(err) {
                if (err) {
                    console.error(err.message);
                    callback(false)
                } else {
                    fs.unlink(orgPath, function(err) {
                        if (err) {
                            console.error(err.message);
                            callback(false)
                        } else {
                            // console.log('delete ' + req.file.path + ' successfully!');
                            callback(true)
                        }
                    });
                }
            });
        }
    });
}

exports.getFolderPathAll = function(folderName, isLocal, callback) {
    let searchBase = path.join(__dirname, '..', '..', 'client');
    let searchSource = path.join(folderName, '*')
    let result = globule.find({ src: searchSource, srcBase: searchBase, prefixBase: isLocal })
    callback(result)
}