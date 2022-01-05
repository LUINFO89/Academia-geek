import { data } from '../data/data.js';

var img = document.getElementById("items")
var img2 = document.getElementById("items2")

var linkimg, cont,info;

linkimg = [
    './images/iron.jpg',
    './images/Hulk.jpg',
    './images/iron.jpg',
    './images/Hulk.jpg', 
]



info = "<ul class='ul'>";
        for (cont = 0; cont < linkimg.length; cont++) {
            info += "<li>" +  "<a href='"  + linkimg[cont] + "'>"   +  "<img src='" + linkimg[cont] + "'>" + "</a>" + "</li>";
        }
        info += " </ul> ";

img.innerHTML = info;


