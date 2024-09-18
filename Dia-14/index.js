let nome = ""
let salario = 0

function dadosColaborador(nome, salario){
    nome = prompt("Qual é o seu nome?")
    salario = parseFloat(prompt("Qual o seu salário atual? R$"))
    aumentoSalario(nome, salario)
}

function aumentoSalario(nome, salario){
    let aumento = 0
    let novoSalario = 0
    
    if (salario <= 1500){
            aumento = 0.2
            novoSalario = salario + (salario * aumento)
            console.log(nome + ", seu salário era de R$" + salario + ", teve aumento de 20%, e agora passa a ser de: R$" + novoSalario)

    } else if (salario >= 1501 && salario <= 2000){
            aumento = 0.15
            novoSalario = salario + (salario * aumento)
            console.log(nome + ", seu salário era de R$" + salario + ", teve aumento de 15%, e agora passa a ser de: R$" + novoSalario)
        
    } else if (salario >= 2001 && salario <= 3000){
            aumento = 0.1
            novoSalario = salario + (salario * aumento)
            console.log(nome + ", seu salário era de R$" + salario + ", teve aumento de 10%, e agora passa a ser de: R$" + novoSalario)
        
    } else {
            aumento = 0.05
            novoSalario = salario + (salario * aumento)
            console.log(nome + ", seu salário era de R$" + salario + ", teve aumento de 5%, e agora passa a ser de: R$" + novoSalario)
    }

    calcularNovamente()
}

function calcularNovamente(){
    let resposta = prompt("Você deseja calcular novamente com outros dados?  (s/n)")
    if (resposta == "s"){
        dadosColaborador(nome, salario)
    } else {
        console.log("O programa encerrou!")
    }
}

