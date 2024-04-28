/* let nombre = "Pedro "

const promesa = new Promise((resolve, reject) => {
    if (nombre !== "Pedro") reject("Lo siento, el nombre no es Pedro")
    else resolve(nombre)
})

promesa.then((resultado) => {
    console.log(resultado)
}).catch((e) => {
    console.log(e)
}) */

class Persona {
    constructor(nombre, instagram) {
        this.nombre = nombre
        this.instagram = instagram
    }
}

const datosPersonas = [
    ["Fede", "@fede"],
    ["Rancio", "@rancio"],
    ["ElCualquiera"],
]

const personas = []

for (let i = 0; i < datosPersonas.length; i++) {
    personas[i] = new Persona(datosPersonas[i][0], datosPersonas[i][1])
}

const obtenerPersona = (id) => {
    return new Promise((resolve, reject) => {
        if (personas[id] == undefined) {
            reject("No se encontro la persona")
        } else {
            resolve(personas[id])
        }
    })
}

const obtenerInstagram = (id) => {
    return new Promise((resolve, reject) => {
        if (personas[id].instagram == undefined) {
            reject("No tiene instagram")
        } else {
            resolve(personas[id].instagram)
        }
    })
}

let id = 2

obtenerPersona(id).then((persona) => {
    console.log(persona)
    return obtenerInstagram(id)
}).then((instagram) => {
    console.log(instagram)
}).catch((e) => {
    console.log(e)
})


