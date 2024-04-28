/* let peticion = fetch("https://pokeapi.co/api/v2/version/1/")

peticion
    .then(res => res.text())
    .then(res => console.log(res))
console.log(peticion) */

fetch("https://pokeapi.co/api/v2/version/1/")
    .then(res => res.text())
    .then(res => console.log(res))


fetch("https://pokeapi.co/api/v2/version/1/")
    .then(res => res.json())
    .then(res => console.log(res))

fetch("https://pokeapi.co/api/v2/version/1/", {
    method: "POST",
    body: `{ "name": "Pikachu"}`,
    headers: { "Content-Type": "application/json" }
})
    .then(res => res.json())
    .then(res => console.log(res))

