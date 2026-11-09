EJERCICIO 3 - LIBRO DE VISITAS CON GET Y POST

1 - Las firmas han desaparecido y /firmas devuelve un [] vacio. Es porque las firmas estan guardadas en un array en memoria,
    y al parar el servidor se borra, asi que al volver a lanzarlo el array empieza otra vez vacio.

2 - Porque la funcion se ejecuta en cada peticion, y asi cada peticion tiene su propio cuerpo vacio. Si estuviera al principio
    del fichero seria una sola variable para todas, y los datos de un POST se sumarian a los de los anteriores y se mezclarian.

3 - Si, hace falta, porque el required solo lo mira el navegador y es facil saltarselo (quitandolo desde F12 o mandando la peticion
    con Postman). Ademas el required no controla los 200 caracteres. El servidor no se puede fiar de lo que le llega.

4 - Sale "Gracias por firmar, Hola" con el Hola grande y en rojo, porque el navegador toma el nombre como html y no como texto.
    Es un problema de seguridad porque alguien podria poner un <script> y ejecutar codigo suyo en el navegador de otros (XSS).
    Se evitaria cambiando &, < y > por &amp;, &lt; y &gt; antes de escribirlo en la respuesta.
