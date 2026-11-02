// Uso: node bytes.js "5 €"
const texto = process.argv.slice(2).join(' ')

console.log('Caracteres:', texto.length)
console.log('Bytes     :', Buffer.byteLength(texto))
console.log('Buffer    :', Buffer.from(texto))

// Abecedario en mayúsculas con un Buffer
const buf = Buffer.alloc(26) // 26 bytes a cero
for (let i = 0; i < buf.length; i++) {
  buf[i] = 65 + i // 65 es la 'A' en ASCII
}
console.log(buf.toString('ascii'))
