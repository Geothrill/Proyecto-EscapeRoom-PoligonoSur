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


	//echo $_POST["item"];
	$item = $_POST["item"];

	$sql = 'select * from '.$item.';';

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
	//echo $resultado;
	//var_dump($resultado);
	//json_encode($resultado);



	/* Obtención de base de datos
	$resp = $resultado->fetch_assoc();
	echo $resp['res1'];
	json_encode($resp);*/


	// Ejemplo de obtener muchos datos


	$res=[];

	while($row = $resultado->fetch_object()){

		$fila=array(
		"id"=>$row->id,
	    "pregunta"=>$row->pregunta,
	    "res1"=> $row->res1,
	    "res2"=>$row->res2,
	    "res3"=>$row->res3,
	    "correcta"=>$row->correcta
		);

	    array_push($res, $fila);
	}
	echo json_encode($res);

	$resultado->free();
	$mysqli->close();
	?>
