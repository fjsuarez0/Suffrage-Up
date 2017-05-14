
// What happend ? 
var socket = io.connect('https://votation-up.herokuapp.com', {'secure': true});
socket.on('messages', function(data,err) {
    console.log(data);
});
