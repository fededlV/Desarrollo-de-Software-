let email = "fededelavega2@gmail.com"
let name = "Federico"
let direccion = {
    calle: "Independencia",
    numero: 864,
}

let user = {
    email: "fededelavega2@gmaiñ.com",
    name:"Federico",
    direccion: {
        calle: "Independencia",
        numero: "864",
    },
    activo: true,
    recuperarClave: function () {
        console.log("Recuperando clave...")
    }
}