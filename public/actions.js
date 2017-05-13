(function worker(){
    var request = $.ajax({
                    url: "http://votation-up.herokuapp.com/winner",
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

$("#si").click(function(){
    $.get("http://votation-up.herokuapp.com/si", function( data, err ) {
    if(!err) throw  err
    $('#siV').html(data)
    console.log("Sí: "+data)
    });
})

$("#no").click(function(){
  $.get("http://votation-up.herokuapp.com/no", function( data, err ) {
    if(!err) throw  err
    $('#noV').html(data)
    console.log("No: "+data)
  });
})

$("#noSe").click(function(){
  $.get("http://votation-up.herokuapp.com/noSe", function( data, err ) {
    if(!err) throw  err
    $('#noSeV').html(' '+data)
    console.log("No Sé: "+data)
  });
})