let arrayAnos = []
let arrayModelos = []
let arrayValores = []
let continuar = true;
contador = 0

while(continuar){

    let carro = prompt("Nome do carro: ")
    let ano = parseInt(prompt("Ano do carro: "))
    let valor = prompt("Preço do carro: R$")
    arrayModelos[contador] = carro
    arrayAnos[contador] = ano
    arrayValores[contador] = valor
    contador++

    let resposta = prompt("Você deseja cadastrar mais algum carro?  (s/n)")
    if(resposta === "n")
        continuar = false;
}

for(let i = 0; i < arrayValores.length - 1; i++){
  for(let j = 0; j < arrayValores.length - i - 1; j++){
      if(arrayValores[j] > arrayValores[j + 1]){

        let modeloMaiorValor = arrayModelos[j]
        arrayModelos[j] = arrayModelos[j + 1]
        arrayModelos[j + 1] = modeloMaiorValor

        let anoMaiorValor = arrayAnos[j]
        arrayAnos[j] = arrayAnos[j + 1]
        arrayAnos[j + 1] = anoMaiorValor

        let valoresMaiorValor = arrayValores[j]
        arrayValores[j] = arrayValores[j + 1]
        arrayValores[j + 1] = valoresMaiorValor
      }
    }
}

console.log("Carros cadastrados:")
for(let i = 0; i < arrayModelos.length; i++){
    console.log(arrayModelos[i] + " - " + arrayAnos[i] + " - R$" + arrayValores[i])
}