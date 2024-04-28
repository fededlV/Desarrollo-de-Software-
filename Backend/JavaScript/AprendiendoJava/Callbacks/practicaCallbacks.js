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

const obtenerPersona = (id, cb) => {
    if (personas[id] == undefined) {
        cb("No se encontro la persona")
    } else {
        cb(null, personas[id], id)
    }
}

const obtenerInstagram = (id, cb) => {
    if (personas[id].instagram == undefined) {
        cb("No se encontro el instagram")
    } else {
        cb(null, personas[id].instagram)
    }
}

obtenerPersona(1, (err, persona, id) => {
    if (err) {
        console.log(err)
    } else {
        console.log(persona.nombre)
        obtenerInstagram(id, (err, instagram) => {
            if (err) {
                console.log(err)
            } else {
                console.log(instagram)
            }
        })
    }
})

