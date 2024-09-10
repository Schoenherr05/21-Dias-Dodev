let array = [];
let indices = [];
let contadorDeIndice = 0

for(let i = 0; i < 10; i++){
    let elemento = parseInt(prompt(`Digite o elemento ${i + 1}: `))
    array[i] = elemento
}

let numeroInserido = parseInt(prompt("Insira o número que deseja buscar: "))

for(let i = 0; i < 10; i++){
    if(array[i] === numeroInserido){
        indices[contadorDeIndice] = i
        contadorDeIndice++
    }
}

if(contadorDeIndice == 0){
    console.log("Este número não foi encontrado em nenhuma posição da lista!")
} else(console.log(`O número ${numeroInserido} foi encontrado nos índices: ${indices}`))
 


