let contagemCarrinho = 0

function atualizarCarrinho(num) {
    const divCarrinho = document.getElementById('carrinho')
    if (divCarrinho) {
        divCarrinho.textContent = `${contagemCarrinho}`
    }
}

function adicionarAoCarrinho(){
    contagemCarrinho++
    atualizarCarrinho()
}