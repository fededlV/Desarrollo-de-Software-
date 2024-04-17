/* function esRecuadro(frase, caracter) {
    let palabras = frase.split(" ")
} */

function imprimirEnRecuadro(frase, caracter) {
    let palabras = frase.split(' ');
    let longitudMaxima = Math.max(...palabras.map(palabra => palabra.length));
    let borde = caracter.repeat(longitudMaxima + 4);

    console.log(borde);
    for (let palabra of palabras) {
        console.log(`${caracter} ${palabra.padEnd(longitudMaxima)} ${caracter}`);
    }
    console.log(borde);
}

// Uso del programa
imprimirEnRecuadro('Hola mundo, soy un programa en JavaScript', '*');
