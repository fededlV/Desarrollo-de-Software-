let array1 = [1, 2, 3]
let array2 = [4, 5, 6]
let indice = 2
array1.splice(indice, 2)
let arrayUnido = array1.concat(array2)

console.log(array1)

let array = [1, 2, 3, 4, 5, 6];
let arrayFiltrado = array.filter(num => num > 3);

console.log(arrayFiltrado); // [4, 5, 6]

let array3 = [1, 2, 3, 4, 5];
let arrayMapeado = array.map(num => num * 2);

console.log(arrayMapeado); // [2, 4, 6, 8, 10]

console.log("5" + 2)

let precio = 10; 
let cantidad = 5; 
let total = precio * cantidad; 
total += 2; 
total *= 2; 
console.log(total);