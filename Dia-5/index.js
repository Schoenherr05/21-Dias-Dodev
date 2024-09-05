
let num1 = Number(prompt("Me de um número:"))
let num2 = Number(prompt("Agora me de outro número:"))
let operação = prompt("Agora escolha uma operação matemática para esses dois números: (soma/subtração/divisão/multiplicação)")

switch (operação){
    case "soma":
        console.log("A soma de " + num1 + " e " + num2 + " é: " + (num1 + num2))
        break;
    case "subtração":
        console.log("A diferença entre " + num1 + " e " + num2 + " é: " +(num1 - num2))
        break;
    case "divisão":
        console.log("A dvisão de " + num1 + " por " + num2 + " é igual a: " +(num1 / num2))
        break;
    case "multiplicação":
        console.log("O valor de " + num1 + " x " + num2 + " é igual a: " +(num1 * num2))
        break;
    default:
        console.log("Opção inválida")
        break;
}
    