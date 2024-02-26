// Inicio Funcion Slide de fotos

// Fin funcion Slide de fotos


/**funcion abrir cerrar menu */
function openMenu() {
    const menuDesplegable = document.getElementById('menuDesplegable');
    const svgHambur = document.querySelector('.svgHambur');
    // Activa el menú desplegable
    menuDesplegable.classList.toggle('active');

    // Si el menú está activo, oculta el icono de la hamburguesa
    if (menuDesplegable.classList.contains('active')) {
        svgHambur.style.display = 'none';
    } else {
        // Si el menú está inactivo, muestra el icono de la hamburguesa
        svgHambur.style.display = 'block';
    }
    console.log('probando que hace click');
}

function closeMenu() {
    const menuDesplegable = document.getElementById('menuDesplegable');
    const svgHambur = document.querySelector('.svgHambur');
    // Desactiva el menú desplegable
    menuDesplegable.classList.remove('active');
    // Muestra el icono de la hamburguesa
    svgHambur.style.display = 'block';
}

// Añadir evento de clic para abrir el menú desplegable
const elementos = document.querySelectorAll('.toggle');
elementos.forEach(element => {
    element.addEventListener('click', openMenu);
});

// Añadir eventos de clic para cerrar el menú desplegable al hacer clic en una opción
const opcionesMenu = document.querySelectorAll('#menuDesplegable a');
opcionesMenu.forEach(opcion => {
    opcion.addEventListener('click', function () {
        closeMenu();
    });
});

const opcionesMenuDos = document.querySelectorAll('#menuDesplegable li');
opcionesMenuDos.forEach(opcion => {
    opcion.addEventListener('click', function () {
        closeMenu();
    });
});

/**fin funcion abrir cerrar menu */



