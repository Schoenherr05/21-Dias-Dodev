let nomes = []
let senhas = []
let continuar = true;
let contador = 0

while(continuar){

    let opcao = prompt("O que você deseja? (1 - cadastrar / 2 - login / 3 - excluir cadastro / 4 - encerrar o programa)")

    switch (opcao){
        case "1":
            nomes[contador] = prompt("Digite o nome: ")
            senhas[contador] = prompt("Digite a senha: ")
            alert(nomes[contador] + ", seu cadastro foi concluído com sucesso!")
            contador++

            break;

        case "2":
            let nome = prompt("Insira seu nome: ")
            let senha = prompt("Insira sua senha: ")
            let loginValido = false;

            for (let i = 0; i < nomes.length; i++){
                if(nome == nomes[i] && senha == senhas[i])
                    loginValido = true;
            }
            if (loginValido == true){
                alert("Login realizado com sucesso. Bem-vindo!")
            } else {
                alert("Login ou senha incorretos!")
            }

            break;

        case "3":
            let nomeExcluir = prompt("Qual o nome que deseja excluir? ")
            let nomesAux = []
            let senhasAux = []
            let contadorAux = 0

            for (let i = 0; i < contador; i++){
                if (nomeExcluir == nomes[i]){
                    alert("Cadastro excluído com sucesso!")
                } else {
                    nomesAux[contadorAux] = nomes[i]
                    senhasAux[contadorAux] = senhas[i]
                    contadorAux++
                }
            }

            nomes = nomesAux
            senhas = senhasAux
            contador --

            break;

        case "4":
            console.log("O programa encerrou.")
            continuar = false;
            break;
        default:
            alert("Opção inválida!")
            continuar = true;
            break;
    }
}