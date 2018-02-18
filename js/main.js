/* Juan */

$(document).ready(function(){
    $(document).mousemove(function(event){ 
        $("span").text("X: " + event.pageX + ", Y: " + event.pageY); 
    });


    /* Al pulsar botón START, se guarda el nombre y activa la función de la lupa. */
    $(".start").click(function(){
    	var usuario = document.getElementById("usuario").value;
    	/* Falta asegurarse de que no escribe nombre vacio */
    	$(".playername").text(usuario);
    	$(function() {
            $("#lupa").draggable();
   		});

    $(".item").droppable({
      drop: function(event, ui) {
        $(this)
        	.addClass("ui-state-highlight")	// Añade un color debug al div. (solo debug)

        	/* Implementar aquí las pistas */
        	//console.log(event.target.id);
        	var item = event.target.id;
        	if (item == "libro") {
        		$("#lapista").text("Pista sobre libros");
        	}
        	if (item == "pc") {
        		$("#lapista").text("Pista sobre pc");
        	}
        	if (item == "movil") {
        		$("#lapista").text("Pista sobre movil");
        	}
        	if (item == "router") {
        		$("#lapista").text("Pista sobre router");
        	}
        	if (item == "cable") {
        		$("#lapista").text("Pista sobre cable");
        	}
        	if (item == "proveedor") {
        		$("#lapista").text("Pista sobre proveedor");
        	}
        	if (item == "navegador") {
        		$("#lapista").text("Pista sobre navegador");
        	}
      }
    });
    });
});

/* Juan */