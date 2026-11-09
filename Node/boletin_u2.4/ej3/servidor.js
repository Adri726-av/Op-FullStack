const http = require('http')
const fs = require('fs')
const path = require('path')

const HTML = { 'Content-Type': 'text/html; charset=utf-8' }
const JSON_TIPO = { 'Content-Type': 'application/json; charset=utf-8' }
const firmas = []

const servidor = http.createServer((req, res) => {
  console.log(req.method, req.url)

  const url = new URL(req.url, 'http://localhost')

  if (req.method === 'GET' && url.pathname === '/') {
    const ruta = path.join(__dirname, 'recursos', 'formulario.html')
    fs.readFile(ruta, (err, datos) => {
      if (err) {
        res.writeHead(500)
        return res.end('Error al leer el fichero')
      }
      res.writeHead(200, HTML)
      res.end(datos)
    })

  } else if (req.method === 'GET' && url.pathname === '/firmas') {
    const nombre = url.searchParams.get('nombre')
    let resultado = firmas
    if (nombre) {
      resultado = firmas.filter((f) => f.nombre === nombre)
    }
    res.writeHead(200, JSON_TIPO)
    res.end(JSON.stringify(resultado, null, 2))

  } else if (req.method === 'POST' && url.pathname === '/firmar') {
    let cuerpo = ''
    req.on('data', (chunk) => { cuerpo += chunk })
    req.on('end', () => {
      const datos = Object.fromEntries(new URLSearchParams(cuerpo))
      const nombre = (datos.nombre || '').trim()
      const mensaje = (datos.mensaje || '').trim()

      if (nombre === '' || mensaje === '' || mensaje.length > 200) {
        res.writeHead(400, HTML)
        res.end('<h1>Error</h1><p>El nombre y el mensaje son obligatorios, y el mensaje puede tener como máximo 200 caracteres.</p><a href="/">Volver</a>')
      } else {
        firmas.push({ nombre: nombre, mensaje: mensaje, fecha: new Date() })
        res.writeHead(201, HTML)
        res.end('<h1>Gracias por firmar, ' + nombre + '</h1><a href="/">Volver</a>')
      }
    })

  } else {
    res.writeHead(404, HTML)
    res.end('<h1>Error 404</h1><a href="/">Volver</a>')
  }
})

servidor.listen(3000, () => {
  console.log('Servidor en http://localhost:3000')
})
