exports.on = function(app,server) {
    app.socketIO = require('socket.io')(server);
    let fs = require('fs');
    let path=require('path');
    app.chatSIO = app.socketIO.of('/chat');
    app.chatSIO.on('connection', function(socket) {
        // socket.emit('chat message', 'socket connet');
        socket.emit('systemMessage', '系統訊息:連線成功');
        console.log('a user connected');
        socket.join('roomName');
        fs.readFile(path.join(__dirname, 'home.jpg'), function(err, buf) {
            // it's possible to embed binary data
            // within arbitrarily-complex objects
            console.log('-----------------');
            console.log(err);
            console.log('-----------------');
            console.log(buf);
            socket.emit('chatImage', buf);
            socket.emit('chatMessage', '連線成功!好想發財!\n連線成功!好想發財!\n連線成功!好想發財!\n很重要!所以要說三次!');
        });

 

        socket.on('chatMessage', function(msg) {
            console.log(socket.id);
            console.log('message: ' + msg);
            console.log(socket.rooms);
            for (let room in socket.rooms) {
                socket.to(room).broadcast.emit('chatMessage', msg);
            }
            //socket.broadcast.emit('chat message', msg);
            // app.chatSIO.in('chat').emit('chat message', msg);
        });

        socket.on('chatImage', function(imageByteArray) {
            console.log(socket.id);
            console.log('chatImage');
            console.log(socket.rooms);
            for (let room in socket.rooms) {
                socket.to(room).broadcast.emit('chatImage', imageByteArray);
            }
            // socket.emit('chatMessage', '你傳送的圖片是:');
            // socket.emit('chatImage', imageByteArray);

            //socket.broadcast.emit('chat message', msg);
            // app.chatSIO.in('chat').emit('chat message', msg);
        });

        socket.on('disconnect', function() {
            console.log('user disconnected');
            for (let room in socket.rooms) {
                socket.to(room).broadcast.emit('systemMessage', '對方已離開');
            }
            socket.emit('chatMessage', 'socket disconnected');
        });
    });

}
