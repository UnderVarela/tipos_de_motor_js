// Para crear un script donde trabajas con tipos de motor, puedes usar la función `prompt()` para pedir el tipo de motor al usuario y la sentencia `switch` para mostrar un mensaje según el valor introducido. Por ejemplo, puedes escribir algo así:
// Este código mostrará una ventana emergente pidiendo el tipo de motor y luego otra ventana emergente con el mensaje correspondiente:

function dimeTipoMotor() {
  // Pedir el tipo de motor al usuario
  var tipo = prompt("Introduce el tipo de motor (1, 2, 3 o 4)");

  // Mostrar un mensaje según el tipo de motor
  switch (tipo) {
    case "0":
      alert("No hay establecido un valor definido para el tipo de bomba");
      break;
    case "1":
      alert("La bomba es una bomba de agua");
      break;
    case "2":
      alert("La bomba es una bomba de gasolina");
      break;
    case "3":
      alert("La bomba es una bomba de hormigón");
      break;
    case "4":
      alert("La bomba es una bomba de pasta alimenticia");
      break;
    default:
      alert("No existe un valor válido para tipo de bomba");
  }
}

// Llamar a la función
dimeTipoMotor();

// Variante con 'else if':
// Este código hará lo mismo que el anterior, pero usando `if-else` en lugar de `switch`.

function dimeTipoMotor() {
  // Pedir el tipo de motor al usuario
  var tipo = prompt("Introduce el tipo de motor (1, 2, 3 o 4)");

  // Mostrar un mensaje según el tipo de motor
  if (tipo == "0") {
    alert("No hay establecido un valor definido para el tipo de bomba");
  } else if (tipo == "1") {
    alert("La bomba es una bomba de agua");
  } else if (tipo == "2") {
    alert("La bomba es una bomba de gasolina");
  } else if (tipo == "3") {
    alert("La bomba es una bomba de hormigón");
  } else if (tipo == "4") {
    alert("La bomba es una bomba de pasta alimenticia");
  } else {
    alert("No existe un valor válido para tipo de bomba");
  }
}

// Llamar a la función
dimeTipoMotor();

// Variante refactorizada: 
// Una forma de hacerlo es usando un objeto para almacenar los mensajes según el tipo de motor y luego acceder al mensaje usando la notación de corchetes. Por ejemplo, puedes escribir algo así:
// Este código es más corto y más fácil de modificar si se cambian los mensajes o se añaden más tipos de motor.


function dimeTipoMotor() {
  // Pedir el tipo de motor al usuario
  var tipo = prompt("Introduce el tipo de motor (1, 2, 3 o 4)");

  // Crear un objeto con los mensajes según el tipo de motor
  var mensajes = {
    "0": "No hay establecido un valor definido para el tipo de bomba",
    "1": "La bomba es una bomba de agua",
    "2": "La bomba es una bomba de gasolina",
    "3": "La bomba es una bomba de hormigón",
    "4": "La bomba es una bomba de pasta alimenticia"
  };

  // Mostrar el mensaje correspondiente o uno por defecto si no existe
  alert(mensajes[tipo] || "No existe un valor válido para tipo de bomba");
}

// Llamar a la función
dimeTipoMotor();



