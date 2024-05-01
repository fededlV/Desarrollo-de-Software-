"use strict"
import { readFile } from "fs/promises"
import fs from "node:fs"
import { describe } from "node:test"

/* const personas = JSON.parse(fs.readFileSync("personasTrue.json", "utf-8")) */

function readJSON(file) {
    return readFile(file, "utf-8")
        .then(data => JSON.parse(data))
}

//5.Funcionalidad que genera un objeto JSON. 
function writeJSON(file, data) {
    const json = JSON.stringify(data, null, 2)
    fs.writeFile(file, json, "utf-8", (err) => {
        if (err) {
            console.log("Error al escribir el archivo JSON:", err)
            return
        }
        console.log("Archivo JSON creado con exito")
    })
}

(function main() {
    readJSON("personasTrue.json")
        .then(data => {
            //1. Promedio de edad de las personas.
            const promedio = data.reduce((suma, persona) => suma += persona.edad, 0) / data.length
            console.log("Promedio de edad:", Math.round(promedio))
            //------------------------------------------------------------------ PUNTO 2 ----------------------------------------------------------------------------------------
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
            //------------------------------------------------------------------ PUNTO 3 ----------------------------------------------------------------------------------------
            //3. Nombres ordenados con apellido GOMEZ.
            let nombres = []
            Array.from(mapPerson.get("GOMEZ").values())
                .sort((persona1, persona2) => persona1.nombre.localeCompare(persona2.nombre))
                .forEach(persona => nombres.push(persona.nombre))
            console.log("Nombres ordenados con apellido GOMEZ: ", nombres.join(", "))
            //------------------------------------------------------------------ PUNTO 4 ----------------------------------------------------------------------------------------
            //4. Suma de edades de todas las personas con longitud de nombre par y apellido impar. 
            const suma = data.reduce((suma, persona) => {
                if (persona.nombre.length % 2 === 0 && persona.apellido.length % 2 !== 0) {
                    return suma += persona.edad
                }
                return suma
            }, 0)
            console.log("Suma de edades de personas con nombre par y apellido impar:", suma)
            //------------------------------------------------------------------ PUNTO 5 ----------------------------------------------------------------------------------------
            //5. Lo que va a contener el archivo JSON.
            async function punto5() {
                try {
                    let mayores = 0
                    let menores = 0
                    let primeraMitad = 0
                    let segundaMitad = 0
                    data.forEach(persona => {
                        if (persona.edad > 18) {
                            return mayores += 1
                        }
                    })
                    data.forEach(persona => {
                        if (persona.edad <= 18) {
                            return menores += 1
                        }
                    })
                    data.forEach(persona => {
                        if (persona.apellido[0] >= "A" && persona.apellido[0] <= "L") {
                            return primeraMitad += 1
                        }
                    })
                    data.forEach(persona => {
                        if (persona.apellido[0] >= "M" && persona.apellido[0] <= "Z") {
                            return segundaMitad += 1
                        }
                    })
                    const datosGuardar = {
                        mayores,
                        menores,
                        primeraMitad,
                        segundaMitad
                    }
                    writeJSON("punto5.json", datosGuardar)
                    console.log("Archivo JSON con datos generado exitosamente.")
                } catch (err) {
                    console.log("Error al consumir / construir el archivo JSON:", err)
                }
            }
            /* let may = 0
            data.forEach(persona => {
                if (persona.edad > 18) {
                    return may += 1
                }
            })
            let men = 0
            data.forEach(persona => {
                if (persona.edad <= 18) {
                    return men += 1
                }
            })
            let priMit = 0
            data.forEach(persona => {
                if (persona.apellido[0] >= "A" && persona.apellido[0] <= "L") {
                    return priMit += 1
                }
            })
            let segMit = 0
            data.forEach(persona => {
                if (persona.apellido[0] >= "M" && persona.apellido[0] <= "Z") {
                    return segMit += 1
                }
            })
            const datosParaGuardar = {
                "mayores": may,
                "menores": men,
                "primeraMitad": priMit,
                "segundaMitad": segMit
            }
            writeJSON("punto5.json", datosParaGuardar) */
            //------------------------------------------------------------------ PUNTO 6 ----------------------------------------------------------------------------------------
            //6. Contenido para el archivo JSON creado en el punto JSON. 
            const cantCastillos = []
            data.forEach(persona => {
                if (persona.apellido === "CASTILLO") {
                    return cantCastillos.push(persona)
                }
            })
            console.log("Cantidad de personas con apellido CASTILLO:", cantCastillos.length)
            const cantCast = Array.from(mapPerson.get("CASTILLO")).length
            console.log("Cantidad castillos: ", cantCast)
            console.log(Array.from(mapPerson.get("CASTILLO")))
            /* const keys = mapPerson.keys()
            for (const clave of keys) {
                console.log(mapPerson.get(clave))
            } */
        })
        .catch(err => console.error("Error al consumir el archivo JSON:", err))
})()