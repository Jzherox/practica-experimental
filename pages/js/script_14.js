function ejecutar() {
    const palabra1 = document.getElementById('palabra_1').value;
    const palabra2 = document.getElementById('palabra_2').value;

    for (let i = 0; i < palabra1.length; i++) { 
        let letra1 = palabra1[i]; 
        let letra2 = palabra2[i]; 
        consola_salida(`¿Son iguales en posición ${i}? ${letra1 === letra2}`); 
    } 
}
