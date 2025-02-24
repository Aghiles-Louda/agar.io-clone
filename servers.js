const express = require('express');
const app = express();
app.use(express.static(__dirname + '/public'));
const socketio = require('socket.io');
const expressServer = app.listen(8080);
const io = socketio(expressServer)
const helmet = require('helmet');
app.use(helmet());
console.log("Express and socketio are listening on port 8080");

//App organisation
module.exports =  {
    app,io
}