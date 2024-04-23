//funcion promedio expresada como arrow function 
const promedio = (acu, cantidad) => {
    let prom = 0
    if (cantidad > 0)
        prom = acu / cantidad
    return prom
}

//función para obtener el nombre del mes i en formato cadena/3:
const mes_anio = mes => {
    const meses = ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun', 'Jul', 'Ago', 'Sep', 'Oct', 'Nov', 'Dic']
    return meses[mes]
}

(function () {
    const lecturas = [] //lectura de todo los meses del año

    console.clear()

    let min
    let mes_min = 0
    let acu_anual = 0
    let acu_semestre = 0

    for (let i = 0; i < 12; i++) {
        lecturas.push(15 + Math.floor(Math.random() * 20))
        console.log(lecturas[i])

        if (i === 0) {
            max = min = lecturas[0]
        } else {
            if (i > 5 && i < 12) { //segundo semestre del año:
                acu_semestre += lecturas[i]
            }
            //determinar lectura minima
            if (lecturas[i] < min) {
                min = lecturas[i]
                mes_min = i
            }
        }
        acu_anual += lecturas[i]
    }

    //Resultados 
    let prom_anual = promedio(acu_anual, 12)
    console.log(`Promedio anual de precipitaciones: ${prom_anual.toFixed(2)} ml`)

    let prom_semestre = promedio(acu_semestre, 6)
    console.log(`Promedio segundo semestre: ${prom_semestre.toFixed(2)} ml`)

    console.log(`Mes mas seco del año: ${mes_anio(mes_min)}`)
})()