(function worker(){
    var request = $.ajax({
                    url: "https://votation-up.herokuapp.com/winner",
                    method: "get",
                    dataType: "text"
                  });
                  request.done(function( msg ) {
                    $( "#winnerOpt" ).html( msg );
                      console.log(msg)
                    });
                  
                  request.complete(function(){
                    setTimeout(worker, 5000);
                    })
})()

$("#si").click(function(){
  $.get("https://votation-up.herokuapp.com/si", function( data, err ) {
    if(!err) throw  err
    $('#siV').html(' '+data)
    console.log(data)
    });
})

$("#no").click(function(){
  $.get("https://votation-up.herokuapp.com/no", function( data, err ) {
    if(!err) throw  err
    $('#noV').html(' '+data)
    console.log(data)
  });
})

$("#noSe").click(function(){
  $.get("https://votation-up.herokuapp.com/noSe", function( data, err ) {
    if(!err) throw  err
    $('#noSeV').html(' '+data)
    console.log(data+' noSe')
  });
})