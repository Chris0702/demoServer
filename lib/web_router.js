exports.on = function(app) {

    let path = require('path');
    let preWebPath = path.join(__dirname, '../client');

    app.get('/pop', function(req, res) {
        res.sendfile(path.join(preWebPath, 'pop.html'));
    });

    app.get('/happy', function(req, res) {
        res.sendfile(path.join(preWebPath, 'happy.html'));
    });

    app.get('/video', function(req, res) {
        res.sendfile(path.join(preWebPath, 'video.html'));
    });

    app.get('/chat', function(req, res) {
        res.sendfile(path.join(preWebPath, 'chat.html'));
    });

    app.get('/col', function(req, res) {
        res.sendfile(path.join(preWebPath, 'col.html'));
    });

    app.get('/demo', function(req, res) {
        res.sendfile(path.join(preWebPath, 'demo.html'));
    });

    app.get('/demo2', function(req, res) {
        res.sendfile(path.join(preWebPath, 'demo2.html'));
    });

    app.get('/demo3', function(req, res) {
        res.sendfile(path.join(preWebPath, 'demo3.html'));
    });

    app.get('/test', function(req, res) {
        res.sendfile(path.join(preWebPath, 'test.html'));
    });

    app.get('/introduction', function(req, res) {
        res.sendfile(path.join(preWebPath, 'introduction.html'));
    });

    app.get('/mergeImage', function(req, res) {
        res.sendfile(path.join(preWebPath, 'mergeImage.html'));
    });

    app.get('/uploadMergeImage', function(req, res) {
        res.sendfile(path.join(preWebPath, 'uploadMergeImage.html'));
    });
}
