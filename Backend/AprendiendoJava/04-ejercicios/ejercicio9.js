/**
 * Crear algoritmo que devuelva un 
 * array de objetos en base a pares
 */

let pairs = [
    [1, { name: "Fede"}],
    [2, { name: "Sol"}],
    [3, { name: "Rocco"}],
]

let array = [{
    id: 1,
    name:"Fede",
},{
    id:2,
    name:"Sol",
},{
    id:3,
    name:"Rocco",
}]

function toCollection(arr){
    let array = []
    for (idx in arr) {
        let element = arr[idx]
        array[idx] = element[1]
        array[idx].id = element[0]
    }
    return array
}

let resultado = toCollection(pairs)
console.log(resultado)