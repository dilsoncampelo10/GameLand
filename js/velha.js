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

let nivel = 2;

let jogada =0;


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
    jogada++;
    cpuJoga();
    renderizar();
}

function cpuJoga(){
    if(jogoRolando && vezJoga==1){
        let l,c;
        if(nivel==1){
            do{
                l = Math.round(Math.random()*2);
                c = Math.round(Math.random()*2);
            } while(tabuleiroFuncional[l][c]!='' && jogada<9);
            tabuleiroFuncional[l][c] = 'O';
        } else if(nivel==2){
            //Linha 1
            if(tabuleiroFuncional[0][0]==tabuleiroFuncional[0][1] && tabuleiroFuncional[0][2]==''){
                tabuleiroFuncional[0][2] = 'O';
            } else if(tabuleiroFuncional[0][1]==tabuleiroFuncional[0][2]&&tabuleiroFuncional[0][0]==''){
                tabuleiroFuncional[0][0]=='O';
            } else if(tabuleiroFuncional[0][0]==tabuleiroFuncional[0][2] && tabuleiroFuncional[0][1]=='' ){
                tabuleiroFuncional[0][1] = 'O';
            } else
            //Linha 2
            if(tabuleiroFuncional[1][0]==tabuleiroFuncional[1][1] && tabuleiroFuncional[1][2]==''){
                tabuleiroFuncional[1][2] = 'O';
            } else if(tabuleiroFuncional[1][1]==tabuleiroFuncional[1][2]&&tabuleiroFuncional[1][0]==''){
                tabuleiroFuncional[1][0] = 'O';
            } else if(tabuleiroFuncional[1][0]==tabuleiroFuncional[1][2]&&tabuleiroFuncional[1][1]==''){
                tabuleiroFuncional[1][1] = 'O';
            } else
            //Linha 3
            if(tabuleiroFuncional[2][0]==tabuleiroFuncional[2][1] && tabuleiroFuncional[2][2]==''){
                tabuleiroFuncional[2][2] = 'O';
            } else if(tabuleiroFuncional[2][1]==tabuleiroFuncional[2][2] && tabuleiroFuncional[2][0]==''){
                tabuleiroFuncional[2][0]='O';
            } else if(tabuleiroFuncional[2][0]==tabuleiroFuncional[2][2] && tabuleiroFuncional[2][1]==''){
                tabuleiroFuncional[2][1] = 'O';
            } else
            //Coluna 1
            if(tabuleiroFuncional[0][0]==tabuleiroFuncional[1][0] && tabuleiroFuncional[2][0]==''){
                tabuleiroFuncional[2][0] = 'O';
            } else if (tabuleiroFuncional[1][0]==tabuleiroFuncional[2][0] && tabuleiroFuncional[0][0] == ''){
                tabuleiroFuncional[0][0] = 'O';
            } else if(tabuleiroFuncional[0][0]==tabuleiroFuncional[2][0] && tabuleiroFuncional[1][0]==''){
                tabuleiroFuncional[1][0] = 'O';
            } else
            //Coluna 2
            if(tabuleiroFuncional[0][1]==tabuleiroFuncional[1][1] && tabuleiroFuncional[2][1]==''){
                tabuleiroFuncional[2][1] = 'O';
            } else if(tabuleiroFuncional[1][1]==tabuleiroFuncional[2][1] && tabuleiroFuncional[0][1]==''){
                tabuleiroFuncional[0][1] = 'O';
            } else if (tabuleiroFuncional[0][1]==tabuleiroFuncional[2][1] && tabuleiroFuncional[1][1]==''){
                tabuleiroFuncional[1][1] = 'O';
            } else
            //Coluna 3
            if(tabuleiroFuncional[0][2]==tabuleiroFuncional[1][2] && tabuleiroFuncional[2][2]=='' ){
                tabuleiroFuncional[2][2] = 'O';
            } else if(tabuleiroFuncional[1][2]==tabuleiroFuncional[2][2] && tabuleiroFuncional[0][2]==''){
                tabuleiroFuncional[0][2] = 'O';
            } else if(tabuleiroFuncional[2][2] == tabuleiroFuncional[0][2] && tabuleiroFuncional[1][2]==''){
                tabuleiroFuncional[1][2] = 'O';
            } else
            //Diagonal 1
            if(tabuleiroFuncional[0][0]==tabuleiroFuncional[1][1] && tabuleiroFuncional[2][2]==''){
                tabuleiroFuncional[2][2] = 'O';
            } else if(tabuleiroFuncional[0][0]==tabuleiroFuncional[2][2] && tabuleiroFuncional[1][1]==''){
                tabuleiroFuncional[1][1] = 'O';
            } else if(tabuleiroFuncional[1][1]==tabuleiroFuncional[2][2] && tabuleiroFuncional[0][0]==''){
                tabuleiroFuncional[0][0]=='O';
            } else
            //Diagonal 2
            if(tabuleiroFuncional[0][2]==tabuleiroFuncional[1][1] && tabuleiroFuncional[2][0]==''){
                tabuleiroFuncional[2][0] = 'O';
            } else if(tabuleiroFuncional[0][2]==tabuleiroFuncional[2][0] && tabuleiroFuncional[1][1] == ''){
                tabuleiroFuncional[1][1] = 'O';
            } else if(tabuleiroFuncional[1][1] == tabuleiroFuncional[2][0] && tabuleiroFuncional[0][2]==''){
                tabuleiroFuncional[0][2] = 'O';
            } else{
                
                do{
                     l = Math.round(Math.random()*2);
                     c = Math.round(Math.random()*2);
                } while(tabuleiroFuncional[l][c]!='' && jogada<9);
                tabuleiroFuncional[l][c] = 'O';
            }

        }
   
    }

    jogada++;
    
    vezJoga = 0;
    vencedor = verificaVitoria();
    if(vencedor!=''){
        alert('O vencedor foi '+vencedor);
        jogoRolando = false;
    }
    if(jogada>=9 && vencedor==''){
        jogoRolando = false;
        alert('Deu velha');
    }
    
    
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

document.getElementById('reiniciar').addEventListener('click',function(){
    document.location.reload();
})

document.getElementById('facil').addEventListener('click',function(){
    nivel = 1;
})

document.getElementById('normal').addEventListener('click',function(){
    nivel = 2;
})
window.onload = jogar();