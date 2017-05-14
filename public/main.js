
// What happend ? 
var socket = io.connect('https://votation-up.herokuapp.com:6969', {'secure': true});
socket.on('messages', function(data,err) {
    console.log(data);
    console.log(err)
});
