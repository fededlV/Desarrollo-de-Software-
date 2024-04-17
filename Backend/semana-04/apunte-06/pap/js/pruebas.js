// Importar el módulo readline-sync
const readlineSync = require('readline-sync');

// Leer una línea de entrada desde la consola
const entrada = readlineSync.question('Por favor, ingrese una línea de texto: ');

// Imprimir la entrada del usuario
console.log(`El usuario ingresó: ${entrada}`);
