
// What happend ?  asdsad
//var socket = io()
// polling-xhr.js:261 GET https://votation-up.herokuapp.com/socket.io/?EIO=3&transport=polling&t=LmChkRt 404 (Not Found)
var socket = io.connect('https://votation-up.herokuapp.com:6969', {'secure': true});
socket.on('messages', function(data,err) {
    console.log(data);
    console.log(err)
});
