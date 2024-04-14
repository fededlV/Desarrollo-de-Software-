function procesarTemperaturas() {
    // Genera un número aleatorio de valores de temperatura entre 1 y 100
    const n = Math.floor(Math.random() * 100) + 1;

    // Genera n valores de temperatura aleatorios en un rango de, por ejemplo, -30 a 50 grados Celsius
    const temperaturas = Array.from({ length: n }, () => Math.floor(Math.random() * 81) - 30);
    
    // Calcula la temperatura máxima, mínima y total para el promedio
    const tempMax = Math.max(...temperaturas);
    const tempMin = Math.min(...temperaturas);
    const tempTotal = temperaturas.reduce((total, temp) => total + temp, 0);
    
    // Calcula la amplitud térmica y la temperatura promedio
    const amplitudTermica = tempMax - tempMin;
    const temperaturaPromedio = tempTotal / n;
    
    // Verifica si al menos una lectura supera el valor histórico de 43 grados
    const superaValorHistorico = temperaturas.some(temp => temp > 43);
    
    // Imprime los resultados por consola
    console.log(`Amplitud térmica: ${amplitudTermica} grados`);
    console.log(`Temperatura promedio: ${temperaturaPromedio.toFixed(2)} grados`);
    console.log(`¿Alguna lectura supera el valor histórico de 43 grados? ${superaValorHistorico ? 'Sí' : 'No'}`);
}

// Ejecuta la función para procesar las temperaturas
procesarTemperaturas();
