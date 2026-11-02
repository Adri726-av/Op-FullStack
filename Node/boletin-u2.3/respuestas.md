1 - LA DOCUMENTACION Y LOS FICHEROS DE UNA CARPETA

a - En la documentacion de nodejs.org/api el modulo querystring sale como Legacy (nivel 3), esto quiere decir que se mantiene pero ya hay alternativas mejores, y la que recomiendan es URLSearchParams. El constructor new Buffer() sale como Deprecated (nivel 0), que significa que esta obsoleto y no se debe usar, y en su lugar proponen Buffer.alloc() o Buffer.from().

b - En fs.readdir(path[, options], callback) son obligatorios path (la ruta de la carpeta) y callback (la funcion que recibe err y los ficheros). El unico opcional es options. Lo se porque en la documentacion lo que va entre corchetes es opcional.


2 - TEMPORIZADOR DE COCINA

e - El programa termina solo despues del clearInterval porque mientras haya un setInterval activo Node sigue esperando a que se ejecute otra vez, asi que no acaba. Cuando lo paramos con clearInterval ya no queda nada pendiente y se cierra solo. Si no lo llamara, seguiria contando cada segundo (saldrian numeros negativos) y no pararia hasta darle a Ctrl + C.


3 - CARACTERES Y BYTES

b - Esta es la tabla que sale al ejecutarlo:

| Texto  | Caracteres | Bytes |
|--------|-----------:|------:|
| hola   | 4          | 4     |
| España | 6          | 7     |
| 5 €    | 3          | 5     |
| 😀     | 2          | 4     |

No siempre coinciden porque Node usa UTF-8 y ahi cada caracter puede ocupar entre 1 y 4 bytes. Las letras normales ocupan 1 byte, pero la ñ ocupa 2, el € ocupa 3 y el emoji ocupa 4. Ademas, el emoji sale con 2 caracteres porque length cuenta en UTF-16 y para eso el emoji son 2 unidades.

4 - COPIAR UN FICHERO EN MAYUSCULAS

e - No puedo usar lectura.pipe(escritura) porque pipe copia los trozos tal cual los lee, sin tocarlos, y yo necesito pasar cada trozo a mayusculas antes de escribirlo, por eso escucho el evento 'data' y escribo chunk.toUpperCase(). Hace falta process.exit() al final porque stdin se queda abierto esperando que escriba algo por teclado y eso mantiene el programa vivo, aunque ya haya terminado de copiar.

6 - UN SERVIDOR WEB CON VARIAS RUTAS

e - En la terminal sale tambien GET /favicon.ico porque el navegador pide solo ese archivo (el iconito de la pestaña) ademas de la pagina que yo he pedido, y como mi servidor no tiene esa ruta le responde con el 404. Si arranco el servidor dos veces a la vez en el mismo puerto, la segunda vez da error EADDRINUSE (address already in use), porque el puerto ya lo esta usando la primera.
