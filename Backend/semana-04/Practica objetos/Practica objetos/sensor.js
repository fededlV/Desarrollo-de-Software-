class SensorValue{
    constructor(id, temperatura, humedad, hora){
        this.id = id
        this.temperatura = temperatura
        this.humedad = humedad
        this.hora = hora
    }

    toString(){
        return `ID: ${this.id}\tTEMPERATURA:${this.temperatura}°C\tHUMEDAD:${this.humedad}%`
    }
}

export default SensorValue

