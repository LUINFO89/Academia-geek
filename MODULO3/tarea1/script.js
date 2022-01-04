/*Declaracion*/
let eleccionmoneda1  = document.getElementById('eleccionmoneda1'); 
let fragment = document.createDocumentFragment();
const monedapais = ['Elige tu Moneda','Dolar','Peso Mexicano','Peso Colombiano','Euro','Libra Esterlina'];

//El usuario selecciona su segunda moneda para la conversion.
monedapais.forEach(function(opcionmoneda) {
    let option = document.createElement('option');
 option.setAttribute('value', opcionmoneda);
    option.textContent = opcionmoneda;
    fragment.appendChild(option);
});

eleccionmoneda1.appendChild(fragment);

//El usuario selecciona su segunda moneda para la conversion.
let eleccionmoneda2  = document.getElementById('eleccionmoneda2'); 
let fragment2 = document.createDocumentFragment();

monedapais.forEach(function(opcionmoneda2) {
    let option = document.createElement('option');
    option.setAttribute('value', opcionmoneda2);
    option.textContent = opcionmoneda2;
    fragment2.appendChild(option);
});
eleccionmoneda2.appendChild(fragment2);

/*funcion para calcular la operacion*/
function mostrarResultado() { 
    let cantidad_dinero = Number(document.getElementById('inputcantidad').value);
    
    let moneda_1 = document.getElementById('selectmoneda1').value;
    let moneda_2 = document.getElementById('selectmoneda2').value;
    let resultado; 

    
    // dolares a peso colombiano mexicano euro libra exterlina
    // se hace el mismo proceso para los demas conversiones
    let usd_cop = 4.080;
    let usd_mxn = 20.50;
    let usd_eur = 0.89;
    let usd_gbp = 0.76;


    //Toma de decisiones y ejecucion//
    if (moneda_1 == "Dolar" && moneda_2 == "Peso Colombiano") {
        resultado = cantidad_dinero * usd_cop;
    } else if (moneda_1 == "Dolar" && moneda_2 == "Peso Mexicano") {
        resultado = cantidad_dinero * usd_mxn;
    } else if (moneda_1 == "Dolar" && moneda_2 == "Euro") {
        resultado = cantidad_dinero * usd_eur;
    } else if (moneda_1 == "Dolar" && moneda_2 == "Libra Esterlina") {
        resultado = cantidad_dinero * usd_gbp;
    }// Base divisa peso colombiano
    let cop_usd = 0.26;
    let cop_mxn = 5.38;
    let cop_eur = 0.23;
    let cop_gbp = 0.19;
        /*Operacion Conversion*/
    if (moneda_1 == "Peso Colombiano" && moneda_2 == "Dolar") {
        resultado = cantidad_dinero * cop_usd;
    } else if (moneda_1 == "Peso Colombiano" && moneda_2 == "Peso Mexicano") {
        resultado = cantidad_dinero * cop_mxn;
    } else if (moneda_1 == "Peso Colombiano" && moneda_2 == "Euro") {
        resultado = cantidad_dinero * cop_eur;
    } else if (moneda_1 == "Peso Colombiano" && moneda_2 == "Libra Esterlina") {
        resultado = cantidad_dinero * cop_gbp;
    }
    // Base divisa peso mexicano
    let mxn_usd = 0.048;
    let mxn_cop = 185.77;
    let mxn_eur = 0.042;
    let mxn_gbp = 0.036;
    
    if (moneda_1 == "Peso Mexicano" && moneda_2 == "Dolar") {
        resultado = cantidad_dinero * mxn_usd;
    } else if (moneda_1 == "Peso Mexicano" && moneda_2 == "Peso Colombiano") {
        resultado = cantidad_dinero * mxn_cop;
    } else if (moneda_1 == "Peso Mexicano" && moneda_2 == "Euro") {
        resultado = cantidad_dinero * mxn_eur;
    } else if (moneda_1 == "Peso Mexicano" && moneda_2 == "Libra Esterlina") {
        resultado = cantidad_dinero * mxn_gbp;
    }
    
    // Base divisa euro
    let eur_usd = 1.13;
    let eur_cop = 4.391;
    let eur_mxn = 23.65;
    let eur_gbp = 0.85;
    
    if (moneda_1 == "Euro" && moneda_2 == "Dolar") {
        resultado = cantidad_dinero * eur_usd;
    } else if (moneda_1 == "Euro" && moneda_2 == "Peso Colombiano") {
        resultado = cantidad_dinero * eur_cop;
    } else if (moneda_1 == "Euro" && moneda_2 == "Peso Mexicano") {
        resultado = cantidad_dinero * eur_mxn;
    } else if (moneda_1 == "Euro" && moneda_2 == "Libra Esterlina") {
        resultado = cantidad_dinero * eur_gbp;
    }
    
    // Base divisa GBP
    let gbp_usd = 1.32;
    let gbp_cop = 5.135;
    let gbp_mxn = 27.65;
    let gbp_eur = 1.17;
    /*Operacion Conversion*/
    if (moneda_1 == "Libra Esterlina" && moneda_2 == "Dolar") {
        resultado = cantidad_dinero * gbp_usd;
    } else if (moneda_1 == "Libra Esterlina" && moneda_2 == "Peso Colombiano") {
        resultado = cantidad_dinero * gbp_cop;
    } else if (moneda_1 == "Libra Esterlina" && moneda_2 == "Peso Mexicano") {
        resultado = cantidad_dinero * gbp_mxn;
    } else if (moneda_1 == "Libra Esterlina" && moneda_2 == "Euro") {
        resultado = cantidad_dinero * gbp_eur;
    }
    /*Alerta para formulario- Resultado Conversion*/
    alerta_resultado = document.createElement("h1");
    alerta_resultado.setAttribute("id", "alerta");
    alerta_resultado.innerHTML = "Tu conversion es : " + resultado + " $ ";
    
    let element_actual = document.querySelector("#validacion");
    element_actual.insertAdjacentElement("beforebegin", alerta_resultado);
    
    }






