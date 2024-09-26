let hoteis = []
let reservas = []
let idHotel = 1
let idReservas = 1

class Hotel{
    id
    nome
    categoria
    endereço
    telefone
    constructor(id, nome, categoria, endereço, telefone){
        this.id = id
        this.nome = nome
        this.categoria = categoria
        this.endereço = endereço
        this.telefone = telefone
    }
}

class Reservas{
    id
    idHotel
    nomeReservante
    diaEntrada
    diaSaida
    constructor(id, idHotel, nomeReservante, diaEntrada, diaSaida){
        this.id = id
        this.idHotel = idHotel
        this.nomeReservante = nomeReservante
        this.diaEntrada = diaEntrada
        this.diaSaida = diaSaida
    }
}

function CadastrarHotel(){
    let nome = prompt("Qual o nome do hotel? ")
    let categoria = prompt("Qual a categoria do hotel? ")
    let endereço = prompt("Qual é o endereço do hotel? ")
    let telefone = prompt("Qual o telefone para contato do hotel? ")
    let hotel = new Hotel(idHotel, nome, categoria, endereço, telefone)
    idHotel++
    hoteis.push(hotel)
}

function CadastrarReserva(){
    let idHotel 
    let existe = false

    do {
        idHotel = parseInt(prompt("Digite o ID do hotel: "))
        for (let i = 0; i < hoteis.length; i++){
            if (idHotel == hoteis[i].Id){
                i = hoteis.length
                existe = true
            } else if (i == hoteis.length -1){
                console.log("ID inválido! - hotel não cadastrado")
            }
        }
    } while (!existe)
        let nomeReservante = prompt("Digite o nome do resrvante: ")
        let diaEntrada = parseInt(prompt("Digite o dia da entrada: "))
        let diaSaida

        do {
            diaSaida = parseInt(prompt("Digite o dia da saída: "))
            if (diaSaida < diaEntrada){
                console.log("ERRO! - o dia de saída deve ser maior que o dia de entrada.")
            }
        } while (diaSaida < diaEntrada){}

        let reserva = new Reservas(idReservas, idHotel, nomeReservante, diaEntrada, diaSaida)
        idReservas++
        reservas.push(reserva)
}