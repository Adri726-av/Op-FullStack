function anadir() {
    var producto = prompt("Escribe el producto que desea añadir: ")
    let etiqueta = document.createElement('li')
    document.getElementById('lista').appendChild(etiqueta)
    let contenido = document.createTextNode(producto)
    etiqueta.appendChild(contenido)
}