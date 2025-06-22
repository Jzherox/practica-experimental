const numeros = [
    document.getElementById('valor_1').value,
    document.getElementById('valor_2').value
];

function ejecutar() {
    numeros.push(document.getElementById('valor_3').value);
    consola_salida(numeros);
}

consola_salida(numeros);