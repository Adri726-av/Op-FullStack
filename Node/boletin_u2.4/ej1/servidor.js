const http = require('http')

const HTML = { 'Content-Type': 'text/html; charset=utf-8' }

const rutas = {
  '/': '<h1>Inicio</h1><ul><li><a href="/sobre-mi">Sobre mí</a></li><li><a href="/aficiones">Aficiones</a></li><li><a href="/hora">Hora</a></li></ul>',
  '/sobre-mi': '<h1>Sobre mí</h1><p>Me llamo Adrian y estudio 2º de DAM. Me gusta jugar videojuegos, dormir y comer.</p>',
  '/aficiones': '<h1>Aficiones</h1><ul><li>Afición 1</li><li>Afición 2</li><li>Afición 3</li></ul>'
}

const servidor = http.createServer((req, res) => {
    console.log(req.method, req.url)
    const contenido = rutas[req.url]

    if (req.url === '/hora') {
        res.writeHead(200, HTML)
        res.end('<h1>Hora</h1><p>Son las ' + new Date().toLocaleTimeString('es-ES') + '</p>')
    }
    if (contenido) {
        res.writeHead(200, HTML)
        res.end(contenido)
    }
    else {
        res.writeHead(404, HTML)
        res.end('<h1>Error 404: la ruta no existe</h1><a href="/">Volver al inicio</a>')
    }
})

servidor.listen(3000, () => {
    console.log('Servidor en http://localhost:3000')
})

