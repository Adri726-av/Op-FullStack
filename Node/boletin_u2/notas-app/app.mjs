import { media, aprobados, mejor} from './notas.mjs'
import fs from 'node:fs/promises'
import fs from 'picocolors'

async function mostrar() {
    const contenido = await fs.readFile('notas.json', 'utf8')
    const notas = JSON.parse(contenido)

    // Mostrar la media (2 decimales)
    const resultadoMedia = media(notas)
    console.log('La media de los alumnos es:', resultadoMedia.toFixed(2))

    // Mostrar el numero de aprobados
    const resultadoAprobados = aprobados(notas)
    console.log('Hay ', resultadoAprobados.length, ' aprobados')

    // Mostrar el nombre del mejor alumno
    const alumno = mejor(notas)
    console.log(alumno.nombre, ' es el mejor alumno')

    // Mostrar alumno en verde (aprobado) o rojo (suspenso)
    for (let i = 0; i < notas.length; i++) {
        if (notas[i].nota < 5) {
            console.log(pc.red(notas[i].nombre + ' - ' + notas[i].nota))
        }
        else {
            console.log(pc.green(notas[i].nombre + ' - ' + notas[i].nota))
        }
    }
}

mostrar()