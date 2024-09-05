let nome = ""
let idade = 0
let peso = 0
let altura = 0
let continuar = ""

do {
    nome = prompt("Qual seu nome? ")
idade = parseInt(prompt("qual sua idade? "))
peso = Number(prompt("qual seu peso? "))
altura = Number(prompt("qual sua altura? "))
profissão = prompt("Qual sua profissão? ")

console.log("Olá " + nome + ", você tem " + idade + " anos, é " + profissão + ", tem " + altura + "m de altura e pesa " + peso + "kg.")

if(idade >= 18){
    console.log("Você está liberado para tomar umas geladas!") 
}   else{
    console.log("Sem gelada pra você hoje amigão :/")
}
let anoAtual = 2024
let anoNasc = anoAtual - idade
    console.log("Você nasceu em: " + anoNasc)

let meses = idade * 12
let semanas = idade * 52
let dias = idade * 365
    console.log("Sua idade em meses é: " + meses)
    console.log("Sua idade em semanas é: " + semanas)
    console.log("Sua idade em dias é: " + dias)

let imc = peso / (altura * altura)
console.log("O seu IMC é " + imc.toFixed(2))

if(imc <= 18.5){
    console.log("Sua faixa do IMC está em Magreza!")
}   else if(imc > 18.5 && imc <= 24.9){
    console.log("Sua faixa do IMC está Normal!")
}   else if(imc > 24.9 && imc <= 30){
    console.log("Sua faixa do IMC está em Sobrepeso!")
}   else{
    console.log("Sua faixa do IMC está em Obesidade!")
}

let anosVividos = anoNasc
let idadeAtual = 0
 
for(let anosVividos = anoNasc; anosVividos <= anoAtual; anosVividos++){
    console.log(anosVividos + " - " + idadeAtual + " anos de idade")
    idadeAtual++
}
    continuar = prompt("você deseja inserir os dados novamente? (s/n)")
  } while(continuar == "s")
    console.log("O programa encerrou!")