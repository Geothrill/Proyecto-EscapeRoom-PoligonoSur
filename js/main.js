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
        		$("#lapista").text("Libro: en él se encuentran varias leyes sobre los Derechos de la Información.");
        	}
        	if (item == "pc") {
        		$("#lapista").text("Pc: dispositivo que entre otras cosas nos permite navegar por internet.");
        	}
        	if (item == "movil") {
        		$("#lapista").text("Movil: dispositivo de menor tamaño que el pc que nos permite navegar por internet.");
        	}
        	if (item == "router") {
        		$("#lapista").text("Router: Un router es un dispositivo hardware que permite la interconexión de ordenadores con internet");
        	}
        	if (item == "cable") {
        		$("#lapista").text("Cable conexión: Medio físico de transmisión de la información desde Internet a nuestro Pc y viceversa ");
        	}
        	if (item == "proveedor") {
        		$("#lapista").text("Proveedor: Suministra internet a los clientes, es la compañía encargada, como Vodafone o Telefónica.");
        	}
        	if (item == "navegador") {
        		$("#lapista").text("Navegador: Software que nos permite “navegar” por y obtener información frente a una búsqueda realizada.");
        	}
      }
    });
    });
});

/* Juan */