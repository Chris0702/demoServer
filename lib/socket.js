exports.on = function(app) {
    
    app.chatSIO = app.socketIO.of('/chat');
    app.chatSIO.on('connection', function(socket) {
        // socket.emit('chat message', 'socket connet');
        socket.emit('systemMessage', '系統訊息:連線成功');
        console.log('a user connected');
        let fs = require('fs');
        fs.readFile(patj.join(__dirname, 'home.js'), function(err, buf) {
            // it's possible to embed binary data
            // within arbitrarily-complex objects
            console.log('-----------------');
            console.log(err);
            console.log('-----------------');
            console.log(buf);
            socket.emit('chatImage', buf);
            socket.emit('chatMessage', '連線成功!好想555555555555555555555555555555發財!\n連線成功!好想發財!\n連線成功!好想發財!\n連線成功!好想發財!\n連線成功!好想發財!');
            socket.emit('chatMessage', '連線成功!好222222222222222222222222222!\n連線成功!好想發財!');
            // socket.emit('image', { image: true, buffer: buf });
        });

        socket.on('findType', function(msg) {
            console.log('find message: ' + msg);
            if ((!isSocketExistInArray(socket, app.chatSIO.boyFindGirlWait)) && msg == 'boyFindGirl') {
                app.chatSIO.boyFindGirlWait.push(socket);
            } else if ((!isSocketExistInArray(socket, app.chatSIO.girlFindBoyWait)) && msg == 'girlFindBoy') {
                app.chatSIO.girlFindBoyWait.push(socket);
            } else if ((!isSocketExistInArray(socket, app.chatSIO.boyFindBoyWait)) && msg == 'boyFindBoy') {
                app.chatSIO.boyFindBoyWait.push(socket);
            }
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
            socket.emit('chatMessage', '你傳送的圖片是:');
            socket.emit('chatImage', imageByteArray);

            //socket.broadcast.emit('chat message', msg);
            // app.chatSIO.in('chat').emit('chat message', msg);
        });

        socket.on('disconnect', function() {
            console.log('user disconnected');
            leaveWaitRoomForAllWaitSocket(socket);
            removeRoomNameRec(socket);
            for (let room in socket.rooms) {
                socket.to(room).broadcast.emit('systemMessage', '對方已離開');
            }
            socket.emit('chatMessage', 'socket disconnected');
        });
    });

}
