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

let frames, jogando=false;

//Altura de elementos
let hBarra = 140, hCampo = 400;

function teclaDown(event){
    if(event.key=='ArrowUp'){
        diryJogador = -1;
    } else if(event.key=='ArrowDown'){
        diryJogador = 1;
    }
}

function teclaUp(event){
    if(event.key=='ArrowUp'){
        diryJogador = 0;
    } else if(event.key = 'ArrowDown'){
        diryJogador = 0;
    }
}

function controlaJogador(){
        posyJogador += diryJogador * velJogador;
        if(posyJogador+hBarra>=hCampo || posyJogador<0){
            posyJogador += diryJogador * velJogador *(-1);
        }
        
        jogador.style.top = posyJogador+'px';
}

function game(){
    if(jogando){
        controlaJogador();
    }
    requestAnimationFrame(game);
}
function iniciarJogo(){
    if(!jogando){
        jogando = true;
        diryJogador = 0;
        posyJogador = 138;
        velJogador = 5;
        document.addEventListener('keydown', function(event){
            teclaDown(event);
        });
        document.addEventListener('keyup',function(event){
            teclaUp(event);
        });
        game();
    }
}

btniniciar.addEventListener('click',iniciarJogo);