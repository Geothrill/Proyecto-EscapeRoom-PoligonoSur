<?php
	// Conectando, seleccionando la base de datos
	// $mysqli = new mysqli('HOST', 'USER', 'PASS', 'NOMBRE_BD');
	$mysqli = new mysqli('localhost', 'root', '', 'juego');
	$mysqli->set_charset("utf8");

	/* En caso de que haya error... */
	if ($mysqli->connect_errno) {
		echo "No se pudo conectar a la BD";
		echo "Error: Fallo al conectarse a MySQL debido a: \n";
		echo "Errno: " . $mysqli->connect_errno . "\n";
		echo "Error: " . $mysqli->connect_error . "\n";
		exit;
	}

	$player = $_POST["player"];
	$marca = $_POST["marca"];

	$sql = 'insert into ranking (jugador, tiempo) values("'.$player.'","'.$marca.'");';

	// objeto que contiene tablas, datos, etc...
	$resultado = $mysqli->query($sql);
	/* El error daba en la siguiente línea. Al parecer si limpias la memoria no puedes solicitar más peticiones.*/
	//$resultado->free();



	/* Envío de ranking al cliente. Uso la misma variable $resultado, para que asi se pise y poder hacer ->free */ 
	$res=[];
	$sql1 = 'select * from ranking;';
	$resultado = $mysqli->query($sql1);

	while($row = $resultado->fetch_object()){

		$fila=array(
		"jugador"=>$row->jugador,
	    "tiempo"=>$row->tiempo
		);
	    array_push($res, $fila);
	}
	echo json_encode($res);
	

	$resultado->free();
	$mysqli->close();
	?>
