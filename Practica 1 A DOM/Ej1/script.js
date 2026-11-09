var titulo = document.title

// Mostrar por consola el titulo

console.log("El titulo del documento: " + titulo)

// Cambiar el nombre a los input, indicando mi nombre y mi primer apellido

var inputNombre = document.getElementById('nombre')
var inputAp = document.getElementById('apellido')

inputNombre.value = 'Adrian'
inputAp.value = 'Leon'

// Añadir un texto a la etiqueta p saludando. Por ejemplo: Hola Francisco Alarcon

document.getElementById('saludo').innerText = "Hola " + inputNombre.value + " " + inputAp.value

// Añade una etiqueta p justo debajo de la etiqueta id saludo con el texto "¿Que tal estas?"

document.write("<p>¿Qué tal estas?</p>")

// Cambiar el texto de label

var label = document.querySelector("label[for='apellido']")
label.textContent = "Apellidos"
