class Animal {
    constructor(especie, color, edad) {
        this.especie = especie
        this.color = color
        this.edad = edad
        this.informacion = `Soy ${this.especie}, soy de color ${this.color} y tengo ${this.edad} años`
    }
    verInfo() {
        console.log(this.informacion)
    }
}

class Perro extends Animal {
    constructor(especie, color, edad, raza) {
        super(especie, color, edad)
        this.raza = null
    }
    set setRaza(newName) {
        this.raza = newName
    }
    get getRaza() {
        return this.raza
    }


}



const dog = new Perro("Perro", "Marron", 5, "Doberman")
const cat = new Animal("Gato", "Gris", 10)
const pig = new Animal("Chancho", "Rosa", 3)

dog.setRaza = "Pitbull"
console.log(dog.getRaza)
/* dog.verInfo() */

/* console.log(perro.informacion)
console.log(gato.informacion)
console.log(chancho.informacion) */