function cargar() {
    document.getElementById('p2').style.display = "none"
    document.getElementById('p3').style.display = "none"
}

function mostrar() {
    if (document.getElementById('boton').innerText === "Mostrar mas...") {
        document.getElementById('p2').style.display = "block"
        document.getElementById('p3').style.display = "block"
        document.getElementById('boton').innerText = "Mostrar menos..." 
    } else if (document.getElementById('boton').innerText === "Mostrar menos...") {
        document.getElementById('p2').style.display = "none"
        document.getElementById('p3').style.display = "none"
        document.getElementById('boton').innerText = "Mostrar mas..." 
    }
}

window.onload = cargar