var saldo = 30;
var dado = 1;

while (saldo > 0 && saldo < 120 && dado != 0) {
    dado = parseInt(prompt("Tienes " + saldo + "€. ¿A qué número apuestas (1-6)? Pulsa 0 para salir"));

    if (dado >= 1 && dado <= 6) {
        var apuesta = parseInt(prompt("¿Cuánto quieres apostar?"));

        if (apuesta > 0 && apuesta <= saldo) {
            var resultado = parseInt(Math.random() * 6) + 1;

            if (resultado == dado) {
                saldo = saldo + apuesta + 10;
                alert("Ha salido el " + resultado + ". Has ganado. Tu saldo es " + saldo + "€");
            } else {
                saldo = saldo - apuesta;
                alert("Ha salido el " + resultado + ". Has perdido. Tu saldo es " + saldo + "€");
            }
        } else {
            alert("Cantidad no válida");
        }
    }
}

alert("Fin del juego. Te quedas con " + saldo + "€");
