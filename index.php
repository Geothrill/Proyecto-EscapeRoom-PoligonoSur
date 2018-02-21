<!DOCTYPE html>
<html>
<head>
	<title>(Nombre del juego)</title>
	<meta charset="utf-8">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<!-- Latest compiled and minified CSS -->
	<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>

	<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">
	<script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js" integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl" crossorigin="anonymous"></script>
	<link rel="stylesheet" type="text/css" href="style/estilo.css">

	<script type="text/javascript" src="js/main.js"></script>
	<script type="text/javascript" src="js/jquery.js"></script>
	<script type="text/javascript" src="js/js.js"></script>

	<!-- Juan -->
	<link href = "https://code.jquery.com/ui/1.10.4/themes/ui-lightness/jquery-ui.css"
         rel = "stylesheet">
	<script src="https://code.jquery.com/jquery-1.12.4.js"></script>
	<script src="https://code.jquery.com/ui/1.12.1/jquery-ui.js"></script>
	<!-- Juan -->

	<script type="text/javascript" src="js/reloj.js"></script>
	<script type="text/javascript" src="js/countdowntimer.js"></script>

</head>
<body class="container-fluid">

	<?php
	// Conectando, seleccionando la base de datos
	// $mysqli = new mysqli('HOST', 'USER', 'PASS', 'NOMBRE_BD');
	$mysqli = new mysqli('localhost', 'root', 'alumnado', 'juego');
	$mysqli->set_charset("utf8");

	/* En caso de que haya error... */
	if ($mysqli->connect_errno) {
		echo "No se pudo conectar a la BD";
		echo "Error: Fallo al conectarse a MySQL debido a: \n";
		echo "Errno: " . $mysqli->connect_errno . "\n";
		echo "Error: " . $mysqli->connect_error . "\n";
		exit;
	}

	// Comenzamos las consultas

	$sql = 'select * from cable;';

	// Si la consulta falla....
	if(!$resultado = $mysqli->query($sql)) {
		echo "La consulta falló ";
		echo "Error: La ejecución de la consulta falló debido a: \n";
		echo "Query: " . $sql . "\n";
		echo "Errno: " . $mysqli->errno . "\n";
		echo "Error: " . $mysqli->error . "\n";
		exit;
	}

	// No hay datos en esa consulta
	if ($resultado->num_rows === 0) {
		echo "No hay datos contenidos.";
		exit;
	}

	// objeto que contiene tablas, datos, etc...
	$resultado = $mysqli->query($sql);

	/* Obtención de base de datos
	$resp = $resultado->fetch_assoc();
	echo $resp['nombre_completo'];	*/

	/* Ejemplo de obtener muchos datos
	while($f = $resultado->fetch_object()){
	    echo $f->nombre_completo.' <br/>';
	    echo $f->fecha_nac.' <br/>';
	}
	*/
	$resultado->free();
	$mysqli->close();
	?>

<!-- Parte Javi, Popup de inicio -->
	<div class='popup'>
		<div class='cnt223 text-center'>
			<h1>Nombre del Juego</h1>
			<h2>Descripcion</h2>
			<p>
				En la oficina se encuentran ubicados <strong>7 elementos</strong> que nos facilitaran el acceso a la comunicacion, responde bien a las preguntas sobre ellos en el menor tiempo posible y conseguiras  .
				<p>

					<h2>Reglas del juego</h2>
					<div class="imgstart">
						<img src="images/lupa.png" alt="">
					</div>
					<ol class="text-left">
						<li>Dispones de 5 minutos para:</li>
						<li>Encontrar los 7 objetos que nos ayudaran a acceder a informacion</li>
						<li>Utilice la Lupa para facilitar su busqueda</li>
						<li>Una vez encontrado, ahora toca responder bien a la pregunta</li>
					</ol>

					<br/>
					<h2>Introduzca su nombre</h2>
					<input type="text" class="usuario" id="usuario"><br><br>
					<button type="button" class="btn btn-primary cerrar start" id="iniciarJuego">START</button>
				</p>
			</div>
		</div>
		<div class="row">
			<div class="col-md-10 col-xs-12">

				<div id="popup" style="display: none;">
					<div class="content-popup">
						<div class="close"><a href="#" id="close"><img src="images/close.png"/></a></div>
						<div>
							<h2>Contenido POPUP</h2>
							...
						</div>
					</div>
				</div>



									<div class='popup-pc otroPopup' style="display: none;">
										<div class='cnt223 text-center'>
											<h4 class="text-center">PC</h4>
											<p id="preguntas-pc"></p>
											<input type="radio" name="radio-pc" id="respuesta1-pc"/><br>
											<input type="radio" name="radio-pc" id="respuesta2-pc"/><br>
											<input type="radio" name="radio-pc" id="respuesta3-pc"/><br>
										</div>
									</div>


									<div class='popup-libro otroPopup' style="display: none;">
										<div class='cnt223 text-center'>
											<h4 class="text-center">Libro</h4>
											<p id="preguntas-libro"></p>
											<input type="radio" name="radio-libro" id="respuesta1-libro"/><br>
											<input type="radio" name="radio-libro" id="respuesta2-libro"/><br>
											<input type="radio" name="radio-libro" id="respuesta3-libro"/><br>
										</div>
									</div>


									<div class='popup-movil otroPopup' style="display: none;">
										<div class='cnt223 text-center'>
											<h4 class="text-center">Movil</h4>
											<p id="preguntas-movil"></p>
											<input type="radio" name="radio-movil" id="respuesta1-movil"/><br>
											<input type="radio" name="radio-movil" id="respuesta2-movil"/><br>
											<input type="radio" name="radio-movil" id="respuesta3-movil"/><br>
										</div>
									</div>


									<div class='popup-router otroPopup' style="display: none;">
										<div class='cnt223 text-center'>
											<h4 class="text-center">Router</h4>
											<p id="preguntas-router"></p>
											<input type="radio" name="radio-router" id="respuesta1-router"/><br>
											<input type="radio" name="radio-router" id="respuesta2-router"/><br>
											<input type="radio" name="radio-router" id="respuesta3-router"/><br>
										</div>
									</div>


									<div class='popup-cable otroPopup' style="display: none;">
										<div class='cnt223 text-center'>
											<h4 class="text-center">Cable</h4>
											<p id="preguntas-cable"></p>
											<input type="radio" name="radio-cable" id="respuesta1-cable"/><br>
											<input type="radio" name="radio-cable" id="respuesta2-cable"/><br>
											<input type="radio" name="radio-cable" id="respuesta3-cable"/><br>
										</div>
									</div>


									<div class='popup-proveedor otroPopup' style="display: none;">
										<div class='cnt223 text-center'>
											<h4 class="text-center">Proveedor</h4>
											<p id="preguntas-proveedor"></p>
											<input type="radio" name="radio-proveedor" id="respuesta1-proveedor"/><br>
											<input type="radio" name="radio-proveedor" id="respuesta2-proveedor"/><br>
											<input type="radio" name="radio-proveedor" id="respuesta3-proveedor"/><br>
										</div>
									</div>


									<div class='popup-navegador otroPopup' style="display: none;">
										<div class='cnt223 text-center' >
											<h4 class="text-center">Navegador</h4>
											<p id="preguntas-navegador"></p>
											<input type="radio" name="radio-navegador" id="respuesta1-navegador"/><br>
											<input type="radio" name="radio-navegador" id="respuesta2-navegador"/><br>
											<input type="radio" name="radio-navegador" id="respuesta3-navegador"/><br>
										</div>
									</div>

<!-- Fin Javi, Popup de inicio -->

				<div class="img" style="background-image: url('images/bg_ScapeRoom.jpg');">
					<p id="cuentaAtras" class="reloj"></p>
					<div class="item" id="pc"></div>
					<div class="item" id="libro"></div>
					<div class="item" id="movil"></div>
					<div class="item" id="router"></div>
					<div class="item" id="cable"></div>
					<div class="item" id="proveedor"></div>
					<div class="item" id="navegador"></div>
					<div class="" id="lupa">
						<img src="./images/lupa.png" alt="">
					</div>
				</div>
			</div>


<!-- Parte Juan, perfil usuario -->
			<div class="col-md-2 col-xs-12">
				<div class="img-gui" style="background-image: url('images/gui-background.jpg');">
					<div id="perfil" class="rounded">
						<img src="images/perfil.jpg" class="rounded-circle" alt="perfil" width="100" height="100">
						<p class="playername">PlayerName</p>
					</div>

					<div id="info" class="rounded">
						<p><strong>Has encontrado</strong></p>
						<h3 class="display-4"><strong class="text-primary" id="itemsactuales">0</strong><strong class="text-danger">/7</strong></h3><i>items</i><hr>
						<p><strong>Tienes</strong></p>
						<h3 class="display-4"><strong class="text-primary" id="puntosactuales">0</strong></h3><i>puntos</i>
					</div>

					<div id="vidas" class="rounded">
						<p><strong>Vidas restantes</strong></p>
						<img src="images/vida.png" id="vida1" class="img-responsive" alt="vida" width="50" height="45">
						<img src="images/vida.png" id="vida2" class="img-responsive" alt="vida" width="50" height="45">
						<img src="images/vida.png" id="vida3" class="img-responsive" alt="vida" width="50" height="45">
					</div>


					<div id="pista" class="rounded">
						<p><strong>Pista de la lupa</strong></p>
						<p id="lapista">"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris"</p>
					</div>
<!-- Fin Juan, perfil usuario -->
				</div>
			</div>
		</div>
	</body>
	</html>
