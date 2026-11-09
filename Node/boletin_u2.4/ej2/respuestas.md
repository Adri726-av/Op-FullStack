EJERCICIO 2 - UNA WEB SERVIDA DESDE FICHEROS

1 - Las dos peticiones son GET / y GET /estilos.css. La primera es la pagina que he pedido y la segunda sale porque el html
    tiene el link al css, asi que el navegador lo lee y pide tambien la hoja de estilos. A veces tambien sale el favicon.

2 - El problema es que readFile lee el fichero entero y lo carga en la memoria antes de enviarlo, y con 500 MB gastaria mucha RAM
    y tardaria en empezar a enviar. Usaria un stream, fs.createReadStream(ruta).pipe(res), que lo va enviando a trozos.
