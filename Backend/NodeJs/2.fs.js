// Uno de los modulos mas importantes

const fs = require('node:fs') // A partir de de Node 16, se recomienda poner node:

const stats = fs.statSync('./archivo.txt')

console.log(
    stats.isFile(), // Si es un fichero
    stats.isDirectory(), // Si es un directorio
    stats.isSymbolicLink(), // Si es un enlace simbolico
    stats.size // tamaño en bytes
)
