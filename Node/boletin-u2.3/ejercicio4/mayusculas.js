// Copia un fichero pasando todo el texto a mayúsculas
const fs = require('fs')
const { stdin, stdout } = process

stdout.write('¿Qué fichero quieres copiar?: ')
stdin.once('data', (resp) => {
  const origen = resp.toString().trim()
  const destino = `MAYUS-${origen}`
  let bytes = 0
  let escritura

  const lectura = fs.createReadStream(origen, 'utf8')

  // Creamos la copia solo cuando el fichero existe y se ha abierto
  lectura.on('open', () => {
    escritura = fs.createWriteStream(destino)
    escritura.on('finish', () => {
      console.log(`Creado ${destino} (${bytes} bytes)`)
      process.exit() // stdin sigue abierto: hay que terminar a mano
    })
  })

  lectura.on('data', (chunk) => {
    bytes += Buffer.byteLength(chunk)
    escritura.write(chunk.toUpperCase())
  })

  lectura.on('end', () => escritura.end())

  lectura.on('error', (err) => {
    console.error('Error:', err.message)
    process.exit(1)
  })
})
