
//var socket = io.connect('https://votation-up.herokuapp.com:6969', { 'forceNew': true , 'secure': true});
var socket = io.connect('http://localhost:6969', { 'forceNew': true , 'secure': true});

socket.on('messages', function(data) {

    console.log(data);

});
