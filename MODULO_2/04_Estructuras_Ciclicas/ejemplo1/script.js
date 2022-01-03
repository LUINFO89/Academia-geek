let cn = 0;
let cp = 0;
let cneg = 0;
let num;

for (let i=1; i <= 10 ; i++){
    num= Number(prompt("Ingrese numero"));
    if (num == 0) {
        cn = cn + 1;
    } else if (num > 0){
        cp = cp + 1;
    }
    else{
        cneg = cneg + 1;
    }
}

alert(`
Cantidad de numeros neutros:${cn}
Cantidad de numeros positivos:${cp}
Cantidad de numeros positivos:${cneg}

`)