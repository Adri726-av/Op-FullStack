const fs = require('fs')
console.log('A')
setTimeout(() => console.log('B'), 0)
fs.readFile(__filename, 'utf8', (err) => {
    if (err) {
        console.error('Error: ', err.message)
        return
    }
    console.log('C')
})
const texto = fs.readFileSync(__filename, 'utf8')
console.log('D', texto.length > 0)

console.log(process.version)
console.log(document.title)