var memoria = [];
var acumulador = 0;
var dirInstruccion = 0; //indica la posición de la instrucción a ejecutar
var instruccion = 0; //Instruccion a ejecutar
var valor = 0; //valor que acompaña la instruccion

$('document').ready(function () {
    console.log("hola");
    incializarMemoria();

});

$("#correr").click(function () {
    cargarPrograma();
    ejecutarPrograma();
    memoria = [];
    incializarMemoria();
    acumulador = 0;
    dirInstruccion = 0; //indica la posición de la instrucción a ejecutar
    instruccion = 0; //Instruccion a ejecutar
    valor = 0; //valor que acompaña la instruccion

});

//FUNCIONES
function incializarMemoria() {
    for (i = 0; i < 1000; i++) {
        memoria.push(0);
    }
}

function cargarPrograma() {
    var contenido = $("#codigo").val().split('\n');
    for (i = 0; i < contenido.length; i++) {
        if (contenido[i] == "") {
            memoria[i] = 0;
        }
        else {
            memoria[i] = parseInt(contenido[i]);
        }
    }
    obtenerInstruccion();
}

function ejecutarPrograma() {
    contador = 0;
    while (instruccion != 43 && contador < 1001) {
        console.log(acumulador)
        if (instruccion == 10) {
            lee();
        }
        else if (instruccion == 11) {
            escribirPantalla();
        }
        else if (instruccion == 20) {
            cargarAcumulador();
        }
        else if (instruccion == 21) {
            almacenardeAcumulador();
        }
        else if (instruccion == 30) {
            sumar();
        }
        else if (instruccion == 31) {
            restar();
        }
        else if (instruccion == 32) {
            dividir();
        }
        else if (instruccion == 33) {
            multiplicar();
        }
        else if (instruccion == 40) {
            bifurcar();
        }
        else if (instruccion == 41) {
            bifurcarNeg();
        }
        else if (instruccion == 42) {
            bifurcarCero();
        }
        else if (instruccion == 43) {
            console.log('ALTO')
            break;
        }
        else {
            alert("Ocurrió un error en la línea " + dirInstruccion);
            break;
        }
        contador++;
        obtenerInstruccion();
    }
    console.log(memoria);
    alert('Programa Finalizado');
}

function obtenerInstruccion() {
    instruccion = parseInt(memoria[dirInstruccion].toString().substring(0, 2));
    valor = parseInt(memoria[dirInstruccion].toString().substring(2, 6));
}

//Instruccion 10
function lee() {
    let ingresado = prompt('Introduzca el valor');
    memoria[parseInt(valor)] = parseInt(ingresado);
    dirInstruccion += 1;

}

//Instruccion 11
function escribirPantalla() {
    alert(memoria[valor]);
    dirInstruccion += 1;
}

//Instruccion 20
function cargarAcumulador() {
    acumulador = memoria[valor];
    dirInstruccion += 1;
}

//Instruccion 21
function almacenardeAcumulador() {
    memoria[valor] = acumulador;
    dirInstruccion += 1;
}

//Instruccion 30
function sumar() {
    acumulador = acumulador + memoria[valor];
    dirInstruccion += 1;
}

//Instruccion 31
function restar() {
    acumulador = acumulador - memoria[valor];
    dirInstruccion += 1;
}

//Instruccion 32
function dividir() {
    acumulador = memoria[valor] / acumulador;
    dirInstruccion += 1;
}

//Instruccion 33
function multiplicar() {
    acumulador = memoria[valor] * acumulador;
    dirInstruccion += 1;
}

//Instruccion 40
function bifurcar() {
    dirInstruccion = valor;
}

//Instruccion 41
function bifurcarNeg() {
    if (acumulador < 0)
        dirInstruccion = valor;
    else
        dirInstruccion += 1;
}

//Instruccion 42
function bifurcarCero() {
    if (acumulador == 0)
        dirInstruccion = valor;
    else
        dirInstruccion += 1;
}
