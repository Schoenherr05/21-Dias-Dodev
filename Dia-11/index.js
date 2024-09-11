let arrayAlunos = []
let arrayNotas = []
let continuar = true;
let contador = 0

while(continuar){
    let nome = prompt("Digite o nome do " + (contador + 1) + "° aluno: ")
    let nota = parseFloat(prompt("Digite a nota do aluno: "))
    arrayAlunos[contador] = nome
    arrayNotas[contador] = nota
    contador++

    let resposta = prompt("Deseja inserir dados de outro aluno? (s/n)")
    if(resposta === "n")
      continuar = false;
}

console.log("Notas dos alunos: ")
for(let posicao = 0; posicao < arrayAlunos.length; posicao ++){
  console.log(arrayAlunos[posicao] + " - " + arrayNotas[posicao])
}

let somaNotas = 0
for(let i = 0; i < arrayNotas.length; i++){
  somaNotas += arrayNotas[i]
}

let mediaNotas = somaNotas / arrayAlunos.length
console.log("A soma das notas foram: " + somaNotas)
console.log("A média geral das notas foi de: " + mediaNotas.toFixed(1))