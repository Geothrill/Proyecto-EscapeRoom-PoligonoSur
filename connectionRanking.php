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

	$player = $_POST["player"];
	$marca = $_POST["marca"];

	$sql = 'insert into ranking (jugador, tiempo) values("'.$player.'","'.$marca.'");';


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


	/* Envío de ranking al cliente */
	// objeto que contiene tablas, datos, etc...
	$res=[];
	$sql1 = 'select * from ranking;';
	$resultado1 = $mysqli->query($sql1);

	while($row = $resultado1->fetch_object()){

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
