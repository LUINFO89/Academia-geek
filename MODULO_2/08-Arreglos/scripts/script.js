import { data } from '../data/data.js';

let items = document.getElementById('items');


items.innerHTML = ' ';
data.forEach(hero => { //data es para desestructurr
    const { superhero, alterego, image } = hero; //se traen los datos del json para desestructurar 
    
    items.innerHTML += `
        <div> 
            <img src= ${image}>
            <select>
            <option> 
            <li>${superhero} </li>
            </option>
            <option> 
            <li>${alterego} </li>
            </option>
            </select>
            
        </div>
    `
  
})




console.log(data)