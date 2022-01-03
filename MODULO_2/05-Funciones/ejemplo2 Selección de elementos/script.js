


function calcularMes() {
    let mes = Number( document.getElementById("inputMes").value);

    console.log(mes)

    switch (mes) {
        case 1:
            alert('el mes de enero');
            break;
        case 2:
            alert('el mes de febrero');
            break;
        case 3:
            alert('el mes de marzo');
            break;

        case 4:
            alert('el mes de abril');
            break;
        case 5:
            alert('el mes de mayo');
            break;
        case 6:
            alert('el mes de junio');
            break;

        default:
            alert('el mes digitado no esta en entre enero y junio');
            break;
    }
}