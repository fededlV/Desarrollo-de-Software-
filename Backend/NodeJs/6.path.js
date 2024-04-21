const path = require('node:path')

// Barra separadora de la ruta 
console.log(path.sep)
//Unir rutas con path.join
const filePath = path.join("content", "subfolder", "test.txt")
console.log(filePath)

const base = path.basename('\tmp\fede-secret\password.txt')
console.log(base)

const filename = path.basename('\tmp\fede-secret\password.txt', '.txt')
console.log(filename)

const extension = path.extname('imagenes.jpg')
console.log(extension)