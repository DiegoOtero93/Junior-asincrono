function handlerEvents() {
    let botonAbrir = document.getElementById('botonAbrir');
    let botonCerrar = document.getElementById('botonCerrar');
    let collection = document.getElementById('collection');
    let menuNegro = document.getElementById('Navegador__negro');
    let boton1 = document.querySelector('.boton__animacion__final:nth-child(1)');
    let boton2 = document.querySelector('.boton__animacion__final:nth-child(2)');
    let seccion1 = document.querySelector('.seccion__articulo');
    let seccion2 = document.querySelector('.seccion__articulo2');
    let seccionActual = seccion1; // Inicialmente, mostramos la sección 1

    botonAbrir.addEventListener('click', abrirMenu);
    botonCerrar.addEventListener('click', cerrarMenu);
    collection.addEventListener('click', toggleCollection);
    boton1.addEventListener('click', mostrarSeccion1);
    boton2.addEventListener('click', mostrarSeccion2);

    function abrirMenu() {
        let contenedor = document.getElementById('navegador__container');
        contenedor.style.width = '100%';
        menuNegro.style.display = 'block';
    }

    function cerrarMenu() {
        let contenedor = document.getElementById('navegador__container');
        contenedor.classList.add('cerrando'); // Agregar clase para animación de salida
        setTimeout(() => { // Esperar a que termine la animación
            contenedor.style.width = '0%'; // Cambiar el ancho del contenedor
            menuNegro.style.display = 'none'; // Ocultar el fondo negro
            contenedor.classList.remove('cerrando'); // Eliminar clase de animación de salida
        }, 400); // Ajustar el tiempo según la duración de la animación (500ms en este caso)
    }

    function toggleCollection() {
        let opcionesCollection = document.querySelector('.collection__opciones');
        opcionesCollection.classList.toggle('mostrar');
    }

    function mostrarSeccion1() {
        seccionActual = seccion1;
        mostrarSeccion();
    }

    function mostrarSeccion2() {
        seccionActual = seccion2;
        seccion1.style.display = 'none'; // Oculta la sección 1
        seccion2.style.display = 'flex'; // Muestra la sección 2
        seccion2.classList.add('container__animacionEntradaDesdeAbajo'); // Agrega la clase de animación de entrada desde abajo
        seccion2.classList.remove('container__animacionSalida'); // 
    
        // Asegurarse de que la imagen asociada a la sección 2 permanezca visible
        const img2 = document.getElementById('articleImage2');
        img2.style.opacity = '1';
    }

    function mostrarSeccion() {
        seccion1.style.display = 'none';
        seccion2.style.display = 'none';
        seccionActual.style.display = 'flex';
        seccionActual.classList.add('container__animacionEntrada');
        seccionActual.classList.remove('container__animacionSalida');
    }

    // Mostrar una sección al cargar la página
    mostrarSeccion1();
}
document.addEventListener('DOMContentLoaded', handlerEvents);



document.addEventListener('DOMContentLoaded', function() {
    const botonesFinales = document.querySelectorAll('.boton__animacion__final');

    function toggleActivo() {
        botonesFinales.forEach(boton => {
            boton.classList.remove('activo');
        });
        this.classList.add('activo');
    }

    botonesFinales.forEach(boton => {
        boton.addEventListener('click', toggleActivo);
    });
});