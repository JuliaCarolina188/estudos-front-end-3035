let pessoa = {nome:'Carolina', 
    idade:17,
    cpf:'0000',
    pets: ['Cenoura', 'Sakura'],
    brasileiro: true,
    carros: {
        ford: {
            cor: 'branca',
            ano: '2025'
        }
    },
    andar: function () {
        console.log('*andando')
    }
}

console.log(`\nNome: ${pessoa.nome}\nIdade: ${pessoa.idade}\n`)
console.log(`${pessoa.carros.ford.ano}`)

pessoa.carros.ford.ano = '2002'

console.log(`\n${pessoa.carros.ford.ano}\n`)