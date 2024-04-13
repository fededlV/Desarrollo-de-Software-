function crearUsuario(name, email) {
    return  {
        email, //email:email seria lo mismo
        name,
        activo: true,
        recuperarClave: function () {
            console.log("Recuperando clave...")
        }
    }
}

let user1 = crearUsuario("Federico", "fededela@2gmail.com") 
let user2 = crearUsuario("Nico", "nico@2gmail.com") 

console.log(user1, user2)