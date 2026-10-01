var num1 = prompt("Ingrese el primer número: ");
var num2 = prompt("Ingrese el segundo número: ");

var suma = parseFloat(num1) + parseFloat(num2);
var resta = num1 - num2;
var multiplicacion = num1 * num2;
var division;

if (num2 == 0) {
    division = "No se puede dividir por cero";
} else {
    division = num1 / num2;
}

alert("La suma es: " + suma + "\nLa resta es: " + resta + "\nLa multiplicación es: " + multiplicacion + "\nLa división es: " + division);