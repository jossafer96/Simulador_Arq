var memoria = [];
var acumulador = 0;
var dirInstruccion = 0; //indica la posición de la instrucción a ejecutar
var instruccion = 0; //Instruccion a ejecutar
var valor = 0; //valor que acompaña la instruccion
var flag = true;
var paso = 0;


$('document').ready(function () {

    incializarMemoria();

});

$("#correr").click(function () {
    cargarPrograma();
    ejecutarPrograma();

});

$("#paso").click(function () {
    if (paso == 0)
        cargarPrograma();
    ejecutarPasoPaso();
    paso++;

});

$("#limpiar").click(function () {
    $("#codigo").val("");
    location.reload(true);
    iniciarVariables();
});

//FUNCIONES
function iniciarVariables() {
    memoria = [];
    incializarMemoria();
    acumulador = 0;
    dirInstruccion = 0; //indica la posición de la instrucción a ejecutar
    instruccion = 0; //Instruccion a ejecutar
    valor = 0; //valor que acompaña la instruccion
    paso = 0;
}

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
    mostrarEstado()
}

function mostrarEstado() {
    $('#memoria').val("");
    var line = '0';
    for (i = 0; i < memoria.length; i++) {
        if (i < 10)
            line = '00';
        else if (i < 100)
            line = '0';
        else
            line = ''
        $('#memoria').val($('#memoria').val() + line + i + '-->' + memoria[i] + '\n');
    }
    $('#linea').val(dirInstruccion);
}


function ejecutarPrograma() {
    contador = 0;
    while (instruccion != 43 && contador < 1001) {

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
            $("#log").css('color', 'rgb(201, 0, 0)')
            console.log('\n' + '------------------------------------------------------------------------' + '\n' + "Ocurrió un error en la dirección de memoria: " + dirInstruccion + '\n' + 'Reinicie el programa');
            $("#correr").prop("disabled", true);
            $("#paso").prop("disabled", true);
            var psconsole = $('#log');
            if (psconsole.length)
                psconsole.scrollTop(psconsole[0].scrollHeight - psconsole.height());        
            return;
        }
        var psconsole = $('#log');
        if (psconsole.length)
            psconsole.scrollTop(psconsole[0].scrollHeight - psconsole.height());
        contador++;
        obtenerInstruccion();
        mostrarEstado()
    }
    $("#correr").prop("disabled", true);
    $("#paso").prop("disabled", true);
    iniciarVariables();
    console.log('Programa Finalizado');
}


function ejecutarPasoPaso() {
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
        $("#correr").prop("disabled", true);
        $("#paso").prop("disabled", true);
        console.log('Programa finalizado');
        iniciarVariables();
        return false;
    }
    else {
        $("#log").css('color', 'rgb(201, 0, 0)')
        console.log('\n' + '------------------------------------------------------------------------' + '\n' + "Ocurrió un error en la dirección de memoria: " + dirInstruccion + '\n' + 'Reinicie el programa');
        $("#correr").prop("disabled", true);
        $("#paso").prop("disabled", true);
        var psconsole = $('#log');
        if (psconsole.length)
            psconsole.scrollTop(psconsole[0].scrollHeight - psconsole.height());    
        return false;
    }
    var psconsole = $('#log');
    if (psconsole.length)
        psconsole.scrollTop(psconsole[0].scrollHeight - psconsole.height());
    obtenerInstruccion();
    mostrarEstado();

}




function obtenerInstruccion() {

    instruccion = parseInt(memoria[dirInstruccion].toString().substring(0, 2));
    valor = parseInt(memoria[dirInstruccion].toString().substring(2, 6));
    $('#instruccion').val(instruccion);

}

//Instruccion 10
function lee() {
    let ingresado = prompt("Dato");
    if (ingresado == null) ingresado = 0;
    console.log('Se ingreso el valor  ' + ingresado + '\n' + '------------------------------------------------------------------------');
    memoria[parseInt(valor)] = parseInt(ingresado);
    dirInstruccion += 1;

}

//Instruccion 11
function escribirPantalla() {
    console.log('----IMPRIME-----');
    console.log(memoria[valor] + '\n');
    dirInstruccion += 1;
}

//Instruccion 20
function cargarAcumulador() {
    acumulador = memoria[valor];
    $('#acumulador').val(acumulador);
    dirInstruccion += 1;

}

//Instruccion 21
function almacenardeAcumulador() {
    console.log('Almacena acumulador en --> ' + valor + '\n' + '------------------------------------------------------------------------')
    memoria[valor] = acumulador;
    dirInstruccion += 1;
}

//Instruccion 30
function sumar() {
    console.log('Suma --> ' + acumulador + '+' + memoria[valor] + '\n' + '------------------------------------------------------------------------');
    acumulador = acumulador + memoria[valor];
    $('#acumulador').val(acumulador);
    dirInstruccion += 1;
}

//Instruccion 31
function restar() {
    console.log('Resta --> ' + acumulador + '-' + memoria[valor] + '\n' + '------------------------------------------------------------------------');
    acumulador = acumulador - memoria[valor];
    $('#acumulador').val(acumulador);
    dirInstruccion += 1;
}

//Instruccion 32
function dividir() {
    console.log('Divide --> ' + memoria[valor] + '/' +acumulador + '\n' + '------------------------------------------------------------------------');
    acumulador = memoria[valor] / acumulador;
    $('#acumulador').val(acumulador);
    dirInstruccion += 1;
}

//Instruccion 33
function multiplicar() {
    console.log('Multiplica --> ' + acumulador + '*' + memoria[valor] + '\n' + '------------------------------------------------------------------------');
    acumulador = memoria[valor] * acumulador;
    $('#acumulador').val(acumulador);
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


(function () {
    if (!console) {
        console = {};
    }
    var old = console.log;
    var logger = document.getElementById('log');
    console.log = function (message) {
        if (typeof message == 'object') {
            logger.innerHTML += (JSON && JSON.stringify ? JSON.stringify(message) : String(message)) + '\n';
        } else {
            logger.innerHTML += message + '\n';
        }
    }
})();



