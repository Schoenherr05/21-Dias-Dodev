class Livro{
    Titulo
    Autor
    Editora
    AnoDePublicaçao
    Disponibilidade = true;
    constructor(Titulo, Autor, Editora, AnoDePublicaçao){
        this.Titulo = Titulo
        this.Autor = Autor
        this.Editora = Editora
        this.AnoDePublicaçao = AnoDePublicaçao
    }
}

let livros = []
livros.push(new Livro("A cobra mata abraçando", "Tarciso", "BlueBooks", 2010))
livros.push(new Livro("O guardião", "Nicholas Sparks", "AnyBooks", 2017))
livros.push(new Livro("Como se apaixonar em 10 passos", "Vitoria Souls", "BlueBooks", 2013))
livros.push(new Livro("Onde a luz não chega", "Jhon Chass", "ARPEC", 2022))

class Biblioteca{
    Nome
    Endereço
    Telefone
    AcervoLivros
    constructor(Nome, Endereço, Telefone, AcervoLivros){
        this.Nome = Nome
        this.Endereço = Endereço
        this.Telefone = Telefone
        this.AcervoLivros = []
    }


    buscarLivro(Titulo){
        livros.forEach(livro => {
            if (livro.Titulo == Titulo){
                console.log(livro)
            }
        })
    }

    emprestarLivro(Titulo){
        let emprestado = false
        livros.forEach(livro => {
            if (livro.Titulo === Titulo){
                if (livro.Disponibilidade === true){
                    livro.Disponibilidade = false
                    emprestado = true
                }
            }
        })
        if (emprestado){
            return true
        } else {
            return false
        }
    }

    devolverLivro(Titulo){
        livros.forEach(livro => {
            if (livro.Titulo == Titulo){
                livro.Disponibilidade = true
                console.log("Livro devolvido")
            }
        })

    }
}

const biblioteca = new Biblioteca("Capa Preta", "Salvador - BA", "51 90021935")

biblioteca.buscarLivro("A cobra mata abraçando")
biblioteca.emprestarLivro("O guardião")
biblioteca.devolverLivro("O guardião")