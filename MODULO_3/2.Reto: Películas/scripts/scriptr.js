// funcion para llamar el boton y guardar la informacion

let boton = document.getElementById('btnenviar');
boton.addEventListener('click',capturardatos)

// mostrar el obtener localStorage al momento de cargar la pagina cargar
// o el dom content loader

document.addEventListener('DOMContentLoaded', function () {

    obtenerlocalstorage();
})


// capturar los datos del formulario
function capturardatos() {

    let nombre = document.getElementById('nombre').value;
    let apellido = document.getElementById('apellido').value;
    let telefono = document.getElementById('telefono').value;
    let observaciones = document.getElementById('observaciones').value;

    // crear un objeto para almacenar los valores al tiempo

    let objeto = {
        nom: nombre,
        apel: apellido,
        tel: telefono,
        obs: observaciones


    }


    localStorage.setItem('persona', JSON.stringify(objeto));
    //console aplication localStorage
}

// OBTENER LOCAL STORAGE 

function obtenerlocalstorage() {
    let objeto = localStorage.getItem('persona');
    console.log(objeto);
    alert(objeto);
}