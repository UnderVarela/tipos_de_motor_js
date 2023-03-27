// Función para validar si un número es entero usando una expresión regular
function esEntero(numero) {
    // La expresión regular es /^\d+$/ que significa que solo acepta dígitos del 0 al 9 sin decimales
    var regex = /^\d+$/;
    // El método test() devuelve true si el número coincide con la expresión regular y false si no
    return regex.test(numero);
  }
  
  // Función para determinar si un número es impar usando el operador módulo (%)
  function esImpar(numero) {
    // El operador módulo devuelve el resto de la división entre dos números
    // Si el resto es diferente de cero, el número es impar
    return numero % 2 !== 0;
  }
  
  // Función para mostrar el resultado en una ventana dialog usando JavaScript
  function mostrarResultado(numero) {
    // Si el número es entero, se comprueba si es impar o par y se guarda el resultado en una variable
    if (esEntero(numero)) {
      var resultado = esImpar(numero) ? "impar" : "par";
      // Se selecciona el elemento con id="resultado" y se le asigna el texto con el número y el resultado
      document.getElementById("resultado").textContent = "El número " + numero + " es " + resultado;
      // Se selecciona el elemento con id="dialog" y se le asigna el atributo open para mostrarlo
      document.getElementById("dialog").setAttribute("open", "");
    } else {
      // Si el número no es entero, se muestra un mensaje de error
      alert("El número no es válido. Introduce un número entero.");
    }
  }
  
  // Se selecciona el elemento con id="boton" y se le asigna un evento click
  document.getElementById("boton").addEventListener("click", function() {
    // Se obtiene el valor del elemento con id="numero" y se convierte a número
    var numero = Number(document.getElementById("numero").value);
    // Se llama a la función mostrarResultado con el número como argumento
    mostrarResultado(numero);
  });
  
  // Se selecciona el elemento con id="cerrar" y se le asigna un evento click
  document.getElementById("cerrar").addEventListener("click", function() {
    // Se selecciona el elemento con id="dialog" y se le quita el atributo open para ocultarlo
    document.getElementById("dialog").removeAttribute("open");
  });