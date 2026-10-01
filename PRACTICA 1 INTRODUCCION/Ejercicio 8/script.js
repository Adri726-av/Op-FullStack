var dinero = 30;
var apuesta;
while (dinero > 0 && dinero < 120 && apuesta != 0) {
    var apuesta = prompt("Ingrese el numero a apostar (Entre el 1 y el 6): ");
    var cantidad = prompt("Ingrese la cantidad a apostar: ");

    var dado = Math.floor(Math.random() * 7);

    if (apuesta == dado) {
        alert("Felicidades, ganaste!, el numero era: " + dado);
        dinero += 10;
    }
    else {
        alert("Perdiste, el numero era: " + dado);
        dinero -= cantidad;
    }
    alert("Dinero restante: " + dinero);
}
