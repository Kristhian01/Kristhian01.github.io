// Variables que tendrán el contenido de las plantillas html version mobile
var plantillaBebidas = "";
var plantillaEventos = "";
var plantillaGaleria = "";
// Fin variables que contienen el contenido de la plantilla html

// Carga de contenido de los diferentes archivos html mobile
$.get("../html/bebidas.html", function (data) {
    plantillaBebidas = data;
});

$.get("../html/eventos.html", function (data) {
    plantillaEventos = data;
});

$.get("../html/galeria.html", function (data) {
    plantillaGaleria = data;
});

// Fin carga de los diferentes contenidos de archivo html mobile


//Carga de paginas de cada apartado del menu mobile
$("#bebidas").click(function () {
    $("#contenedor").html(plantillaBebidas);
    
});

$("#eventos").click(function () {
    $("#contenedor").html(plantillaEventos);
});

$("#galeria").click(function () {
    $("#contenedor").html(plantillaGaleria);
});

//fin carga de paginas de cada apartado del menu mobile

/**Variables que tendran el contenido de las plantillas html version desktop */

var plantillaDrinks = "";
var plantillaEvents = "";
var plantillasGallery = "";
// Fin Variables que tendran el contenido de las plantillas html version desktop

//Carga de contenido de los diferentes archivos html desktop
$.get("../html/bebidas.html", function (data) {
    plantillaDrinks = data;
});

$.get("../html/eventos.html", function (data) {
    plantillaEvents = data;
});

$.get("../html/galeria.html", function (data) {
    plantillaGallery = data;
});
//Fin Carga de contenido de los diferentes archivos html desktop

//Carga paginas apartado nav desktop
$("#drinks").click(function () {
    $("#contenedor").html(plantillaBebidas);
});

$("#events").click(function () {
    $("#contenedor").html(plantillaEventos);
});

$("#gallery").click(function () {
    $("#contenedor").html(plantillaGaleria);
});



// Funcion que lleva a la zona de eventos.html desde Leer mas
$("#irEventos").click(function () {
    $("#contenedor").html(plantillaEventos);
});

$("#irBirthday").click(function () {
    $("#contenedor").html(plantillaEventos);
});

$("#irPasabocas").click(function () {
    $("#contenedor").html(plantillaEventos);
});

// Fin que lleva a la zona de eventos.html desde Leer mas


