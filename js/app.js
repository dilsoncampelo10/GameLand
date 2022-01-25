const jogos = [
    {
        titulo: 'Jogo da forca',
        descricao:'Acerte a palavra!',
        img: 'images/forca.png',
        page: 'forca.html'
        
    },
    {
        titulo: 'Jogo da velha',
        descricao:'Clássico jogo da velha',
        img: 'images/velha.png',
        page: 'velha.html'
    },
    {
        titulo:'Pong Ping',
        descricao:'Ping pong virtual',
        img: 'images/pong.png',
        page: 'pong.html'
    },
    {
        titulo:'Luta intergaláctica',
        descricao: 'Um jogo de combate espacial',
        img: 'images/nave.png',
        page: 'nave.html'
    }
]

let criarJogos = () =>{
    let painel = document.getElementById('painel');

    for(let i=0;i<jogos.length;i++){
        painel.innerHTML += `
        <div class='jogo'>
            <h1>`+jogos[i].titulo+`</h1>
            <p>`+jogos[i].descricao+`</p>
            <img src='`+jogos[i].img+`'alt=`+jogos[i].titulo+`
            <br>
            <a href=`+jogos[i].page+` class='button'>Jogar</a> 
            
        </div>
    ` 
    }
 
}

criarJogos();