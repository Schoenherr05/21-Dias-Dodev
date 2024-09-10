let listaNumeros = []
let listaInvertida = []

for(let posicaoNumeros = 0; posicaoNumeros < 5; posicaoNumeros++){
    let numero = parseInt(prompt("Digite o " + (posicaoNumeros + 1) + "° número: " ))
    listaNumeros[posicaoNumeros] = numero
}

let posicaoListaInvertida = 0

for(let posicaoNumeros = 4; posicaoNumeros >= 0; posicaoNumeros--){
    listaInvertida[posicaoListaInvertida] = listaNumeros[posicaoNumeros]
    posicaoListaInvertida++
}

console.log("Lista original: " + listaNumeros)
console.log("Lista invertida: " + listaInvertida)
