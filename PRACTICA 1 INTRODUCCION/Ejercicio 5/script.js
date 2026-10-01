var marca = prompt("Ingrese la marca de el ordenador: ");
var modelo = prompt("Ingrese el modelo del ordenador: ");

if (marca == "MSI" && modelo == "PRESTIGE") {
    alert("Tendras un descuento del 5%");
    let precio = 1000 * 0.95;
    document.write("<h3> El ordenador te costara : " + precio);
}
else if (marca == "HP" && modelo == "Pavilion") {
    alert("Tendras un descuento del 10%");
    let precio = 1000 * 0.90;
    document.write("<h3> El ordenador te costara : " + precio);
}
