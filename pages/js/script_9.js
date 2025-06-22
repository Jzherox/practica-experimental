function ejecutar() {
    const arreglo = [
        document.getElementById('valor_1').value,
        document.getElementById('valor_2').value,
        document.getElementById('valor_3').value
    ];

    for (let i = 0; i < arreglo.length; i++) {
        let valor = arreglo[i];
        consola_salida(valor);
    }
}