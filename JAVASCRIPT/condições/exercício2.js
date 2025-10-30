let fruta = 'laranja'
let custo = null

// if (fruta === 'banana') {
//     custo = 0.45
// }
// else if (fruta==='mamão') {
//     custo = 0.80
// }
// else if (fruta === 'laranja'){
//     custo = 0.30
// }
// else if (fruta === 'morango') {
//     custo = 0.30
// }
// else {
//     custo = null
// }

switch (fruta) {
    case 'banana': 
        custo = 0.45 
        break
    case 'mamão': 
        custo = 0.80
        break
    case 'laranja' || 'morango': 
        custo = 0.30
        break
    default:
        custo = null
        break
    
}






console.log('\n')
if (custo != null) {
    console.log(`${fruta} custa R$ ${custo}`)
}
else {
    console.log('Desculpe, não temos essa fruta')
}
console.log('\n')