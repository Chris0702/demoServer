exports.on = function(app) {
    let preRestApi = '/exe';
    let config = require('../config').config;
    let multer = require('multer');
    let path = require('path');
    let fs = require('fs')
    let exeCmd = require('exe');
    let utilsFile = require('../utils/file');
    let utilsValue = require('../utils/value');

    app.post(preRestApi + '/mergeImage', function(req, res) {
        let response = {
            'resStatus': 0,
            'resString': ''
        }
        console.log('======== req.body===========')
        console.log(req.body)
        mergeImgArr = req.body['mergeImgArr[]'];
        targetImg = req.body.targetImg;
        console.log('======== mergeImgArr===========')
        console.log(mergeImgArr)
        for(let i =0;i<mergeImgArr.length;i++){
            console.log(i);
            console.log(mergeImgArr[i]);
        }
        console.log('======== targetImg===========')
        console.log(targetImg)
        exeCmd('echo cmd ing~ dir')
        exeCmd('dir')
        exeCmd('echo cmd ing~')
        response.resString=targetImg;
        res.send(JSON.stringify(response));
    });
}