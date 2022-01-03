let num1,num2,num3;
let mayor = 0;

num1 = Number(prompt("ingresa NUMERO 1"));
num2=  Number(prompt("ingresa NUMERO 2"))
num3 = Number(prompt("ingresa NUMERO 3"))

if ((num1 > num2 ) && (num1 > num3)) {
    mayor = num1;
} else if ( (num2 > num1 ) && (num2 > num3)) {
    mayor = num2;
}else{
    mayor = num3;
}

alert('el numero mayor es:' + mayor);