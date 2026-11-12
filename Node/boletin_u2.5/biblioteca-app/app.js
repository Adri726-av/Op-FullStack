// middleware
const express = require('express')
const app = express()
const PORT = 3000

// Motor de plantillas
app.set('view engine', 'ejs')
app.set('views', __dirname + "/views")

app.use((req, res, next) => {
  // 1. saca la hora
  const hora = new Date().toLocaleTimeString()
  // 2. console.log con hora, método y url
  console.log(`${hora} ${req.method} ${req.url}`)
  // 3. llama a next()
  next()
})

// 1. Estaticos: CSS, JS e imagenes de public/
app.use(express.static(__dirname + '/public'))

// 2. Rutas: cada una envia a su pagina
app.get('/', (req, res) => {
  res.render('index', {titulo: 'Inicio'})
})

app.get('/horario', (req, res) => {
  const horario = [
    { dia: 'Lunes', horas: '8:30 - 14:30' },
    { dia: 'Martes', horas: '8:30 - 14:30' },
    { dia: 'Miércoles', horas: '8:30 - 14:30' },
    { dia: 'Jueves', horas: '8:30 - 14:30 y 16:00 - 19:00' },
    { dia: 'Viernes', horas: '8:30 - 13:30' }
  ]
  res.render('horario', { titulo: 'Horario', horario })
})

// 3. 404: siempre es la ultima
app.use((req, res) => {
  res.status(404).render('404', {titulo: 'Error 404'})
})

app.listen(PORT, () => {
  console.log(`Servidor en http://localhost:${PORT}`)
})