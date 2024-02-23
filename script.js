document.addEventListener('DOMContentLoaded', function() {
    var textosRelleno = document.querySelectorAll('.texto-relleno1');
    var textosRellenoContainer = document.getElementById('textos-relleno');

    textosRelleno.forEach(function(texto) {
        texto.addEventListener('click', function() {
            var nuevoTextoRelleno = document.createElement('p');
            nuevoTextoRelleno.textContent = 'El Arduino Uno es una placa de desarrollo basada en el microcontrolador ATmega328.';
            textosRellenoContainer.appendChild(nuevoTextoRelleno);
        });
    });
});

document.addEventListener('DOMContentLoaded', function() {
    var textosRelleno = document.querySelectorAll('.texto-relleno2');
    var textosRellenoContainer = document.getElementById('textos-relleno');

    textosRelleno.forEach(function(texto) {
        texto.addEventListener('click', function() {
            var nuevoTextoRelleno = document.createElement('p');
            nuevoTextoRelleno.textContent = 'El Arduino Nano es una versión compacta del Arduino Uno, ideal para proyectos con espacio limitado.';
            textosRellenoContainer.appendChild(nuevoTextoRelleno);
        });
    });
});

document.addEventListener('DOMContentLoaded', function() {
    var textosRelleno = document.querySelectorAll('.texto-relleno3');
    var textosRellenoContainer = document.getElementById('textos-relleno');

    textosRelleno.forEach(function(texto) {
        texto.addEventListener('click', function() {
            var nuevoTextoRelleno = document.createElement('p');
            nuevoTextoRelleno.textContent = 'Arduino Lilypad está diseñado para proyectos de ropa y textiles.';
            textosRellenoContainer.appendChild(nuevoTextoRelleno);
        });
    });
});

function mostrar() {
    var imagen = document.getElementById('imagen');
    var descripcion = document.getElementById('descripcion');
    var botonMostrar = document.getElementById('boton-imagen');
    var botonOcultar = document.getElementById('boton-ocultar');

    imagen.style.display = 'block';
    descripcion.style.display = 'block';
    botonMostrar.style.display = 'none';
    botonOcultar.style.display = 'block';
}

function ocultar() {
    var imagen = document.getElementById('imagen');
    var descripcion = document.getElementById('descripcion');
    var botonMostrar = document.getElementById('boton-imagen');
    var botonOcultar = document.getElementById('boton-ocultar');

    imagen.style.display = 'none';
    descripcion.style.display = 'none';
    botonMostrar.style.display = 'block';
    botonOcultar.style.display = 'none';
}

function mostrar() {
    var imagen = document.getElementById('imagen2');
    var descripcion = document.getElementById('descripcion2');
    var botonMostrar = document.getElementById('boton-imagen2');
    var botonOcultar = document.getElementById('boton-ocultar2');

    imagen.style.display = 'block';
    descripcion.style.display = 'block';
    botonMostrar.style.display = 'none';
    botonOcultar.style.display = 'block';
}

function ocultar() {
    var imagen = document.getElementById('imagen2');
    var descripcion = document.getElementById('descripcion2');
    var botonMostrar = document.getElementById('boton-imagen2');
    var botonOcultar = document.getElementById('boton-ocultar2');

    imagen.style.display = 'none';
    descripcion.style.display = 'none';
    botonMostrar.style.display = 'block';
    botonOcultar.style.display = 'none';
}
