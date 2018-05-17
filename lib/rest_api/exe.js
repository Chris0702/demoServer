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
        let exeFile = path.join(__dirname, '..', '..', 'exe', 'mergeImageExe.exe');
        let response = {
            'resStatus': 0,
            'resString': ''
        }
        let cmd = exeFile;
        console.log('======== req.body===========')
        console.log(req.body)
        mergeImgArr = req.body['mergeImgArr[]'];
        targetImg = req.body.targetImg;
        console.log('======== mergeImgArr===========')
        console.log(mergeImgArr)
        if (mergeImgArr.length >= 1) {
            cmd = cmd + ' ' + mergeImgArr[0];
            for (let i = 1; i < mergeImgArr.length; i++) {
                console.log(i);
                console.log(mergeImgArr[i]);
                cmd = cmd + ',' + mergeImgArr[i];
            }

            cmd = cmd + ' ' + targetImg;
            console.log('======== targetImg===========')
            console.log(targetImg)
            exeCmd('echo cmd ing~ cmd')
            console.log(cmd)
            exeCmd(cmd)
            exeCmd('echo cmd ing~')

        }else{
            response.resStatus=1;
        }
        response.resString = targetImg;
        res.send(JSON.stringify(response));
    });
}