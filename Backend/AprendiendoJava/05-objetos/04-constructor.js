// { id: 1, recuperarClave: function1() {} }
function Usuario () {
    this.id = 1
    this.recuperarClave = function () { // Son METODOS
        console.log("Recuperando clave...")
    }
}

let usuario = new Usuario()
console.log(usuario)