//vendedor recibe sueldo base 10% estra por comision de sus ventas,
// el vendedor desea saber cuanto dinero obtendra por concepto de comisiones
//por las tres ventas que realizara en el mes y el total que recibe en el mes tomando en cuenta sueldo base y comisiones


let v1, v2,v3;
let totalpagar = 0;
let totalventas = 0;
let salariobase = 0;
let com = 0;

salariobase = Number (prompt("salario base  "));
v1 = Number (prompt("ingresa venta 1  "));
v2 = Number(prompt("ingresa venta 2  "));
v3 = Number( prompt("ingresa venta 3  "));

totalventas = v1 + v2 + v3;
console.log(totalventas);
com = totalventas * 0.1;
console.log(com);

totalpagar = salariobase + com;

alert("total a pagar del empleado" + totalpagar)






       