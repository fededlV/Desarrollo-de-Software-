/* function init(hora) {
    console.log(`Primer Js node.js a las ${hora}`)
}
init("17.15 pm")
 */
function convertir_hora(hh, mm) {
    let resultado = ""
    if (hh >= 0 && hh <= 11) {
        resultado = hh + mm + "a.m"
    }
    else {
        resultado = hh + mm + "p.m"
    }

    return resultado
}

convertir_hora(12,12)