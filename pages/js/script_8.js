function ejecutar() {
    const numeros = document.getElementById('numeros').value;
    const arreglo = numeros.split(';').map(Number);
    consola_salida(arreglo);
}
