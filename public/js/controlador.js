var memoria = [];
var acumulador = '';
var dirInstruccion = 0;
var instruccion = 0;
var valor = 0;

$('document').ready(function () {
    console.log("hola");
    incializarMemoria();

});

$("#correr").click(function () {
    cargarPrograma();
    ejecutarPrograma();
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
        memoria[i] = parseInt(contenido[i]);
    }
    obtenerInstruccion();
    console.log(instruccion);
    console.log(valor);

}

function ejecutarPrograma() {
    contador = 0;
    while (instruccion != 43 && contador < 1001) {
        console.log('INSTRUCCION ' + instruccion)
        if (instruccion == 10) {
            lee();
        }
        else if (instruccion == 11) {
            console.log('Escribe')
        }
        else if (instruccion == 20) {
            console.log('Carga')
        }
        else if (instruccion == 21) {
            console.log('Almacena')
        }
        else if (instruccion == 30) {
            console.log('Suma')
        }
        else if (instruccion == 31) {
            console.log('Resta')
        }
        else if (instruccion == 32) {
            console.log('Divide')
        }
        else if (instruccion == 33) {
            console.log('Multiplica')
        }
        else if (instruccion == 40) {
            console.log('Bifurca')
        }
        else if (instruccion == 41) {
            console.log('Bifurcaneg')
        }
        else if (instruccion == 42) {
            console.log('Bifurcacero')
        }
        else if (instruccion == 0) {
            console.log('ALTO')
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
    console.log(instruccion + ' - ' + valor);
}

function lee() {
    let ingresado = prompt('Introduzca el valor');
    memoria[parseInt(valor)] = parseInt(ingresado);
    dirInstruccion += 1;

}


