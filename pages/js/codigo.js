fetch(ruta)
    .then(response => response.text())
    .then(codigo => {
        document.getElementById('code').textContent = codigo;
    })
    .catch(error => {
        document.getElementById('code').textContent = 'Error al cargar el archivo.';
        console.error(error);
    });

const consola = document.getElementById('output')

function consola_salida(salida) {
    const campo_consola = document.createElement('p')
    campo_consola.innerHTML = salida
    consola.appendChild(campo_consola)
}

function limpiar_consola(){
    consola.innerHTML = ''
}