var num1 = parseFloat(prompt("Escribe el primer número:"));
var num2 = parseFloat(prompt("Escribe el segundo número:"));

var division;
if (num2 == 0) {
    division = "No se puede dividir entre cero";
} else {
    division = num1 / num2;
}

alert("La suma es: " + (num1 + num2) + "\nLa resta es: " + (num1 - num2) + "\nLa multiplicación es: " + (num1 * num2) + "\nLa división es: " + division);
