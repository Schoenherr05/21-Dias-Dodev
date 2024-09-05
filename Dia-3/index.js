// Declaração de variáveis
let nome = ""
let idade = 0
let peso = 0
let altura = 0

// Solicitando informações ao usuário

nome = prompt("Insira seu nome");
idade = parseInt(prompt("Insira sua idade"));
peso = parseFloat(prompt("Insira seu peso"));
altura = parseFloat(prompt("Insira sua altura"));

altura.toFixed(2);
peso.toFixed(1);

// Calculando ano de nascimento e imc

let anoNasc = 0
anoNasc = 2024 - idade;

let imc = 0
imc = peso / (altura * altura);
imc.toFixed(2);

// Exibindo informações no console

console.log("Olá " + nome + ", você tem " + idade + " anos, nasceu em " + anoNasc + ", tem " + altura + " de altura, pesa " + peso + " kg e seu IMC é " + imc + " Kg/m²")