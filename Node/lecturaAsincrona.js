const fs = require('fs')
console.log('1. Antes de leer el fihcero')
fs.readFile('archivo.txt', 'utf8', (err, texto) => {
    if (err) return console.error(err.message)
    console.log('3. Contenido:', texto.trim())
})
console.log('2. Perdida la lectura (no espero)')