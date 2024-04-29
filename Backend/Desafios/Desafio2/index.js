"use strict"
import { readFile } from "fs/promises"
import { describe } from "node:test"

/* const personas = JSON.parse(fs.readFileSync("personasTrue.json", "utf-8")) */

function readJSON(file) {
    return readFile(file, "utf-8")
        .then(data => JSON.parse(data))
}

(function main() {
    readJSON("personasTrue.json")
        .then(data => {
            //1. Promedio de edad de las personas.
            const promedio = data.reduce((suma, persona) => suma += persona.edad, 0) / data.length
            console.log("Promedio de edad:", Math.round(promedio))
            //2. Persona mas joven del conjunto.
            const esMasJoven = data.reduce((presonaJoven, personaActual) => {
                if (!presonaJoven || personaActual.edad < presonaJoven.edad) {
                    return personaActual
                }
                return presonaJoven
            }, null)
            if (esMasJoven === null) {
                console.log("No hay personas en el conjunto")
            } else {
                console.log("Persona mas joven:", esMasJoven)
            }
            const mapPerson = new Map()
            data.forEach(persona => {
                mapPerson.has(persona.apellido) ?
                    mapPerson.get(persona.apellido).set(persona.nombre, persona)
                    : mapPerson.set(persona.apellido, new Map([[persona.nombre, persona]]))
            })
            //3. Nombres ordenados con apellido GOMEZ.
            let nombres = []
            Array.from(mapPerson.get("GOMEZ").values())
                .sort((persona1, persona2) => persona1.nombre.localeCompare(persona2.nombre))
                .forEach(persona => nombres.push(persona.nombre))
            console.log("Nombres ordenados con apellido GOMEZ: ", nombres.join(", "))
            /* console.log("Mapa de personas:", mapPerson) */
        })
        .catch(err => console.error("Error al consumir el archivo JSON:", err))
})()