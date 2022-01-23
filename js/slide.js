let imagens = [];
let slide;
let posicao;
let tamanho;
let tempo;

//Adiciona as imagens em um vetor
function precarregar(){
    for(let i=0;i<6;i++){
        imagens[i] = new Image();
        imagens[i].src = `images/i${i}.jpg`;
    }
}

//Renderiza a imagem na tela
function carregarimagem(pos){
    slide = document.getElementsByClassName('slider');
    slide[0].style.backgroundImage = `url('${imagens[pos].src}')`;
}

function troca(dir){
    posicao += dir;
    if(posicao>tamanho-1){
        posicao = 0;
    } 
    if(posicao<0){
        posicao = tamanho-1;
    }
    carregarimagem(posicao);
}
window.onload = function(){
    precarregar();
    posicao = 0;
    tamanho = imagens.length;
    tempo = 6000;
    carregarimagem(posicao);
    setInterval(function(){
        troca(1);
    }, tempo);
    
}

