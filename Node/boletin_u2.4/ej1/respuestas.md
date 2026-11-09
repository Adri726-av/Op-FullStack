EJERCICIO 1 - RUTAS Y CODIGOS DE ESTADO

1 - La peticion de /favicon.ico la hace el navegador solo, para poner el icono en la pestaña. Mi servidor no tiene esa ruta
    en el objeto, asi que le responde con la pagina de error 404.

2 - Porque el objeto rutas se crea una sola vez, cuando arranca el servidor, y ahi la hora se calcula una vez y se queda guardada.
    Si la calculo dentro de la funcion del createServer, se ejecuta en cada peticion y por eso cambia cada vez que recargo.
