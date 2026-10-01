var contador = 0;

while (contador < 3) {
    var respuesta = prompt("¿Quién es el pintor de las Meninas?");
    if (respuesta == "Velazquez") {
        alert("¡Correcto!");
        contador = 3;
    }
    else {
        alert("¡Incorrecto! Intenta de nuevo.");
        contador++;
    }
}