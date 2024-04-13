/**
 * Crear array de longitud N, y que sus elementos sean 
 * numeros de 1 hasta N.
 */
let longitud = 7

function crearArray(n) {
    if (n > 0){
        let arr = []
        for (let i = 0; i < n; i++) {
            arr[i] = i + 1
        }
        return arr
    } else {
        return []
    }
}

let res = crearArray(longitud)
console.log(res)