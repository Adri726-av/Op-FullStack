var acertado = false;

for (var i = 1; i <= 3 && acertado == false; i++) {
    var respuesta = prompt("¿Quién es el pintor de las Meninas?");
    if (respuesta == "Velázquez" || respuesta == "Velazquez") {
        acertado = true;
    }
}

if (acertado) {
    alert("Correcto! Ha acertado.");
} else {
    alert("Lo siento! La respuesta correcta es Velázquez");
}
