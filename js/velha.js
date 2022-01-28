const tabuleiroFuncional = [
['','',''],
['','',''],
['','','']
]
let velha = document.getElementsByClassName('velha');

let vezJoga = 0; //0-Jogador 1-CPU

let jogoRolando = true;

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
}

function cpuJoga(){
    if(jogoRolando && vezJoga==1){
        let l;
        let c;

   do{
        l = Math.round(Math.random()*2);
        c = Math.round(Math.random()*2);
    } while(tabuleiroFuncional[l][c]!='');
    tabuleiroFuncional[l][c] = 'O';
    }
    alert('Jogou')
    vezJoga = 0;
}

window.onload = jogar();