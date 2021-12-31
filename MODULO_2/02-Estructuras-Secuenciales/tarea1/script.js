
//Un maestro desea saber que porcentaje de hombres y
// que procentajes de mujeres hay en un grupo de estudiantes.

let v1, v2;
suma = 0;
let com = 0;


v1 = Number(prompt("ingresa cantidad hombres  "));
v2 = Number(prompt("ingresa cantidad mujeres "));


suma = v1 + v2;
console.log(suma);
com = suma / 2;
console.log(com);

alert("total prcentaje de estudiantes" + com)


//Una modista, para realizar sus prendas de vestir, 
//encarga las telas al extranjero. Para cada pedido, 
//tiene que proporcionar las medidas de la tela en pulgadas,
// pero ella generalmente las tiene en metros. 
//Realice un algoritmo para ayudar a resolver el problema,
// determinando cuántas pulgadas debe pedir con base en los metros que requiere.
// (1 pulgada = 0.0254 m).

let pulgadas = Number(prompt("ingresa cantidad de pulgadas  "));

let conversion =  pulgadas * 0.0254

alert ("La cantidad de metros  : "+conversion)

//Un estudiante desea saber cual será su calificación final 
//en la materia de Algoritmos. Dicha calificación se compone de los siguientes 
//porcentajes: 55% del promedio de sus tres calificaciones parciales 
//30% de la calificación del examen final 15% de la calificación de un trabajo final

let nota1 =  Number(prompt("ingresa nota 1  "));
let nota2 =  Number(prompt("ingresa nota 2  "));
let nota3 =  Number(prompt("ingresa nota 3  "));

promedio1 = nota1 * 0.55;
promedio2 =nota2 * 0.30;
promedio3 = nota3 * 0.15;
resultado = promedio1+promedio2+promedio3;
console.log(promedio1)
console.log(promedio2)
console.log(promedio3)

alert ("Resultado de las notas  : "+ resultado)