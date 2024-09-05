let nome = prompt("Qual o seu nome?")
let idade = Number(prompt("Qual é sua idade?"))
let cnh = prompt("Você tem carteira de motorista?")
let carro = prompt("Você tem carro?")

if(idade <18 || cnh === "não"){
    console.log(nome + ", você não pode dirigir!")
}
if(idade >=18 && cnh === "sim" && carro === "não"){
    console.log(nome + ", você pode dirigir mas não tem um carro!")
}
if(idade >=18 && cnh === "sim" && carro === "sim"){
    console.log(nome + ", você vai ser o  motorista hoje!")
}