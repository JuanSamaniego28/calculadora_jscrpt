const botonNumeros =document.getElementsByName('dato-num');
const botonOperac = document.getElementsByName('dato-operac');

const botonIgual = document.getElementsByName('dato-igual')[0];
const botonBorrar = document.getElementsByName('dato-delete')[0];

var result = document.getElementById('result');
var operacionActual = "";
var operacionAnterior = "";
var operacion = undefined;

botonNumeros.forEach(function(boton){
    boton.addEventListener('click',function(){
        agregarNumero(boton.innerText);
    })

});

botonOperac.forEach(function(boton){
    boton.addEventListener('click',function(){
        selecOperacion(boton.innerText);
        
    })

});

botonIgual.addEventListener('click',function(){
    calcular();
    actualizarDisplay();

});

botonBorrar.addEventListener('click',function(){
    clear();
    actualizarDisplay();
});

function selecOperacion(op){
    if (operacionActual =='')
    return ;
    if (operacionActual !== ''){
        calcular()
    }
    operacion= op.toString();
    operacionAnterior = operacionActual;
    operacionActual= '';
}

function calcular(){
    var calculo;
    const anterior = parseFloat(operacionAnterior);
    const actual = parseFloat(operacionActual);
    if (isNaN(anterior) || isNaN(actual)) 
    return;
    switch(operacion){
        case '+':
            calculo = anterior + actual;
            break;
        case '-':
            calculo = anterior - actual;
            break;
        case '/':
            calculo = anterior / actual;
            break;
        case 'x':
            calculo = anterior * actual;
            break;
        default:
            return;
    }
    operacionActual = calculo;
    operacion = undefined;
    operacionAnterior = '';

}

function agregarNumero(num){
    operacionActual= operacionActual.toString()+ num.toString();
    actualizarDisplay();
}

function clear(){
    operacionActual = "";
    operacionAnterior = "";
    operacion = undefined;
}

function actualizarDisplay(){
    result.value = operacionActual;
}

clear();


