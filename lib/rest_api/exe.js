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
        let resultFile = path.join(__dirname, '..', '..', 'exe', 'merge.jpg');
        let imageName = utilsValue.getUUID() + '_mergeImage.jpg';
        let saveImgPath = path.join(__dirname, '..', '..', 'client', 'mergeImageResult', imageName);
        let response = {
            'resStatus': 0,
            'resString': ''
        }
        let cmd = exeFile;
        mergeImgArr = req.body['mergeImgArr[]'];
        targetImg = req.body.targetImg;
        filterParam()
        if (mergeImgArr.length >= 1) {
            cmd = cmd + ' ' + mergeImgArr[0];
            for (let i = 1; i < mergeImgArr.length; i++) {
                console.log(i);
                console.log(mergeImgArr[i]);
                cmd = cmd + ',' + mergeImgArr[i];
            }

            cmd = cmd + ' ' + targetImg + ' ' + saveImgPath;
            console.log(cmd)
            exeCmd(cmd)
            response.resString = 'mergeImageResult/' + imageName;
        } else {
            response.resStatus = 1;
        }
        res.send(JSON.stringify(response));

        // response.resString = 'mergeImageResult/3608831514_mergeImage.jpg'
        // res.send(JSON.stringify(response));

        function filterParam() {
            try {
                mergeImgArr = JSON.parse(mergeImgArr);
            } catch (e) {}
            for (let i = 0; i < mergeImgArr.length; i++) {
                if (mergeImgArr[i].indexOf('mergeImage') >= 0) {
                    mergeImgArr[i] = mergeImgArr[i].substring(mergeImgArr[i].indexOf('mergeImage'))
                }
            }
            if (targetImg.indexOf('mergeImage') >= 0) {
                targetImg = targetImg.substring(targetImg.indexOf('mergeImage'))
            }
        }


    });
}