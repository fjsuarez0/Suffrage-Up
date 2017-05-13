(function worker(){
    var request = $.ajax({
                    url: "http://localhost:5000/winner",
                    dataType: "text"
                  });
                  request.done(function( msg ) {
                    $( "#winnerOpt" ).html( msg );
                      console.log(msg)
                    });
                  
                  request.complete(function(){
                    setTimeout(worker, 2000);
                  })
})()
// https://votation-up.herokuapp.com/winner
$("#si").click(function(){
  ///$.get("https://votation-up.herokuapp.com/si", function( data, err ) {
    $.get("http://localhost:5000/si", function( data, err ) {
    if(!err) throw  err
    $('#siV').html(data)
    console.log("Sí: "+data)
    });
})

$("#no").click(function(){
  $.get("http://localhost:5000/no", function( data, err ) {
    if(!err) throw  err
    $('#noV').html(data)
    console.log("No: "+data)
  });
})

$("#noSe").click(function(){
  $.get("http://localhost:5000/noSe", function( data, err ) {
    if(!err) throw  err
    $('#noSeV').html(' '+data)
    console.log("No Sé: "+data)
  });
})