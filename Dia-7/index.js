let mediaGeral = 0
let qtdHomens = 0 
let maiorNotaHomens = 0
let qtdMulheresAcima7 = 0
let contador = 1

while(contador <= 10){
    nota = Number(prompt("digite a nota do " + contador + "° aluno: "))
    sexo = prompt("qual o sexo do aluno?  (m/f)")
    if(sexo === "m"){
        if(nota > maiorNotaHomens){
            maiorNotaHomens = nota
        }
        qtdHomens++
    }
    if(sexo === "f" && nota > 7){
        qtdMulheresAcima7++
    }
    mediaGeral =+ nota
    contador++
}
mediaGeral = mediaGeral / 10

console.log("A media geral dos alunos foi: " + mediaGeral)
console.log("A quantidade de homens foi: " + qtdHomens)
console.log("A maior nota entre os homens foi: " + maiorNotaHomens)
console.log("A quantidade de mulheres com nota acima de 7 foi: " + qtdMulheresAcima7)