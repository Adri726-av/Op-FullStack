var elementos = prompt("Introduce cuantos elementos de tipo <p> quieres crear: ");
var padre = document.getElementById("1");

for (let i = 0; i < elementos; i++) {
    var parrafo = document.createElement("p");
    parrafo.textContent = "Parrafo " + (i + 1);
    padre.appendChild(parrafo);
}

// ELIMINAR

