//.js -> Por defecto usa CommonJS
// .mjs -> Para utilizar ES modules 
// .cjs -> Para utilizar CommonJS

import { sum,subtract, multiply } from "./sum.mjs"

console.log(sum(1,2))
console.log(subtract(1,2))
console.log(multiply(1,2))