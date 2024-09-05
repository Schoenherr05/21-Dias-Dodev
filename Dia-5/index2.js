let opção = prompt("escolha uma das 3 opções: (gasolina / álcool / calibrar os pneus)")
let litroGasolina = 5
let litroAlcool = 3

switch (opção){
    case "gasolina":
       let num1 = Number(prompt("insira o valor que deseja abastecer:   *(litro da gasolina R$5)*"))
        console.log("Você abasteceu " +(num1 / litroGasolina) + " litros")
        break;
    case "álcool":
        let num2 = Number(prompt("insira o valor que deseja abastecer:   *(litro do álcool 3R$)*"))
        console.log("Você abasteceu " +(num2 / litroAlcool) + " litros")
        break;
    case "calibrar os pneus":
        console.log("Pneus calibrados com sucesso!")
        break;
    default:
        console.log("opção inválida!")
        break;
}
