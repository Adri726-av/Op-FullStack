function media(lista) {
    const suma = lista.reduce((total, alumno) => total + alumno.nota, 0)
    const media = suma / lista.length
    return media
}

function aprobados(lista) {
    const aprobados = lista.filter((alumno) => alumno.nota >= 5)
    return aprobados
}

function mejor(lista) {
    const alumno = lista.reduce((total, alumno) => {
        if (alumno.nota > total.nota) {
            return alumno
        }
        return total
    }, lista[0])
    return alumno
}

export { media, aprobados, mejor}