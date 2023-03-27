
// // Pedir la base y la altura del triángulo al usuario. Metodo 1:

// var base = parseInt(prompt("Introduce la base:"));
// var altura = parseInt(prompt("Introduce la altura:"));

// // Calcular el área usando la fórmula
// var area = (base * altura) / 2;

// // Mostrar el resultado al usuario
// alert("El área del triángulo es " + area);


// Metodo dos pintando en el html.
// Definir una función para calcular el área
function calcularArea() {
    // Obtener los valores de los inputs
    var base = parseInt(document.getElementById("base").value);
    var altura = parseInt(document.getElementById("altura").value);

    // Calcular el área usando la fórmula
    var area = (base * altura) / 2;

    // Mostrar el resultado en el div
    document.getElementById("resultado").innerHTML = "El área del triángulo es " + area;
  }
