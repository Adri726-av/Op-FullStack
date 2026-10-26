const fs = require('fs/promises')

fs.readFile('config.json', 'utf8')
    .then((datos) => {
        const config = JSON.parse(datos)
        return fs.readFile(config.entrada, 'utf8')
        .then((texto) => {
            const lineas = texto.trim().split('\n').length
            const informe = `Fichero: ${config.entrada}\nLíneas: ${lineas}`
            return fs.writeFile(config.salida, informe)
        })
    })
    .catch((err) => console.error('Error:', err.message))
