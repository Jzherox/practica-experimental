function ejecutar() {
    const arreglo = [
        document.getElementById('valor_1').value,
        document.getElementById('valor_2').value,
        document.getElementById('valor_3').value
    ];

    let i = 0; 

    while (i < arreglo.length) { 
        let valor = arreglo[i]; 
        consola_salida(valor); 
        i++; 
    }
}