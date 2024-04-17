import SensorValue from "./sensor.js" 
import data from './data.json' assert { type: 'json' };

export default class EstacionMet{
    constructor(n){
        //this.values = []
        //this.values = Array(n)
        //this.values = this.leer_valores(n)
        this.values = this.leer_valores_json()
    }

    leer_valores(n){
        let i
        const lst = []
        for(i=0; i< n; i++){
            let id = Math.floor(Math.random()*100) // genera un valor aleatorio y trunca al entero más grande
            let t = Math.floor(Math.random()*40) // genera un valor aleatorio y trunca al entero más grande
            let h = Math.floor(Math.random()*90) // genera un valor aleatorio y trunca al entero más grande
            let hh = `${Math.floor(Math.random()*24)}:${Math.floor(Math.random()*60)}` // genera un valor aleatorio y trunca al entero más grande
            const value = new SensorValue(id, t, h, hh)  
            lst.push(value)
        }
        return lst
    }
    leer_valores_json(){
        let i
        const lst = []
        for(i=0; i< data.length; i++){
            let id = data[i]['id']
            let t = data[i]['temp']
            let h = data[i]['hum']
            let hh = data[i]['hh']
            const value = new SensorValue(id, t, h, hh)  
            lst.push(value)
        }
        return lst
    }


    mostrar(){
        let listado = 'LISTADO DE LECTURAS\n\n'
        this.values.forEach(e => {
            listado += e.toString() + "\n"
        });
        return listado
    }

    filtrar_temperaturas(val_max){
        let listado = `LISTADO DE LECTURAS MENOR QUE ${val_max} \n\n`
        const filtrados = this.values.filter(e => e.temperatura <= val_max);
        filtrados.forEach(e => {
            listado += e.toString() + "\n"
        });
        return listado
    }
}


