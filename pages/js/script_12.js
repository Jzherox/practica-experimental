function ejecutar() {
    const palabra = document.getElementById('palabra').value;

    let i = 0

    while (i < palabra.length) { 
        let letra = palabra[i]; 
        consola_salida(letra); 
        i++; 
    }
}
