exports.on = function(app) {
    let preRestApi = '/user';
    let config = require('../config').config;
    let account = require('../role/account');

    app.post(preRestApi + '/signIn', function(req, res) {
        let response = {
            'resStatus': 0,
            'resString': ''
        }
        let username = req.body.username;
        let password = req.body.password;
        console.log("signIn username");
        console.log(username);
        console.log("signIn password");
        console.log(password);

        account.signIn(username, password, (result) => {
            if (!result) {
                response.resStatus = 1;
            }
            res.send(JSON.stringify(response));
        });
    });

    app.get(preRestApi + '/login', function(req, res) {
        let response = {
            'resStatus': 0,
            'resString': ''
        }
        let username = req.headers.username;
        let password = req.headers.password;
        console.log('login username  ' + username);
        console.log('login password  ' + password);
        account.login(username, password, (result, resString) => {
            if (!result) {
                response.resStatus = 1;
                response.resString = resString;
            }
            res.send(JSON.stringify(response));
        })
    });
}
