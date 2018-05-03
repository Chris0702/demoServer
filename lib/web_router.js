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

}
