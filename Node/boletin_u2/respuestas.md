1 - CODIGO BLOQUEANTE Y NO BLOQUEANTE

a - Primero se mostrara la letra A, luego la letra D, despues la B y por último la C. La B y la C se quedan en la pila hasta que termine el codigo, luego entre
    ellas dos elijo la B porque tiene un tiempo de 0ms, algo casi al instante y el otro es leer un fichero.

b - const texto = fs.readFileSync(__filename, 'utf8') , esta instruccion es bloqueante, ya que espera en esa linea hasta leer el fichero por el Sync. 
    Las no bloqueantes son setTimeout(() => console.log('B'), 0) y fs.readFile(__filename, 'utf8', () => console.log('C')), porque no se ejecuta hasta que lo demas se haga.

c - El programa se detiene porque el supuesto fichero no-existe.txt no esta definido (no existe)

d - La version si sale en la terminal, pero el document.title da un error, y es porque estamos en node no existe un dom.

2 - CALLBACKS, PROMESAS Y ASYNC/AWAIT

a - Porque si no estan dentro, los datos que le ha dado los anteriores readFile no los va a tener, ya que readFile es no bloqueante y si 
    no lo ponemos dentro, fuera no vamos a tener esos datos.

d - En el callback hell se necesita gestionar el error en cada operacion, sin embargo, en la promesa y el asyn/await solo se necesita gestionar el error una vez.

3 - PROYECTO CON MODULOS Y NPM

6. Cuando modifico el json no hace ningun cambio, en cambio, si hago algun cambio en el json si que ejecuta otra vez el archivo automaticamente.

7. El archivo package.json contiene la informacion del proyecto, las dependencias y los scripts y el package-lock.json tiene las versiones de los paquetes 
instalados, gracias a esto, podemos hacer un npm install y volver a instalar todos los paquetes que teniamos aunque los hayamos borrado.

8. Pues veo que cambia un poco la forma de escribirlo y que esta vez escribimos la extension del archivo, en este caso, ./notas.mjs.