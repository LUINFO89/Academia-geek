let incremento = 0;
let decremento = 0;

// invremento
capturarIncrementar();
capturardecrementar();

// funcion para recolectar la informacion de pantalla
function capturarIncrementar(params) {

    let btnincrementar = document.getElementById('btnincrementar');
    btnincrementar.addEventListener('click',incrementar);
}
// funcion para hacer el acumulador de uno en uno
//y mostrar en pantalla
function incrementar() {
    incremento += 1;
    //incremento = incremento + 1
    mostrarDisplay(incremento)

}

// funcion para mostrar en el campo display 
function mostrarDisplay(display) {
    document.querySelector('#input').value = display;
}

// funcion para capturar lo del boton de desincementr

function capturardecrementar() {

    let btndecrementar = document.getElementById('btndecrementar');
    btndecrementar.addEventListener('click',decrementar);
}
// funcion para realizar la resta de la incrementacion y mostrar en el displayed
function decrementar() {
    let display = document.querySelector('#input').value;
    if (display <= 0 ){
        display = 0;
    }else{
        display = display - 1;
    }
    mostrarDisplay(display);
}
