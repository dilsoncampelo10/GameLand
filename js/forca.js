const palavras = ['mochila','violao','protocolo','flanela','computador','jaqueta','motocicleta','eclipse','luneta','eletricide'];

let sorteio = Math.round(Math.random()*(palavras.length-1));


let palavra = palavras[sorteio];

let letra = document.getElementById('letra_p');

let erros = 0;

let acertos = 0;
function renderizaPalavra(){

    for(let i=0;i<palavra.length;i++){
        document.getElementById('area_palavra').innerHTML += `
        <input type=text maxlength="1" class="letra" disabled>
    `
    }
    
}

function validarLetra(){
    let busca = palavra.indexOf(letra.value);
    const indices = [];
    if(letra.value==''){
        alert('Digite uma letra válida')
    } else{

        if(busca<0){
            erros++;
            document.getElementById('erro').innerHTML = `Quantidade de erros ${erros}`;
            trocaImagem();
            vitoriaouderrota();
            
        } else{
            
            vitoriaouderrota();
            //Loop que percorre a palavra para encontrar todas as ocorrencias
            while(busca!=-1){
                acertos++;
                indices.push(busca);
                busca = palavra.indexOf(letra.value,busca+1);
            }
            //Loop que mostra na tela as ocorrencias 
            for(let i=0;i<indices.length;i++){
                document.getElementsByClassName('letra')[indices[i]].value = letra.value;
            }  
                
        }
        letra.value = '';
        letra.focus(); 
    }
    
   
    
   // while()
}

function vitoriaouderrota(){
    if(erros>5){
        alert('GAME OVER');
        reinicia();
    } 
  
        if(acertos==palavra.length-1){
            alert('Parabéns, você venceu! \nPalavra: '+ palavra);
            reinicia();
        }
    
    
}
function trocaImagem(){
    let imagem = document.getElementById('img_forca');
    switch(erros){
        case 1:
            imagem.src = `images/assets_forca/cabeca.png`;
            break;
        case 2: 
            imagem.src = `images/assets_forca/corpo.png`;
            break;
        case 3:
            imagem.src = `images/assets_forca/pernas.png`;
            break;
        case 4:
            imagem.src = `images/assets_forca/bracos.png`;
            break;
        case 5:
            imagem.src = `images/assets_forca/rosto.png`;
            break;
    }
}

function reinicia(){
    document.location.reload();
}
window.onload = renderizaPalavra();
//Reinicia jogo
document.getElementById('reiniciar').addEventListener('click',reinicia);

document.getElementById('validar').addEventListener('click',validarLetra);

/*document.addEventListener('keydown',function(e){
    
})*/

letra.addEventListener('keydown', function(e){
    if(e.key=='Enter'){
        validarLetra();
    }
})