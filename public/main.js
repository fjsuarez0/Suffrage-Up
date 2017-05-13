
//
vara PORT = {{socketPort}}
//var socket = io.connect('http://votation-up.herokuapp.com:'+PORT, { 'forceNew': true , 'secure': true});
var socket = io.connect('https://votation-up.herokuapp.com:6969', { 'forceNew': true , 'secure': true});
socket.on('messages', function(data) {
    console.log(data);

});
