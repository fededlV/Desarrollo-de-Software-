import seedrandom from "seedrandom";

//Establecemos semilla 
var random = seedrandom(1763519)

let aleatoryNumber = Array.from({ length: 1000000 }, () => random.int32());

//2.
function restoDividido(array) {
    let resto = []
    for (let i = 0; i < array.length; i++) {
        if (array[i] % 7 === 0 || array[i] % 7 === 3 || array[i] % 7 === 5 || array[i] % 7 === 6) {
            resto.push(array[i])
        }
    }
    return resto
}

//3.
function getAnteUltimo(array) {
    let contadores = {}
    for (let i = 0; i < 10; i++) {
        contadores[i] = 0
    }
    array.forEach(numero => {
        let numeroCadena = numero.toString()
        let anteUltimoDigito = numeroCadena.charAt(numeroCadena.length - 2)
        contadores[parseInt(anteUltimoDigito)]++
    })
    /* for (let i = 0; i < array.length; i++) {
        let numeroCadena = array[i].toString()
        let anteUltimo = numeroCadena.charAt(numeroCadena.length - 2)
        if (anteUltimo == arr.length) {
            arr.push(parseInt(numeroCadena))
        }
    } Esta funcion lo que hace es guardar el numero con el penultimo numero que coincida con el indice del arreglo 
    (La dejo por que me parecio interensante jajaja).*/
    return contadores
}


//4.
function esElMenor(array) {
    let esMenor = 0
    let pos = 0
    for (let i = 0; i < array.length; i++) {
        if (esMenor > array[i]) {
            esMenor = array[i]
            pos = ++i
        }
    }
    return (console.log("El numero menor es: ", esMenor, "Y esta en la posicion: ", pos))
}

//5.
function esElMismoSigno(array) {
    let cant = 0
    for (let i = 1; i < array.length; i++) {
        if (Math.sign(array[i]) === Math.sign(array[i - 1])) {
            ++cant
        }

    }
    return cant
}

//6.
function promedioSeisDig(array) {
    let sum = 0
    let cant = 0
    array.forEach(numero => {
        if (Math.abs(numero).toString().length === 6) {
            sum += numero
            ++cant
        } else {
            return "No hay numeros que tengan exactamente 6 digitos."
        }
    });

    return Math.round(sum / cant)
}


//1. Cantidad de números positivos    
console.log("Cantidad de numero positivos: ", aleatoryNumber.filter(value => value > 0).length)
//1. Cantidad de números negativos
console.log("Cantidad de numero negativos: ", aleatoryNumber.filter(value => value < 0).length)
//2. Cantidad de numeros cuyo resto dividido por 7 es 0, 3, 5 o 6
console.log("Cantidad de numeros dividio por 7 el resto es 0, 3, 5 o 6 es: ", restoDividido(aleatoryNumber).length)
//3. Arreglo de contadores que su anteultimo numero indica la posicion del arreglo
console.log("Arreglo de contadores donde el penultimo digito indica la posicion del numero en el arreglo: ", getAnteUltimo(aleatoryNumber))
//4. Valor y posicion del menor de todos
esElMenor(aleatoryNumber)
//5. Cantidad de numeros que tiene el mismo signo que el anterior. 
console.log("La cantidad de numeros que tienen el mismo signo q el anterior es de: ", esElMismoSigno(aleatoryNumber))
//6. Promedio entero de todos los numero que contienen exactamente 6 digitos
console.log("El promedio de numero que tienen exactamente 6 digitos es de: ", promedioSeisDig(aleatoryNumber))

