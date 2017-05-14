var socket = io.connect('http://votation-up.herokuapp.com:6969', { 'forceNew': true , 'secure': true});
socket.on('messages', function(data) {
    console.log(data);

});
