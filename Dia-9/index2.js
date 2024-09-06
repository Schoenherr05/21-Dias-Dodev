let nome = ""
let idade = 0
let salarioAtual = 0
let dados = ""
let aumento = 0.015

do { 
    nome = prompt("digite seu nome: ")
    idade = Number(prompt("digite sua idade: "))
    salarioAtual = parseFloat(prompt("digite seu salário atual: "))
    
    dados = prompt("Você digitou seus dados corretamente? (s/n)")

   } while(dados === "n")
    console.log("Seu nome é " + nome + ", você tem " + idade + " anos e seu salário atual é de: R$" + salarioAtual)

    salarioAtual = parseFloat(salarioAtual)
    console.log("Previsão de aumento salarial para os próximos 10 anos:")

    for(let ano = 1; ano <= 10; ano++){
        salarioAtual += salarioAtual * aumento
        aumento *= 2
        //console.log((2024 + ano) + " = R$" + salarioAtual)
        console.log((2024 + ano) + " = R$" + salarioAtual.toLocaleString(undefined, { maximumFractionDigits: 2, minimumFractionDigits: 2 }))
    }
