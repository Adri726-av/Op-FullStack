const fs = require('fs/promises')
const { readFile, read } = require('node:fs')

async function unirTodo() {
    try {
        const a = await readFile('a.txt', 'utf8')
        const b = await readFile('b.txt', 'utf8')
        const c = await readFile('c.txt', 'utf8')
        const texto = a + b + c
        await fs.writeFile("texto.txt", texto)
        console.log('todo.txt creado correctamente')
    } catch (err) {
        console.log('Error: ', err.message)
    }
}

unirTodo()