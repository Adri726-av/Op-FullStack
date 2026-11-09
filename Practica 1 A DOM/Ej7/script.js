function aumentar() {
    var parrafo = document.getElementById('p1')
    var tamano = parseInt(parrafo.style.fontSize)
    tamano += 1
    parrafo.style.fontSize = tamano + "px"
}

function disminuir() {
    var parrafo = document.getElementById('p1')
    var tamano = parseInt(parrafo.style.fontSize)
    tamano -= 1
    parrafo.style.fontSize = tamano + "px"
}