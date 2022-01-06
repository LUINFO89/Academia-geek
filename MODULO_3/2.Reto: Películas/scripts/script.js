import { data } from '../data/data.js';

var img = document.getElementById("items")

var linkimg, cont,info;

linkimg = [
    './images/lobezo.jpg',
    './images/x-men-origenes-lobezno.jpg',
    './images/x-men.jpg',
    './images/x-men-apocalipsis.jpg', 
    './images/x-men-dias.jpg'
]



info = "<ul class='ul'>";
        for (cont = 0; cont < linkimg.length; cont++) {
            info += "<li>" +  "<a href='"  + linkimg[cont] + "'>"   +  "<img src='" + linkimg[cont] + "'>" + "</a>" + "</li>";
        }
        info += " </ul> ";

img.innerHTML = info;


