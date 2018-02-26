var marca = 0;
var lista = [];
var contadorItem=0;
var errores =0;

$(function(){
  var overlay = $('<div id="overlay"></div>');
  overlay.show();
  overlay.appendTo(document.body);
  $('.popup').show();
  $('.cerrar').click(function(){
    $('.popup').hide();
    overlay.appendTo(document.body).remove();
    return false;
  });


  $('.x').click(function(){
    $('.popup').hide();
    overlay.appendTo(document.body).remove();
    return false;
  });

// funcion que se aplicará cuando se consigan los 7 items
//registra tiempo y usuario y los mete en un array

function registroRanking(){
  if (errores==1) { // 3
    marca = 0;
  } else {
    var tiempo =$("#cuentaAtras").text();
    var arrayTiempo = tiempo.split(":");
    var min = parseInt(arrayTiempo[0])*60;
    var seg = parseInt(arrayTiempo[1]);
    marca = min+seg;
    
  }
  var player =$(".playername").text();

  $.post("connectionRanking.php", {player: player, marca: marca}, function(data){
    data = $.parseJSON(data);
    $('#preguntas-pc').empty();
    $('#preguntas-pc').append("<h3>MEJORES JUGADORES<h3>");
    $('#preguntas-pc').append("<table class='tablaRanking'><tr><th class='nombre' id='cabeTabla'>Nombre</th><th class='tiempo' id='cabeTabla'>Puntuacion</th></tr>");
    for (var i = 0; i <= 5; i++) {
      $('.nombre').append(
        "<br><td>"+ data[i].jugador +"</td>"
        );
      $('.tiempo').append(
        "<br><td>"+ data[i].tiempo +"</td>")
    }
    $('#preguntas-pc').append("</table>");
  });
};


// Pantalla principal después de comenzar juego

document.querySelector('button#iniciarJuego').addEventListener('click', function() {
  // Validar usuario
  var userName = $("#usuario").val();
  validarUsuario(userName);
  var tiempo =$("#cuentaAtras").text();
  var arrayTiempo = tiempo.split(":");
  var min = parseInt(arrayTiempo[0])*60;
  var seg = parseInt(arrayTiempo[1]);
  var marca = min+seg;
  setTimeout( function () {
    overlay.show();
    overlay.appendTo(document.body);
    $('.popup-pc').show();
    $('#opciones-pc').empty();
    $('#preguntas-pc').empty();
    $("#tituloPopup").empty();
    $('#tituloPopup').text("¡SE ACABÓ EL TIEMPO!");
    $('#opciones-pc').append($('<input type="button" class="btn btn-primary start" id="restart" onclick="location.reload()" value="Reintentar"></input><br/><br/> <img id="gameover" src="images/cry.png">'));
    // Animación de game over y reintentar.
    registroRanking();
  }, parseInt(marca)*1000) });


// JUAN => ESTÁ BUG, SOLUCIÓN PROPUESTA: DEJAR EL IF EN BLANCO PARA QUE NO SE ACTIVE NADA.
// pepe => el fallar en una pregunta tambien esta bug, acabara el juego

$('.item').click(function(){
  if (lista.includes($(this).text())) {
    overlay.show();
    overlay.appendTo(document.body);
    $(' .popup-pc').show();
    $('#opciones-pc').empty();
    $('#preguntas-pc').empty();
    $("#tituloPopup").empty();
    $('#preguntas-pc').text("¡Ya has encontrado este item!");
    $('#opciones-pc').append($('<p>¡BUSCA LOS DEMÁS!</p>'));
    setTimeout("$('.popup-pc').hide();", 2000);
    setTimeout( function () {
      overlay.appendTo(document.body).remove();
    }, 2000);
  } else {
    overlay.show();
    overlay.appendTo(document.body);
    var elem = $(this).text();
    lista.push(elem);
    $(' .popup-pc').show();
    $('#opciones-pc').empty();
    $('#preguntas-pc').empty();
    $("#tituloPopup").empty();

// Presentación de datos

$.post("connection.php",{item: elem}, function (item) {
  item = $.parseJSON(item);
  $("#tituloPopup").text(elem);
  $('#preguntas-pc').text(item[0].pregunta);
  $('#opciones-pc').append($('<input type="radio" id="res-pc1" name="opciones" value="1"><span id="pc1">' + ' ' + item[0].res1 + '</span><br/>'));
  $('#opciones-pc').append($('<input type="radio" id="res-pc2" name="opciones" value="2"><span id="pc2">' + ' ' + item[0].res2 + '</span></input><br />'));
  $('#opciones-pc').append($('<input type="radio" id="res-pc3" name="opciones" value="3"><span id="pc3">' + ' ' + item[0].res3 + '</span></input><br />'));
    /*
    *
    *
 Evento opción 1 Esta será la opción que se usará como plantilla, las demás se adaptarán a esta. Para probar: navegador => resp1
    *
    *
    */
    $('input[type=radio][name=opciones]').change(function() {
      if (this.value == item[0].correcta) {
        contadorItem++;
        $("#itemsactuales").text(contadorItem).animate({fontSize: "1.7em"}, 400).animate({fontSize: "1em"});;
        if(contadorItem==7){
          registroRanking();
          pararTiempo();
          // Función para parar el tiempo y mostrarlo en la sección "Tiempo" del perfil.
          $('#tituloPopup').empty();
          $('#tituloPopup').append("<p style='color:green'>¡HAS GANADO!</p>").animate({fontSize: "4em"}, 400).animate({fontSize: "2em"});;
          $('#preguntas-pc').empty();
          $('#opciones-pc').empty();
          $('#preguntas-pc').empty();
          $('#preguntas-pc').text("Marca = " + marca);
          $('#opciones-pc').append($('<img id="gameover" src="images/win.png"><input type="button" class="btn btn-primary start" id="comenzar" onclick="location.reload()" name="comenzar" value="Volver a jugar"></input><br/><br/>'));
        }else{
          $('#opciones-pc').empty();
          $('#preguntas-pc').empty();
          $('#opciones-pc').append($('<p> ¡ITEM ENCONTRADO! </p>').css({'color': 'green', 'font-weight': 'bolder'}));
          setTimeout("$('.popup-pc').hide();", 2000);
          setTimeout( function () {
            overlay.appendTo(document.body).remove();
          }, 2000);
        }
      }else{
        console.log("error");
        $('#opciones-pc').empty();
        errores++;
        $("#vida"+errores).hide();
        if(errores==3){
          registroRanking();
          pararTiempo();
          $('#tituloPopup').empty();
          $('#opciones-pc').empty();
          $('#preguntas-pc').empty();
          $('#tituloPopup').append($('<p> ¡Te quedaste <b style="color:red">sin vidas!</b> </p>'));
          $('#opciones-pc').append($('<input type="button" class="btn btn-primary start" onclick="location.reload()" id="comenzar" name="comenzar" value="Volver a jugar"></input><br/><br/><img id="gameover" src="images/cry.png">'));
        }else{
          setTimeout(function () {
            $('#preguntas-pc').empty();
            $('#preguntas-pc').text(item[1].pregunta);
            $('#opciones-pc').show();      
            }, 2000);
          $('#opciones-pc').hide(); 
          $('#preguntas-pc').append('<p>Pierdes <strong style="color:red;">1 vida</strong> y tienes que responder a otra pregunta</p>');
          $('#opciones-pc').append($('<input type="radio" id="res-pc1" name="opciones" value="1"><span id="pc1">' + item[1].res1 + '</span></input><br/>'));
          $('#opciones-pc').append($('<input type="radio" id="res-pc2" name="opciones" value="2"><span id="pc2">' + item[1].res2 + '</span></input><br />'));
          $('#opciones-pc').append($('<input type="radio" id="res-pc3" name="opciones" value="3"><span id="pc3">' + item[1].res3 + '</span></input><br />'));


        // Evento opción 2

        $('input[type=radio][name=opciones]').change(function() {
          if (this.value == item[1].correcta) {
            contadorItem++;
        $("#itemsactuales").text(contadorItem).animate({fontSize: "1.7em"}, 400).animate({fontSize: "1em"});;
        if(contadorItem==7){
          registroRanking();
          pararTiempo();
          // Función para parar el tiempo y mostrarlo en la sección "Tiempo" del perfil.
          $('#tituloPopup').empty();
          $('#tituloPopup').append("<p style='color:green'>¡HAS GANADO!</p>").animate({fontSize: "4em"}, 400).animate({fontSize: "2em"});;
          $('#preguntas-pc').empty();
          $('#opciones-pc').empty();
          $('#preguntas-pc').empty();
          $('#preguntas-pc').text("Marca = " + marca);
          $('#opciones-pc').append($('<img id="gameover" src="images/win.png"><input type="button" class="btn btn-primary start" id="comenzar" onclick="location.reload()" name="comenzar" value="Volver a jugar"></input><br/><br/>'));
        }else{
          $('#opciones-pc').empty();
          $('#preguntas-pc').empty();
          $('#opciones-pc').append($('<p> ¡ITEM ENCONTRADO! </p>').css({'color': 'green', 'font-weight': 'bolder'}));
          setTimeout("$('.popup-pc').hide();", 2000);
          setTimeout( function () {
            overlay.appendTo(document.body).remove();
          }, 2000);
        }
      }else{
        console.log("error");
        $('#opciones-pc').empty();
        errores++;
        $("#vida"+errores).hide();
        if(errores==3){
          registroRanking();
          pararTiempo();
          $('#tituloPopup').empty();
          $('#opciones-pc').empty();
          $('#preguntas-pc').empty();
          $('#tituloPopup').append($('<p> ¡Te quedaste <b style="color:red">sin vidas!</b> </p>'));
          $('#opciones-pc').append($('<input type="button" class="btn btn-primary start" onclick="location.reload()" id="comenzar" name="comenzar" value="Volver a jugar"></input><br/><br/><img id="gameover" src="images/cry.png">'));
        }else{
          setTimeout(function () {
            $('#preguntas-pc').empty();
            $('#preguntas-pc').text(item[2].pregunta);
            $('#opciones-pc').show();      
            }, 2000);
          $('#opciones-pc').hide(); 
          $('#preguntas-pc').append('<p>Pierdes <strong style="color:red;">1 vida</strong> y tienes que responder a otra pregunta</p>');
          $('#opciones-pc').append($('<input type="radio" id="res-pc1" name="opciones" value="1"><span id="pc1">' + item[1].res1 + '</span></input><br/>'));
          $('#opciones-pc').append($('<input type="radio" id="res-pc2" name="opciones" value="2"><span id="pc2">' + item[1].res2 + '</span></input><br />'));
          $('#opciones-pc').append($('<input type="radio" id="res-pc3" name="opciones" value="3"><span id="pc3">' + item[1].res3 + '</span></input><br />'));
        }

            // Evento opción 3

            $('input[type=radio][name=opciones]').change(function() {
             if (this.value == item[2].correcta) {
              contadorItem++;
              $("#itemsactuales").text(contadorItem).animate({fontSize: "1.7em"}, 400).animate({fontSize: "1em"});;
              if(contadorItem==7){
                registroRanking();
                pararTiempo();
                // Función para parar el tiempo y mostrarlo en la sección "Tiempo" del perfil.
                $('#tituloPopup').empty();
                $('#tituloPopup').append("<p style='color:green'>¡HAS GANADO!</p>").animate({fontSize: "4em"}, 400).animate({fontSize: "2em"});;
                $('#preguntas-pc').empty();
                $('#opciones-pc').empty();
                $('#preguntas-pc').empty();
                $('#preguntas-pc').text("Marca = " + marca);
                $('#opciones-pc').append($('<img id="gameover" src="images/win.png"><input type="button" class="btn btn-primary start" id="comenzar" onclick="location.reload()" name="comenzar" value="Volver a jugar"></input><br/><br/>'));
              }else{
                $('#opciones-pc').empty();
                $('#preguntas-pc').empty();
                $('#opciones-pc').append($('<p> ¡ITEM ENCONTRADO! </p>').css({'color': 'green', 'font-weight': 'bolder'}));
                setTimeout("$('.popup-pc').hide();", 2000);
                setTimeout( function () {
                  overlay.appendTo(document.body).remove();
                }, 2000);
              }
            }else{
              console.log("error");
              $('#opciones-pc').empty();
              errores++;
              $("#vida"+errores).hide();
              if(errores==3){
                registroRanking();
                pararTiempo();
                $('#tituloPopup').empty();
                $('#opciones-pc').empty();
                $('#preguntas-pc').empty();
                $('#tituloPopup').append($('<p> ¡Te quedaste <b style="color:red">sin vidas!</b> </p>'));
                $('#opciones-pc').append($('<input type="button" class="btn btn-primary start" onclick="location.reload()" id="comenzar" name="comenzar" value="Volver a jugar"></input><br/><br/><img id="gameover" src="images/cry.png">'));
              }else{
                setTimeout(function () {
                  $('#preguntas-pc').empty();
                  $('#preguntas-pc').text(item[3].pregunta);
                  $('#opciones-pc').show();      
                  }, 2000);
                $('#opciones-pc').hide(); 
                $('#preguntas-pc').append('<p>Pierdes <strong style="color:red;">1 vida</strong> y tienes que responder a otra pregunta</p>');
                $('#opciones-pc').append($('<input type="radio" id="res-pc1" name="opciones" value="1"><span id="pc1">' + item[1].res1 + '</span></input><br/>'));
                $('#opciones-pc').append($('<input type="radio" id="res-pc2" name="opciones" value="2"><span id="pc2">' + item[1].res2 + '</span></input><br />'));
                $('#opciones-pc').append($('<input type="radio" id="res-pc3" name="opciones" value="3"><span id="pc3">' + item[1].res3 + '</span></input><br />'));
              }
             }
           });
          }
        });
       } 
      }
     });
    });
   }
});
});

// Validar usuario

function validarUsuario(nombre){
  if (nombre != "") {
    if (nombre.length >= 27) {
      location.reload();
    } else {
      return true;
    }
  } else {
    location.reload();
  }
}

function pararTiempo() {
  var relojobj = $("#cuentaAtras");
  var tiempoFinal = $("#tiempoFinal");
  var tiempo = $("#cuentaAtras").text();
  // Hay que destruirlo porque se actualiza cada seg.
  relojobj.remove();
  tiempoFinal.text(tiempo);
  tiempoFinal.css({"display" : "inline", "color" : "green"});
  tiempoFinal.delay(1500).animate({fontSize: "5em"}, 400).animate({fontSize: "3.5em"});;
  console.log("Tiempo ==> " + tiempo + ", Objeto ==> " + $("#cuentaAtras"));
}
