function esBisiesto(ano) {
    if (ano % 4 === 0 && ano % 100 !== 0 || ano % 400 === 0 && ano % 100 === 0) {
        return ano + " es un año bisiesto"
    } else {
        return "No es bisiesto"
    }
}

let ano = esBisiesto(1925)
console.log(ano)