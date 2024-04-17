import EstacionMet from "./estacion.js";
function main(){
    const estacion = new EstacionMet(10)
    console.log(estacion.mostrar())
    console.log(estacion.filtrar_temperaturas(25))
    
}
//ejecutar main():
main()