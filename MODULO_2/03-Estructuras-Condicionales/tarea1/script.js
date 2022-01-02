//Un obrero necesita calcular su salario semanal,
//el cual se obtiene de la siguiente manera: si trabaja 40 horas o 
//menos se le paga $16 por hora si trabaja más de 40 horas se le paga $16
// por cada una de las primeras 40 horas y $20 por cada hora extra.



let horas = prompt("ingrese cantidad de horas");
let sueldo = horas * 16;

if(horas>40) {
    sueldo = horas+(horas-40)*20
    console.log(sueldo)
    
} 

else{
    sueldo=horas*16
    console.log(sueldo)
}
