// Crear un nuevo elemento <p>
var p = document.createElement("p");
// Asignarle un nombre de clase "miParrafo"
p.className = "miParrafo";
// Asignarle un contenido de texto con tu nombre y apellidos
p.textContent = "Tu nombre Tu apellido";
// Añadir el elemento <p> al final del <body>
document.body.append(p);

// y con appendChild cambiar la ultima linea por esta:
// Añadir el elemento <p> al final del <body>
document.body.appendChild(p);


// Pedir nombre y apellidos y pintarlos en un <p>
// Pide al usuario su nombre y apellidos
var nombre = prompt("¿Cuál es tu nombre?");
var apellidos = prompt("¿Cuáles son tus apellidos?");

// Crea un elemento <p> con la clase "miParrafo"
var parrafo = document.createElement("p");
parrafo.className = "miParrafo";

// Añade el nombre y los apellidos al contenido del párrafo
parrafo.innerHTML = nombre + " " + apellidos;

// Añade el párrafo como hijo del <body>
document.body.appendChild(parrafo);


// Lo mismo pero mediante <input> en el HTML: 
// <!-- Crea dos elementos <input> para el nombre y los apellidos -->
// <input id="nombre" type="text" placeholder="Nombre">
// <input id="apellidos" type="text" placeholder="Apellidos">

// <!-- Crea un botón para enviar los datos -->
// <button id="enviar" onclick="crearParrafo()">Enviar</button>

// <script>
// * Función que crea el párrafo con el nombre y los apellidos
// function crearParrafo() {
// * Obtiene el nombre y los apellidos de los elementos <input>
//   var nombre = document.getElementById("nombre").value;
//   var apellidos = document.getElementById("apellidos").value;

// * Crea un elemento <p> con la clase "miParrafo"
//   var parrafo = document.createElement("p");
//   parrafo.className = "miParrafo";

// * Añade el nombre y los apellidos al contenido del párrafo
//   parrafo.innerHTML = nombre + " " + apellidos;

// * Añade el párrafo como hijo del <body>
//   document.body.appendChild(parrafo);
// }
// </script>