let nome = ""
let cpf = 0
let saldo = 1000
let mairoValorInserido = 0
let qtdTransacoes = 0
let somaValoresInseridos = 0
let continuar = false;

do{
    nome = prompt("Insira seu nome: ")
    cpf = prompt("Insira seu CPF: ")
    let operacao = prompt("Qual operação você deseja realizar?  (saque/depósito)")
    let valor = Number(prompt("Qual valor você deseja? R$"))

    if(valor < 0){
        console.log("ERRO - valor inválido! A transação não foi concluída.")
    } else if(operacao === "saque" && valor > saldo){
        console.log("ERRO - valor indisponível para saque! A transação não foi concluída.")
    } else if(operacao === "saque"){
        console.log(`Olá ${nome}, cpf ${cpf}, seu saldo atual é de R$${saldo}.`)
        saldo -= valor
        qtdTransacoes++
        somaValoresInseridos += valor
        if(valor > mairoValorInserido){
            mairoValorInserido = valor
        }
        console.log(`Transação realizada com sucesso! Seu saldo agora é de: R$${saldo}`)

    } else {
        console.log(`Olá ${nome}, cpf ${cpf}, seu saldo atual é de: R$${saldo}`)
        saldo += valor
        qtdTransacoes++
        somaValoresInseridos += valor
        if(valor > mairoValorInserido){
            mairoValorInserido = valor
        }
        console.log(`Transação realizada com sucesso! Seu saldo agora é de: R$${saldo}`)
    }

    continuar = prompt("Digite 1 se deseja continuar e 2 se deseja parar: ")
    if(continuar == "1"){
        continuar = true;
    } else if(continuar == "2"){
        continuar = false;
    } else {
        console.log("Opção inválida! O programa encerrou.")
        continuar = false;
    } 
} while(continuar)

console.log("O seu saldo total é de: R$" + saldo)
console.log("O maior valor inserido foi de: R$" + mairoValorInserido)
console.log("A média dos valores inseridos foi de: R$" + (somaValoresInseridos / qtdTransacoes))