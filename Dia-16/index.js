let nomes = []
let senhas = []

function pergutandoAoUsuario(){
    let opçao = prompt("Qual operação você deseja realizar?  (1 - cadastrar / 2 - login / 3 - excluir cadastro / 4 - encerrar o programa)")
    return opçao 
}

function cadastroUsuario(){
    nomes.push(prompt("Digite seu nome: "))
    senhas.push(prompt("Digite sua senha: "))
    alert("Cadastro realizado com sucesso!")
}

function loginUsuario(nome, senha){
    let index = nomes.indexOf(nome)
    if (index !== -1 && senhas[index] === senha){
        return true;
    } else {
        return false;
    }
}

function excluirCadastro(nome){
    let index = nomes.indexOf(nome)
    if (index !== -1){
        nomes.splice(index, 1)
        senhas.splice(index, 1)
        alert("Cadastro excluído com sucesso!")
    } else {
        alert("Usuário não encontrado!")
    }
}

let continuar = true;

while (continuar){

    let opçao = pergutandoAoUsuario();

    switch (opçao){
        case "1":
            cadastroUsuario();
            break;

        case "2":
            let nome = prompt("Digite seu nome: ")
            let senha = prompt("Digite sua senha: ")
            let login = loginUsuario(nome, senha);
            if (login){
                alert("Login realizado com sucesso. Bem-Vindo!")
            } else {
                alert("ERRO! - nome ou senha incorretos.")
            }
            break;

        case "3":
            let nomeExcluir = prompt("Digite seu nome: ")
            excluirCadastro(nomeExcluir);
            break;

        case "4":
            continuar = false;
            console.log("O programa encerrou!")
            break;

        default:
            alert("Opção inválida! Tente outra.")
            break;
    }
        
}