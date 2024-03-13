//alert("Hola este es mi Javascript");
//
//let nombre = "Diego";
//
//var nombre1 = "Carlos";
//
//const nombre2 = "Sandra"
//
//console.log(nombre, nombre1, nombre2);
//
//console.log(nombre);
//console.log(nombre1);
//console.log(nombre2);

//SELECCIONAR ELEMENTOS

let contenidoTitulo = "Diego";

let titulo = document.querySelector(".logo .fuente-acento");
titulo.innerHTML = contenidoTitulo;

//CONDICIONALES

let textoTitulo = titulo.innerText;
console.log(textoTitulo);

if (textoTitulo == "Nombre") {
    titulo.innerText = "Otro";
} else {
    console.log("no se cumple");
}

//FUNCIONES

let nombre = "Carlos";
let ciudad = "Lima";
let comida = "papitas";

let parrafo = document.querySelector(".parrafo2")

function cambiarTexto(nombre, ciudad, comida) {
    let contenido = `Hola, me llamo ${nombre}. Nací en ${ciudad} y sigo viviendo en ${ciudad}. Tengo 23 años, tengo 3 perritos, se llaman Pochis, Canelita y Pigi. Me gusta las ${comida} pero ya no puedo comer porque tengo que comer sano para cuidar mi salud.`;
    return contenido;
}

parrafo.innerText = cambiarTexto(nombre, ciudad, comida);

//FORMULARIO

const form = document.getElementById("form");
const nombreform = document.getElementById("nombreform");
const parrafo = document.getElementById("alertas");

function validarFormulario() {
    let warnings = "";
    let valido = true;
    parrafo.innerHTML = "";

    if (nombreform.value.length < 4) {
        warnings += `El nombre debe contener más de 4 carcateres`;
        valido = false;
    }

    if (!valido) {
        parrafo.innerHTML = warnings;
    } else {
        parrafo.innerHTML = "Enviado";
    }
    return valido;
}

form.addEventListener("submit", (e) => {
    if (validarFormulario()) {
        // Si la validación es exitosa, puedes enviar el formulario
        formulario.submit();
    } else {
        e.preventDefault(); // Evita que el formulario se envíe automáticamente
    }
});