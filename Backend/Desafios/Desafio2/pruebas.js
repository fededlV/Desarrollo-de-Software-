var arrayNombres = new Array();
var arrayApellido = new Array();
var arrayCiudad = new Array();

arrayNombres[0] = "nombre1";
arrayNombres[1] = "nombre2";
arrayNombres[2] = "nombre3";

arrayApellido[0] = "ape1 ";
arrayApellido[1] = "ape2";
arrayApellido[2] = "ape3";

arrayCiudad[0] = "ciudad1";
arrayCiudad[1] = "ciudad2";
arrayCiudad[2] = "ciudad3";

var datos = [];
var objeto = {};

for (var i = 0; i < arrayNombres.length; i++) {

    var nombre = arrayNombres[i];

    datos.push({
        "nombre": arrayNombres[i],
        "apellido": arrayApellido[i],
        "ciudad": arrayCiudad[i]
    });
}

objeto.datos = datos;
console.log(JSON.stringify(objeto));