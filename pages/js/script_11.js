function ejecutar() {
    const palabra = document.getElementById('palabra').value;

    for (let i = 0; i < palabra.length; i++) {
        let letra = palabra[i];
        consola_salida(letra);
    }
}
