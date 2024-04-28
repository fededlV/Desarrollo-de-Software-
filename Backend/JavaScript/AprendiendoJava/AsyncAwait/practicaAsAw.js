const objecto = {
    propiedad1: "valor 1",
    propiedad2: "valor 2",
    propiedad3: "valor 3"
}

const obtenerInformacion1 = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(objecto)
        }, 3000)
    })
}
/* 
obtenerInformacion().then(resultado => console.log(resultado)) */

const mostrarResultado = async () => {
    const resultado = await obtenerInformacion1()
    console.log(resultado)
}

mostrarResultado()

const obtenerInformacion2 = (text) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(text)
        }, Math.random() * 200)
    })
}

const mostrarData = async () => {
    data1 = await obtenerInformacion2("1: Pito")
    data2 = await obtenerInformacion2("2: Bernardo")
    data3 = await obtenerInformacion2("3: Silva")
    console.log(data1)
    console.log(data2)
    console.log(data3)
}

mostrarData()