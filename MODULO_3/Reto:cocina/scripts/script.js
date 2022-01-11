let items = document.getElementById('items')
let template = document.getElementById('template-card').content;
let fragment = document.createDocumentFragment();
let recetaModal = document.getElementById('modal-content')

let listarIngredientes = document.getElementById('listarIngredientes')
let preparacion = document.getElementById('preparacion')



const url='http://localhost:4000/recetas'
// lo que esta referenciado en el mostrar debo
//ejecuta la funcion mostrar  
document.addEventListener('DOMContentLoaded', () => {
    Mostrar(url)
})
// siempre que uso una api de json debo hacer promesas
//
//promesa
const Mostrar = async(url) =>
{
    const rest = await fetch(url); // fetch para poder llamar y conectar la api json 
    const data = await rest.json();// convierte el url en el dato a un json 
    console.log(data);
    //llamar y recorrer el Json
    //lo recorremos el for each o el map
    data.forEach(element => {
        // primero desesturcturar lo que trae de deta
        const { id, nombre  , foto } = element
        //despues de desesturcturar lo mesto en la linea 16 que es template
        template.querySelector('h5').textContent=nombre;
        template.querySelector('img').setAttribute('src',foto) //bsca en src la etiqueta foto
        // el contenido que esta en el nombre se asigna en el template en la referencia del h5
        // crear una constante llamada clone para solo clonar en template
        const clone = template.cloneNode(true);
        // crea un clone que esta habilitado solo en template
        fragment.appendChild(clone)
        // fragment es para poder asignar la variable donde se mostrara lo del json

    });

    // mostrar todo en el espcio de items cargar
    items.appendChild(fragment)
    // se llaman los nodos que se realizaron en fragment 


   
}

Mostrar(url)

 items.addEventListener('click',(e)=>{
        if(e.target.classList.contains('Mostrar')){console.log(e.srcElement.by)}
    })




