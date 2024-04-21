// Importar la librería seedrandom
const seedrandom = require('seedrandom');

// Semilla para generar números aleatorios
const semilla = '1763519';
seedrandom(semilla, { global: true });

// Función para generar un número aleatorio entero utilizando int32
function generarNumeroAleatorio() {
    return Math.floor(Math.random() * 0x80000000);
}

// Generar 1000000 de números aleatorios enteros
const numerosAleatorios = [];
for (let i = 0; i < 1000000; i++) {
    numerosAleatorios.push(generarNumeroAleatorio());
}

// 1. Cantidad de números positivos y cantidad de números negativos.
let positivos = 0;
let negativos = 0;
numerosAleatorios.forEach(numero => {
    if (numero >= 0) positivos++;
    else negativos++;
});

console.log("1. Cantidad de números positivos:", positivos);
console.log("   Cantidad de números negativos:", negativos);

// 2. Cantidad de números cuyo resto al dividirlos en 7 sea exactamente 0, 3, 5 o 6.
const restos = [0, 3, 5, 6];
let cantidadRestos = Array(4).fill(0);
numerosAleatorios.forEach(numero => {
    let resto = Math.abs(numero % 7);
    if (restos.includes(resto)) {
        cantidadRestos[restos.indexOf(resto)]++;
    }
});

console.log("\n2. Cantidad de números cuyo resto al dividirlos en 7 sea exactamente 0, 3, 5 o 6:");
restos.forEach((resto, index) => {
    console.log("   Resto", resto + ":", cantidadRestos[index]);
});

// 3. Un arreglo de contadores que indique la cantidad de números según su anteúltimo dígito
let contadoresAnteultimoDigito = Array(10).fill(0);
numerosAleatorios.forEach(numero => {
    let anteultimoDigito = Math.floor((Math.abs(numero) / 10) % 10);
    contadoresAnteultimoDigito[anteultimoDigito]++;
});

console.log("\n3. Contadores de números según su anteúltimo dígito:");
console.log(contadoresAnteultimoDigito);

// 4. Valor y posición del menor de todos
let menor = numerosAleatorios[0];
let posicionMenor = 1;
for (let i = 1; i < numerosAleatorios.length; i++) {
    if (numerosAleatorios[i] < menor) {
        menor = numerosAleatorios[i];
        posicionMenor = i + 1;
    }
}

console.log("\n4. Valor del menor de todos:", menor);
console.log("   Posición del menor de todos:", posicionMenor);

// 5. Cantidad de números cuyo signo sea igual al del anterior
let cantidadMismoSigno = 0;
for (let i = 1; i < numerosAleatorios.length; i++) {
    if ((numerosAleatorios[i] >= 0 && numerosAleatorios[i - 1] >= 0) ||
        (numerosAleatorios[i] < 0 && numerosAleatorios[i - 1] < 0)) {
        cantidadMismoSigno++;
    }
}

console.log("\n5. Cantidad de números cuyo signo sea igual al del anterior:", cantidadMismoSigno);

// 6. Promedio entero (redondeado con Math.round) de todos los números que contengan exactamente 6 dígitos
let sumaSeisDigitos = 0;
let cantidadSeisDigitos = 0;
numerosAleatorios.forEach(numero => {
    let cantidadDigitos = Math.abs(numero).toString().length;
    if (cantidadDigitos === 6) {
        sumaSeisDigitos += numero;
        cantidadSeisDigitos++;
    }
});

let promedioSeisDigitos = Math.round(sumaSeisDigitos / cantidadSeisDigitos);

console.log("\n6. Promedio entero de los números que contengan exactamente 6 dígitos:", promedioSeisDigitos);
