/**
 * crear algoritmo que tome un array de 
 * objetos y devuelva un array de pares
 */

let array = [{
    id: 1,
    name: "Fede",
},{
    id: 2,
    name: "Rocco",
},{
    id: 3,
    name: "Chicho",
}]

let pares = [
    [1, { id: 1, name: "Fede"}],
    [2, { id: 2, name: "Rocco"}],
    [3, { id: 3, name: "Chicho"}],
]

function toPairs(arr){
    let pairs = []
    for (idx in arr) {
        let element = arr[idx]
        pairs[idx] = [element.id, element]
    }
    return pairs
}

let resultado = toPairs(array)
console.log(resultado)