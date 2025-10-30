function exemplo (numero) {
    console.log(`Exemplo de função: ${numero}`)
}

exemplo(10)
exemplo(2)
exemplo(300)

function exemplo2 (parameter){
    return parameter.toUpperCase() + '!!!'
}

const lower = exemplo2('Funções JavaScript')
console.log(lower)
console.log(exemplo2('o tempo segue escorrendo'))

function exemplo4 (num1=1, num2=1, num3=0) {
    return num1/num2 + num3
}

console.log(exemplo4(100, 25, 9))

let numeros  = exemplo4(5, 5, 0)
console.log(numeros)

let sobrenome = 'Dos Reis'

function exemplo5 (){
    let nome = 'aline'
    console.log(exemplo2(nome +' '+ sobrenome))
}

exemplo5()