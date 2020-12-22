require('dotenv').config();
const PORT = process.env.PORT || 3000

var express = require("express");
var app = express();
var server = require('http').createServer(app);
var io = require('socket.io')(server);

app.use(express.static('public'));
app.use(express.json());

let listRec = {};
let timeCheck = {}
let cli;

io.on('connection', function(client) {
    cli = client;
    client.emit('setup', [listRec, timeCheck]);
});

// get public view
app.get('/', function(req, res, ext) {
    res.sendFile('/public/index.html');
});

// get notify from sensor function
app.post('/noti', function(req, res, ext) {
    const REC_ID = req.body.address;
    const REC_STATUS = req.body.status;
    const current = new Date();
    listRec[REC_ID] = REC_STATUS;
    timeCheck[REC_ID] = current.toLocaleString();;
    cli.emit('noti');
    res.send('ok');
});

server.listen(PORT);