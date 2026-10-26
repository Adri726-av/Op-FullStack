const { resolve } = require('dns')
const fs = require('fs/promises')

async function procesar() {
  try {
    const datos = await fs.readFile('config.json', 'utf8')
    const config = JSON.parse(datos)
    const texto = await fs.readFile(config.entrada, 'utf-8')
    const lineas = texto.trim().split('\n').length
    const informe = `Fichero: ${config.entrada}\nLíneas: ${lineas}`
    await fs.writeFile(config.salida, informe)
    console.log('Informe creado en', config.salida)
  } catch (err) {
    console.error('Error:', err.message)
  }
}

function esperar() {
  return new Promise((resolve) => {
    setTimeout(() => resolve(console.log('Ha pasado 1 segundo, ejecuto la funcion'), procesar()), 1000)
  })
}

esperar()