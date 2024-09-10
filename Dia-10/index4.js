let numero = 0 

do{
    numero = parseInt(prompt("Digite um número positivo: "))
    
} while(numero < 0)
    
let listaFibonacci = [numero -1, numero]
for(let posicao = 0; posicao < 8; posicao++){
    listaFibonacci[posicao + 2] = listaFibonacci[posicao] + listaFibonacci[posicao + 1]
    
}
console.log("Fibonacci: " + listaFibonacci)