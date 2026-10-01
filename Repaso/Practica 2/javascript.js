var dni = prompt("Introduce tu DNI");

var letra = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E'];

tam = dni.length;

if (dni > 1 && dni <99999999 && tam == 8) {
    alert("El DNI introducido es correcto, la letra correspondiente es: " + letra[dni % 23]);
}
else {
    alert("El DNI introducido no es correcto");
}