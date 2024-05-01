const { readFile } = require('node:fs/promises')

// IIFE = Inmediately Invoked Function Expression
/* ;(
    async () => {
        console.log("Leyendo archivo 1...")
        const text = await readFile("./archivo.txt", "utf-8")
        console.log("Primer texto: ", text)

        console.log("----> Hacer mientras lee el archivo...")

        console.log("Leyendo archivo 2...")
        const secondText = await readFile("./archivo2.txt", "utf-8")
        console.log("Segundo texto: ", secondText)
    }
)
 */

async function init() {
    console.log('Leyendo archivo 1...')
    const text = await readFile('./archivo.txt', 'utf-8')
    console.log('Primer texto: ', text)

    console.log('----> Hacer mientras lee el archivo...')

    console.log('Leyendo archivo 2...')
    const secondText = await readFile('./archivo2.txt', 'utf-8')
    console.log('Segundo texto: ', secondText)
}

init()
