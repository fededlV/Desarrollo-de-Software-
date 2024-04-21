// Esto solo en los modulos nativos
// que no tienen promesas nativas
// const { promisify } = require("node:util")
// const readFilePromise = promisify(fs.readFile) //

const fs = require('node:fs')

console.log('Leyendo archivo 1...')
const text = fs.readFileSync('./archivo.txt', 'utf-8')
console.log('Primer texto: ', text)

console.log('----> Hacer mientras lee el archivo...')

console.log('Leyendo archivo 2...')
const secondText = fs.readFileSync('./archivo2.txt', 'utf-8')
console.log('Segundo texto: ', secondText)
