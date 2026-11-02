// Cuenta cuántos ficheros hay de cada extensión en una carpeta
const fs = require('fs')
const path = require('path')

const carpeta = process.argv[2] || __dirname
const conteo = {}

try {
  fs.readdirSync(carpeta).forEach((nombre) => {
    const ruta = path.join(carpeta, nombre)
    if (!fs.statSync(ruta).isFile()) return // ignoramos subcarpetas
    const ext = path.extname(nombre) || '(sin extensión)'
    conteo[ext] = (conteo[ext] || 0) + 1
  })
  console.table(conteo)
} catch (err) {
  console.error('Error:', err.message)
  process.exit(1)
}
