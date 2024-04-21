let user = {
    id: 1,
    name: "Federico",
    age: 20
}

for (let prop in user) {
    console.log(prop, ":", user[prop])
}

let animales = ["Leon", "Dragon"]
for (let prop in animales) {
    console.log(prop, animales[prop])
}