function convertirHora(hora, min) {
    let salida = " "
    if (hora === 0) {
        salida = `${(hora + 12)}:${min} AM`
    } else if (hora === 24) {
        salida = `0${(hora - 24)}:${min} AM`
    } else if (hora >= 1 & hora <= 11) {
        salida = `${hora}:${min} AM`
    } else if (hora === 12) {
        salida = `${(hora)}:${min} PM`
    } else {
        salida = `${(hora - 12)}:${min} PM`
    }
    return salida
}

let res = convertirHora(13, 20)
console.log(res)