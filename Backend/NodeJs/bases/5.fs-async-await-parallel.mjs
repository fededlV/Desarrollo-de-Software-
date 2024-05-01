import { readFile } from "node:fs/promises"

Promise.all([
    readFile("./archivo.txt", "utf-8"),
    readFile("./archivo2.txt", "utf-8")
]).then(([text, secondText]) => {
    console.log("Primer texto: ", text)
    console.log("Segundo texto: ", secondText)
})

console.log("Leyendo archivo 1...")
const text = await readFile("./archivo.txt", "utf-8")
console.log("Primer texto: ", text)

console.log("----> Hacer mientras lee el archivo...")

console.log("Leyendo archivo 2...")
const secondText = await readFile("./archivo2.txt", "utf-8") 
console.log("Segundo texto: ", secondText)

