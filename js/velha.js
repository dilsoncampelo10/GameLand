const tabuleiroFuncional = [
['','',''],
['','',''],
['','','']
]

let velha = document.getElementsByClassName('velha');

let tabuleiroVisual = [
[velha[0],velha[1],velha[2]],
[velha[3],velha[4],velha[5]],
[velha[6],velha[7],velha[8]]
]

let vezJoga = 0; //0-Jogador 1-CPU

let jogoRolando = true;

let vencedor = '';

function jogar(){
    for(let i=0;i<velha.length;i++){
        velha[i].addEventListener('click',function(){
            marcar(i+1);
        })
    }
}

//recebe como parâmetro a posição da velha
function marcar(p){
    if(jogoRolando && vezJoga==0){
        switch(p){
            case 1:
                if(tabuleiroFuncional[0][0]==''){
                    tabuleiroFuncional[0][0] = 'X';
                    vezJoga = 1;
                
                }                
                break;
            case 2: 
                if(tabuleiroFuncional[0][1]==''){
                    tabuleiroFuncional[0][1] = 'X';
                    vezJoga = 1;
        
                }
                break;
            case 3:
                if(tabuleiroFuncional[0][2]==''){
                    tabuleiroFuncional[0][2] = 'X';
                    vezJoga = 1;
                }
                break;
                
            case 4: 
                if(tabuleiroFuncional[1][0]==''){
                    tabuleiroFuncional[1][0] = 'X';
                    vezJoga = 1;
                }
                break;
               
            case 5: 
                if(tabuleiroFuncional[1][1]==''){
                    tabuleiroFuncional[1][1] = 'X';
                    vezJoga = 1;
                }
                break;
                
            case 6:
                if(tabuleiroFuncional[1][2]==''){
                    tabuleiroFuncional[1][2] = 'X';
                    vezJoga = 1;
                }
                break;
                
            case 7: 
                if(tabuleiroFuncional[2][0]==''){
                    tabuleiroFuncional[2][0] = 'X';
                    vezJoga = 1;
                }
                break;
                
            case 8:
                if(tabuleiroFuncional[2][1]==''){
                    tabuleiroFuncional[2][1] = 'X';
                    vezJoga = 1;
                }
                break;
                
            case 9:
                if(tabuleiroFuncional[2][2]==''){
                    tabuleiroFuncional[2][2] = 'X';
                    vezJoga = 1;          
                }       
                break;       
        }
    }
    cpuJoga();
    renderizar();
}

function cpuJoga(){
    if(jogoRolando && vezJoga==1){
        let l,c;
   do{
        l = Math.round(Math.random()*2);
        c = Math.round(Math.random()*2);
    } while(tabuleiroFuncional[l][c]!='');
    tabuleiroFuncional[l][c] = 'O';
    }
    vencedor = verificaVitoria();
    if(vencedor!=''){
        alert('O vencedor foi '+vencedor);
        jogoRolando = false;
    }
    
    vezJoga = 0;
}

function renderizar(){
    for(let l=0;l<3;l++){
        for(let c=0; c<3;c++){
            if(tabuleiroFuncional[l][c]=='X'){
                tabuleiroVisual[l][c].innerHTML = 'X';
                tabuleiroVisual[l][c].style.cursor = 'default';
            } else if(tabuleiroFuncional[l][c]=='O'){
                tabuleiroVisual[l][c].innerHTML = 'O'; 
                tabuleiroVisual[l][c].style.cursor = 'default';
            } else{
                
               
            }
        }
    }
}

function verificaVitoria(){
    let resultado = '';
    let l,c;
    //Verifica Linhas
    for(l=0;l<3;l++){
        if(tabuleiroFuncional[l][0]==tabuleiroFuncional[l][1]&& tabuleiroFuncional[l][1]== tabuleiroFuncional[l][2]){
            resultado = tabuleiroFuncional[l][0]; 
        }
    }
    //Verifica Colunas
    for(c=0;c<3;c++){
        if(tabuleiroFuncional[0][c]==tabuleiroFuncional[1][c]&&tabuleiroFuncional[1][c]==tabuleiroFuncional[2][c]){
            resultado = tabuleiroFuncional[0][c];
        }
    }

    //Verifica Diagonal 1
    if(tabuleiroFuncional[0][0]==tabuleiroFuncional[1][1]&& tabuleiroFuncional[1][1]==tabuleiroFuncional[2][2]){
        resultado = tabuleiroFuncional[0][0];
    }

    //Verifica Diagonal 2
    if(tabuleiroFuncional[0][2]==tabuleiroFuncional[1][1] && tabuleiroFuncional[1][1]== tabuleiroFuncional[2][0]){
        resultado = tabuleiroFuncional[2][0];
    }

    return resultado;
}
window.onload = jogar();