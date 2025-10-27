function gerarCorAleatoria() {
    const caracteresHex = '0123456789ABCDEF';
    let cor = '#';
    for (let i = 0; i < 6; i++) {
        cor += caracteresHex[Math.floor(Math.random() * 16)];
    }

    return cor; 
}

function mudarCorDiv() {
    const div = document.getElementById('minhaDiv');
    
    const novaCor = gerarCorAleatoria();

    div.style.backgroundColor = novaCor;
}

const botao = document.getElementById('botaoCor');

botao.addEventListener('click', mudarCorDiv);