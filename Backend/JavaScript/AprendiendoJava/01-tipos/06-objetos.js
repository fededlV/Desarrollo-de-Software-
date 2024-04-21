// Personaje de tv

let nombre = "Tanjiro"
let anime = "Demon Slayer"
let edad = 16

let personaje = {
    nombre: "Tanjiro", 
    anime: "Demon Slayer", 
    edad: 16
} //Objeto literal 

console.log(personaje)
console.log(personaje.anime)
console.log(personaje["anime"])

personaje.edad = 13

personaje["edad"] = 16

delete personaje.anime

console.log(personaje)
