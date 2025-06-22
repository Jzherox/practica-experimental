function ejecutar() {
    const numeros = [
        parseInt(document.getElementById('numero_1').value),
        parseInt(document.getElementById('numero_2').value)
    ];

    for (let i = 0; i < numeros.length; i++) {
        let numero = numeros[i];
        consola_salida(`Divisores de ${numero}:`);
        let d = 1;
        while (d <= numero) {
            if (numero % d === 0) { 
                consola_salida(d);
            }
        d++;
        }
    }
}
