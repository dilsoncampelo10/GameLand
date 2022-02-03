//Elementos
let btniniciar = document.getElementById('iniciar');
let jogador = document.getElementById('jogador');
let cpu = document.getElementById('cpu');
let bola = document.getElementById('bola');
let pontos = document.getElementById('pontos');

//Controle
let posyJogador, posyCpu, posyBola, posxBola;

let diryJogador, diryCpu, dirYBola, dirxBola;

let velJogador, velCpu, velBola;

let frames;

function teclaDown(event){
    if(event.key==''){

    }
    console.log(event);
}

function teclaUp(){

}

function iniciarJogo(){

}

document.addEventListener('keydown', teclaDown);