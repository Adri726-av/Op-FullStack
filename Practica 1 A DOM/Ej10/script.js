const productos = 
[{ id: 1, nombre: 'Patata', precio: 1, imagen: 'patatas.png'},
{ id: 2, nombre: 'Cebolla', precio: 1.2, imagen: 'cebolla.jpg' },
{ id: 3, nombre: 'Calabacin', precio: 2.1, imagen: 'calabacin.jpg' },
{ id: 4, nombre: 'Fresas', precio: 0.6, imagen: 'fresas.webp' }];

for (let p of productos) {
    let nombre = document.createElement('p')
    let precio = document.createElement('p')
    let img = document.createElement('img')
    document.body.appendChild(nombre)
    document.body.appendChild(precio)
    document.body.appendChild(img)
    nombre.innerText = p.nombre
    precio.innerText = p.precio
    img.src = "img/" +  p.imagen
}