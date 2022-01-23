const jogos = [
    {
        titulo: 'Jogo da forca',
        descricao:'Acerte a palavra!',
        img: '',
        page: 'forca.html'
        
    },
    {
        titulo: 'Jogo da velha',
        descricao:'Clássico jogo da velha',
        img: '',
        page: 'velha.html'
    },
    {
        titulo:'Pong Ping',
        descricao:'Ping pong virtual',
        img: '',
        page: 'pong.html'
    },
    {
        titulo:'Luta intergaláctica',
        descricao: 'Um jogo de combate espacial',
        img: '',
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
            <img src='`+jogos[i].img+ `alt=`+jogos[i].titulo+`
            <a href=`+jogos[i].page+`>Jogar</a> 
        </div>
    ` 
    }
 
}

criarJogos();