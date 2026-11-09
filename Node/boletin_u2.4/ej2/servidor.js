const http = require('http')
const fs = require('fs')
const path = require('path')

const tipos = {
  '.html': 'text/html; charset=utf-8',
  '.css': 'text/css; charset=utf-8'
}

const servidor = http.createServer((req, res) => {
  console.log(req.method, req.url)

  let archivo
  let codigo

  if (req.url === '/') {
    archivo = 'index.html'
    codigo = 200
  } else if (req.url === '/contacto') {
    archivo = 'contacto.html'
    codigo = 200
  } else if (req.url === '/estilos.css') {
    archivo = 'estilos.css'
    codigo = 200
  } else {
    archivo = '404.html'
    codigo = 404
  }

  const ruta = path.join(__dirname, 'paginas', archivo)
  const tipo = tipos[path.extname(archivo)]
  
  fs.readFile(ruta, (err, datos) => {
    if (err) {
      res.writeHead(500, { 'Content-Type': 'text/plain; charset=utf-8' })
      return res.end('Error al leer el fichero')
    }
    res.writeHead(codigo, { 'Content-Type': tipo })
    res.end(datos)
  })
})

servidor.listen(3000, () => {
  console.log('Servidor en http://localhost:3000')
})
