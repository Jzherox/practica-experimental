function ejecutar() {
    const palabra = document.getElementById('palabra').value;

    let vocales = 0;
    for (let i = 0; i < palabra.length; i++) {
        let letra = palabra[i];
        if (letra === 'a' || letra === 'e' || letra === 'i' || letra === 'o' || letra === 'u') {
            vocales++;
        }
    }

    consola_salida(`Vocales: ${vocales}`); 
}
