var socket = io.connect('localhost:8000');
// var socket = io.connect('https://app.com/');

socket.on('connect', function(data) {
    socket.emit('join', 'A new join');
});

socket.on('setup', function(data) {
    listingRec(data);
});

socket.on('noti', function(data) {
    window.location.reload();
});