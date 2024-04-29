const fs = require('node:fs/promises')
const { text } = require('stream/consumers')

console.log('Leyendo archivo 1...')
fs.readFile('./archivo.txt', 'utf-8')
    .then(text => {
        console.log('Primer texto: ', text)
    })

console.log('----> Hacer mientras lee el archivo...')

console.log('Leyendo archivo 2...')
fs.readFile('./archivo2.txt', 'utf-8')
    .then(text => {
        console.log('Segundo texto: ', text)
    })
