//ARRAY É UMA VARIAVEL COMPOSTA COM VARIOS ELEMENTOS CADA ELEMENTO COMPOSTO POR SEU VALOR E UMA CHAVE DE IDENTIFICAÇÃO

let num = [5, 8, 2, 9, 3]

// ADICIONANDO ELEMENTOS NA ARRAY
// num[3] = 6  // ADICIONA O VALOR 6 NA CHAVE 3 - ESPECIFICA O LUGAR
num.push(1) // ADICIONA UM ELEMENTO NO FINAL DA ARRAY
num.sort() // ORGANIZA OS ELEMENTOS EM ORDEM CRESCENTE

console.log(num)
console.log(`O vetor tem ${num.length} posições`) // RETORNA O TAMANHO DA ARRAY
console.log(`Primeiro valor do vetor é ${num[0]}`)

let pos = num.indexOf(8)
if(pos == -1){
    console.log('O valor nao foi encontrado!')
} else {
    console.log(`O valor 8 esta na posição ${pos}`)
}

