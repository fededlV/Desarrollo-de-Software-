function Persona(nombre, correo, profesion, fechaNacimiento) {
    this.nombre = nombre;
    this.correo = correo;
    this.profesion = profesion;
    this.fechaNacimiento = fechaNacimiento;
    this.saludar = function () {
        console.log('Hola soy ' + this.nombre);
    };
    this.edad = function () {
        const hoy = new Date();
        return hoy.getFullYear() - this.fechaNacimiento.getFullYear();
    };
}

let personas = [
    new Persona('Mario', 'mario@gmail.com', 'Ingeniero Químico', new Date(1990, 10, 8)),
    new Persona('Fede', 'fede@gmail.com', 'Ingeniero Software', new Date(2003, 11, 7)),
    new Persona('Agustin', 'agustin@gmail.com', 'Ingeniero Electronico', new Date(2000, 12, 6)),
    new Persona('Emiliano', 'emiliano@gmail.com', 'Ingeniero Electronico', new Date(2015, 2, 5)),
    new Persona('Petras', 'petras@gmail.com', 'Ingeniero Industrial', new Date(1996, 4, 4)),
    new Persona('Rocco', 'rocco@gmail.com', 'Ingeniero Industrial', new Date(1995, 3, 3)),
    new Persona('Sol', 'sol@gmail.com', 'Ingeniero Civil', new Date(1980, 7, 2)),
    new Persona('Carla', 'carla@gmail.com', 'Ingeniero en Sistemas de Información', new Date(2012, 9, 1))
]

mayoresDeEdad = (persArray) => {
    persArray.forEach(persona => {
        if (persona.edad() >= 18) {
            console.log(persona.nombre + ' es mayor de edad')
        }
    })
}

personasXProfesion = (persArray, profesion) => {
    persArray.forEach(persona => {
        if (persona.profesion === profesion) {
            console.log(persona.nombre + ' es ' + profesion)
        }
    })
}

obtenerPersonaMasGrande = (persArray) => {
    let personaMasGrande = persArray[0]
    persArray.forEach(persona => {
        if (persona.edad() > personaMasGrande.edad()) {
            personaMasGrande = persona
            console.log(personaMasGrande.nombre + ' es la persona mas grande')
        }
    })
}

obetenerProfesiones = (persArray) => {
    let profesiones = []
    persArray.forEach(persona => {
        if (!profesiones.includes(persona.profesion)) {
            profesiones.push(persona.profesion)
            console.log(persona.profesion)
        }
    })
}

console.log("======================Personas mayores de edad====================")
mayoresDeEdad(personas)
console.log("======================Personas por profesion====================")
personasXProfesion(personas, 'Ingeniero en Sistemas de Información')
console.log("======================Persona mas grande====================")
obtenerPersonaMasGrande(personas)
console.log("======================Profesiones====================")
obetenerProfesiones(personas)