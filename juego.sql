CREATE DATABASE juego;

USE juego;


CREATE TABLE pc (
	id int,
    pregunta varchar(255),
    res1 varchar(255),
    res2 varchar(255),
    res3 varchar(255),
    correcta int
);
CREATE TABLE router (
	id int,
    pregunta varchar(255),
    res1 varchar(255),
    res2 varchar(255),
    res3 varchar(255),
    correcta int
);

CREATE TABLE proveedor (
	id int,
    pregunta varchar(255),
    res1 varchar(255),
    res2 varchar(255),
    res3 varchar(255),
    correcta int
);

CREATE TABLE movil (
	id int,
    pregunta varchar(255),
    res1 varchar(255),
    res2 varchar(255),
    res3 varchar(255),
    correcta int
);

CREATE TABLE libro (
	id int,
    pregunta varchar(255),
    res1 varchar(255),
    res2 varchar(255),
    res3 varchar(255),
    correcta int
);

CREATE TABLE navegador (
	id int,
    pregunta varchar(255),
    res1 varchar(255),
    res2 varchar(255),
    res3 varchar(255),
    correcta int
);

CREATE TABLE cable (
	id int,
    pregunta varchar(255),
    res1 varchar(255),
    res2 varchar(255),
    res3 varchar(255),
    correcta int
);

CREATE TABLE ranking (
    jugador varchar(255),
    tiempo long
);



INSERT INTO pc (id, pregunta, res1, res2, res3, correcta)
VALUES (1, "¿Qué requisitos son necesarios para usar internet?"
, "Conexión a internet y un monitor", "Conexión a internet y cualquier dispositivo con red"
, "Un dispositivo con teclado manual o táctil que permita navegar",2); 

INSERT INTO pc (id, pregunta, res1, res2, res3, correcta)
VALUES (2, "¿Cómo se le denomina también al navegador web?"
, "Bowser", "Brownie"
, "Browser",3);

INSERT INTO pc (id, pregunta, res1, res2, res3, correcta)
VALUES (3, "¿Es peligroso navegar por la red?"
, "Si, siempre", "No, si usas antivirus"
, "Sí, pero si usas cortafuegos y antivirus puedes navegar de forma totalmente segura",1);

INSERT INTO cable (id, pregunta, res1, res2, res3, correcta)
VALUES (1, "¿El cable Ethernet..."
, "Permite que podamos acceder a internet desde cualquier dispositivo de casa", "Es el único componente necesario para poder navegar a internet"
, "No permite acceder a la red de redes sin proveedor de internet",3);

INSERT INTO cable (id, pregunta, res1, res2, res3, correcta)
VALUES (2, "Es importante, a la hora de instalar cableado de red no sobrepasar los…"
, "100m", "90m"
, "50m",1);

INSERT INTO cable (id, pregunta, res1, res2, res3, correcta)
VALUES (3, "Señala la opción incorrecta"
, "Un cable de fibra es más frágil que un cable de cobre", "Extender cable por partes altas de la estructura favorece la velocidad de internet"
, "Es importante que el cable sea de color blanco, ya que es el que indica la norma",2);

INSERT INTO libro (id, pregunta, res1, res2, res3, correcta)
VALUES (1, "¿Qué garantiza el derecho a la información?"
, "Tener internet en casa.", "La libertad de pensamiento."
, "Que la información sea gratuita para todos.",2);

INSERT INTO libro (id, pregunta, res1, res2, res3, correcta)
VALUES (2, "El Pacto Universal de Derechos Civiles y Políticos establece que..."
, "Toda persona tiene derecho a tener internet en casa.", "Toda persona tiene derecho a tener una casa."
, "Toda persona tiene derecho a la libertad de expresión.",3);

INSERT INTO libro (id, pregunta, res1, res2, res3, correcta)
VALUES (3, "¿Qué organismo tiene como mandato “facilitar la libre circulación de las ideas por medio de la palabra y de la imagen”?"
, "La UNESCO.", "La ONU."
, "El Gobierno de España.",1);

INSERT INTO navegador (id, pregunta, res1, res2, res3, correcta)
VALUES (1, "¿A qué derechos nos acogemos en internet?"
, "A la LOPD.", "A los recogidos en la Constitución."
, "A los que el navegador nos proporcione.",1);

INSERT INTO navegador (id, pregunta, res1, res2, res3, correcta)
VALUES (2, "Una vez publicada información personal en internet..."
, "Es imposible eliminarla de internet y permanece para siempre.", "Es permanente, escapa de tu control y es accesible desde cualquier lugar del mundo."
, "Pierdes el derecho a la intimidad.",2);

INSERT INTO navegador (id, pregunta, res1, res2, res3, correcta)
VALUES (3, "¿Qué derecho tenemos para eliminar información personal no deseada en internet?"
, "El Derecho a la Privacidad.", "Ninguno, una vez se publica algo en internet no puede eliminarse."
, "El Derecho al Olvido.",3);

INSERT INTO proveedor (id, pregunta, res1, res2, res3, correcta)
VALUES (1, "¿Qué es el deber de la información al consumidor?"
, "Ninguna de las posteriores es correcta.", "El proveedor debe dar al consumidor el producto que ha comprado."
, "El consumidor debe tener claro lo que compra y el uso que tiene.",1);


INSERT INTO proveedor (id, pregunta, res1, res2, res3, correcta)
VALUES (2, "¿Qué es la AGPD?"
, "La Agencia Española de Protección de Datos.", "La Agencia Gubernamental de Derechos Propagandísticos."
, "La Asociación Global  de Protección de Datos.",1);


INSERT INTO proveedor (id, pregunta, res1, res2, res3, correcta)
VALUES (3, "¿Qué hay que hacer antes de dar nuestros datos en internet?"
, "Rellenar el formulario.", "Revisar que todos los campos están rellenados correctamente."
, "Ninguna de las anteriores es correcta.",3);

INSERT INTO movil (id, pregunta, res1, res2, res3, correcta)
VALUES (1, "¿En que año salio al  mercado el primer teléfono móvil?"
, "1990", "1983"
, "1812",2);

INSERT INTO movil (id, pregunta, res1, res2, res3, correcta)
VALUES (2, "¿Que compañia incorporó el acceso a internet por primera vez en un teléfono móvil?"
, "Nokia 7110", "Alcatel OneTouch"
, "Nokia 3210",1);

INSERT INTO movil (id, pregunta, res1, res2, res3, correcta)
VALUES (3, "Solo una de estas empresas vende móviles con el sistema operativo         Ubuntu"
, "bq", "asus"
, "acer",1);


INSERT INTO router (id, pregunta, res1, res2, res3, correcta)
VALUES (1, "¿Qué nos facilita un router?"
, "El acceso a WIFI", "El acceso a internet"
, "El acceso a WIFI y Bluetooth",2);

INSERT INTO router (id, pregunta, res1, res2, res3, correcta)
VALUES (2, "La luces de un router..."
, "Indican si está encendido el router", "Indican si el router es interoperable o no"
, "Indican el estado del router",3);

INSERT INTO router (id, pregunta, res1, res2, res3, correcta)
VALUES (3, "Señala la opción falsa"
, "Un módem tiene más funcionalidades que un router", "El router nos facilita WIFI en un radio considerable"
, "Los proveedores de internet son los que te facilitan el router en la mayoría de los casos",1);



