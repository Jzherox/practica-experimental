function ejecutar() {
    const numeros = [
        parseInt(document.getElementById('numero_1').value),
        parseInt(document.getElementById('numero_2').value)
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
        consola_salida(`Suma de divisores de ${numero}: ${suma}`);
    }
}