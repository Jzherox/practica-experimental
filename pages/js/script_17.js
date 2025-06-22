function ejecutar() {
    const numeros = [
        parseInt(document.getElementById('numero_1').value),
        parseInt(document.getElementById('numero_2').value),
        parseInt(document.getElementById('numero_3').value)
    ];

    for (let i = 0; i < numeros.length; i++) {
        let numero = numeros[i];
        let suma = 0;
        let d = 1;
        while (d < numero) {
            if (numero % d === 0) {
                suma += d;
            }
            d++;
        }
        
        if (suma === numero) {
            consola_salida(`${numero} ES un número perfecto`);
        } else {
            consola_salida(`${numero} NO es un número perfecto`);
        }
    } 
}