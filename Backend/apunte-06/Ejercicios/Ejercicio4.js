function invertir(num) {
    if (num < 100 || num > 999) {
        return "Error, no ingreso numero de tres cifras."
    }
    // Convierte el número a cadena
    let numeroCadena = num.toString()
    // Invierte la cadena
    let numInvertidoCadena = numeroCadena.split("").reverse().join('')
    // Convierte la cadena invertida a número
    let numInvertido = parseInt(numInvertidoCadena)
    if (num === numInvertido) {
        return "El numero ingresado es el mismo que el invertido"
    } else {
        return numInvertido
    }
    
}

let res = invertir(111)
console.log(res)