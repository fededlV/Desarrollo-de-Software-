// Esto solo en los modulos nativos
// que no tienen promesas nativas
// const { promisify } = require("node:util")
// const readFilePromise = promisify(fs.readFile) //

const fs = require('node:fs')

console.log('Leyendo archivo 1...')
fs.readFile('./archivo.txt', 'utf-8', (err, text) => { // <--- ejecutas este callback
    console.log('Primer texto: ', text)
}) // readFileSync es sincrono, readFile es asincrono

console.log('----> Hacer mientras lee el archivo...')

console.log('Leyendo archivo 2...')
fs.readFile('./archivo2.txt', 'utf-8', (err, text) => { // <--- ejecutas este callback
    console.log('Segundo texto: ', text)
})
