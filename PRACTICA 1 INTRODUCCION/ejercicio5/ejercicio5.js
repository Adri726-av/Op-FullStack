var marca = prompt("¿Cuál es la marca del ordenador?");
var modelo = prompt("¿Cuál es el modelo del ordenador?");
var precio = 1000;
var descuento = 0;

if (marca == "MSI" && modelo == "PRESTIGE") {
    descuento = 5;
} else if (marca == "HP" && modelo == "Pavilion") {
    descuento = 10;
}

var precioFinal = precio - (precio * descuento / 100);

document.write("<p>Ordenador: " + marca + " " + modelo + "</p>");
document.write("<p>Descuento: " + descuento + "%</p>");
document.write("<p>Precio final: " + precioFinal + "$</p>");
