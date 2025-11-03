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

function raizQuadrada () {
    const numero = document.getElementById('numero').value

    if (numero < 0) {
        document.getElementById('resultado').innerHTML = `Por favor, digite um número válido`

        return
    }

    
    document.getElementById('resultado').innerHTML = `O resultado é ${Math.sqrt(numero)}!!`
}

const botao = document.getElementById('botaoCor');

botao.addEventListener('click', mudarCorDiv);