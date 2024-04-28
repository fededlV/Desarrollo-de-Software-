let materiasHTML = document.querySelector(".materias")

const materias = [
    {
        nombre: "Fisica 2",
        nota: 7
    }, {
        nombre: "Algebra",
        nota: 8
    }, {
        nombre: "Matematica Discreta",
        nota: 6
    }, {
        nombre: "Quimica",
        nota: 8
    }, {
        nombre: "Programacion",
        nota: 7
    }
]



const obtenerMateria = (id) => {
    return new Promise((resolve, reject) => {
        let materia = materias[id]
        if (materia == undefined) {
            reject("No se encontro la materia")
        } else {
            setTimeout(() => { resolve(materia) }, Math.random() * 400)
        }
    })
}

const devolverMateria = async () => {
    let materia = []
    for (let i = 0; i < materias.length; i++) {
        materia[i] = await obtenerMateria(i)
        console.log(materia[i])
        let newHTMLCode = `
        <div class="materia">
            <div class="nombre">${materia[i].nombre}</div>
            <div class="nota">${materia[i].nota}</div>
        </div>`
        materiasHTML.innerHTML += newHTMLCode
    }
}

devolverMateria()