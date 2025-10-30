let names = ['Carolina', 'Marco', 'Morgana']

console.log('\n')
console.log(names)

console.log(`${names[1]}`)

let carolina = names[0]

console.log(carolina + '\n')

names.push('Duke', 'Theo', 'Fernando')

console.log(names)

let namePosition = names.indexOf('Duke')
console.log(namePosition)

names.unshift('Mikael')

console.log(names)

names.pop()
names.shift()

console.log(names)
console.log(!!names.length)

namePosition = names.indexOf('Duke')
console.log(namePosition)

let newList = names.splice(namePosition, 2)
console.log(names)

names.sort()
console.log(names)

console.log('\n')