function ejecutar() {
    const palabra = document.getElementById('palabra').value;
    const letras = palabra.split('');
    consola_salida(letras);
}