var titulo = document.getElementsByTagName("title")[0].innerHTML;
console.log(titulo.toUpperCase());

var inputNombre = document.getElementById("nombre");
var inputApellido = document.getElementById("apellido");
inputNombre.value = "Adrian";
inputApellido.value = "León";

var saludo = document.getElementById("saludo");
saludo.innerText = "Hola " + inputNombre.value + " " + inputApellido.value;

document.write("<p>¿Qué tal estás?</p>");

var etiquetaApellido = document.querySelector("label[for='apellido']");
etiquetaApellido.innerText = "Apellidos:";