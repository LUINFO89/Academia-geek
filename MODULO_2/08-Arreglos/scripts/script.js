import { data } from '../data/data.js';

let items = document.getElementById('items');



items.innerHTML = ' ';
data.forEach(hero => { //data es para desestructurr
    const { superhero, alterego, image } = hero; //se traen los datos del json para desestructurar 
    
    items.innerHTML += `
    <ul class='ul'>
            <li> <a> <img src= ${image}> </a> <h1>${superhero} </h1><h1>${alterego} </h1></li> 
    </ul> 
    `
  
})




console.log(data)