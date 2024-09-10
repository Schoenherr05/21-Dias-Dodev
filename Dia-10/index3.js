let listaNumeros = []
let listaInvertida = []

let qtdNumeros = parseInt(prompt("Quantos números você deseja inserir na sua lista? "))

for(let posicaoNumeros = 0; posicaoNumeros < qtdNumeros; posicaoNumeros++){
    let numero = parseInt(prompt("Digite o " + (posicaoNumeros + 1) + "° número: " ))
    listaNumeros[posicaoNumeros] = numero
}

let posicaoListaInvertida = 0

for(let posicaoNumeros = qtdNumeros - 1; posicaoNumeros >= 0; posicaoNumeros--){
    listaInvertida[posicaoListaInvertida] = listaNumeros[posicaoNumeros]
    posicaoListaInvertida++
}

console.log("Lista original: " + listaNumeros)
console.log("Lista invertida: " + listaInvertida)