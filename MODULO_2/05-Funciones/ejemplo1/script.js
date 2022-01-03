let num;

num  = Number(prompt("ingrese un numero"));

parimpar(num)

function parimpar(numero) {

    if (numero %2 == 0){

        alert(`el numero ${numero} es par`);
    }else{
        alert(`el numero ${numero} es Impar`);
    }
   
}