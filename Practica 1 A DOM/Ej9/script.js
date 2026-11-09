function anadir() {
    var producto = prompt("Escribe el producto que desea añadir: ")
    let etiqueta = document.createElement('li')
    document.getElementById('lista').appendChild(etiqueta)
    let contenido = document.createTextNode(producto)
    etiqueta.appendChild(contenido)
    let botonSi = document.createElement('button')
    botonSi.innerText = "Si"
    let botonNo = document.createElement('button')
    botonNo.innerText = "No"
    etiqueta.appendChild(botonSi)
    etiqueta.appendChild(botonNo)
    botonSi.onclick = function() {
        etiqueta.style.color = "green"
        etiqueta.style.fontStyle = "italic"
    }
    botonNo.onclick = function() {
        etiqueta.style.color = "red"
        etiqueta.style.fontWeight = "bold"
        etiqueta.style.fontStyle = "normal"
    }
}