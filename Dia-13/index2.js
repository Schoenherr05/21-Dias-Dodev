class Carro{
    nome
    potencia
    velocidadeMaxima
    aceleracao
    constructor(nome, potencia, velocidadeMaxima, aceleracao){
        this.nome = nome
        this.potencia = potencia
        this.velocidadeMaxima = velocidadeMaxima
        this.aceleracao = aceleracao
    }

    exibirCarro(){
        console.log("Nome/Marca: " + this.nome)
        console.log("Potência em CV: " + this.potencia + "cv")
        console.log("Velocidade Máxima: " + this.velocidadeMaxima + "Km/h")
        console.log("Aceleração: " + this.aceleracao + " segundos")
    }

    calcularTempo(distancia){
        let resultado = distancia / (this.velocidadeMaxima / this.aceleracao)
        console.log("Seu carro percorrerá os " + distancia + " metros em " + resultado + " segundos")
    }
}

const meuCarro = new Carro("Mercedes", 600, 225, 4)
meuCarro.exibirCarro()
meuCarro.calcularTempo(1350)

class Corrida{
    nome
    tipo
    distancia
    participantes
    vencedor
    constructor(nome, tipo, distancia, participantes, vencedor){
        this.nome = nome
        this.tipo = tipo
        this.distancia = distancia
        this.participantes = []
        this.vencedor = ""
    }

    definirVencedor(){
        let menorTempo = this.participantes[0].calcularTempo(this.distancia)
        let vencedor = this.participantes[0]
        for (let i = 1; i < this.participantes.length; i++){
            let tempo = this.participantes[i].calcularTempo(this.distancia)
            if (tempo < menorTempo){
                menorTempo = tempo
                vencedor = this.participantes[i]
            }
        }
        return this.vencedor = vencedor
    }
    
    exibirVencedor(){
        alert("O vencedor da corrida foi a: " + this.vencedor.nome)
    }
}

let corrida = new Corrida("Milão - Itália", "Formula 1", 30000)
corrida.participantes[0] = new Carro("Mercedes", 600, 300, 4)
corrida.participantes[1] = new Carro("Ferrari", 650, 290, 5)
corrida.participantes[2] = new Carro("McLaren", 620, 320, 3)
corrida.participantes[3] = new Carro("RedBull", 550, 320, 3.5)

corrida.definirVencedor()
corrida.exibirVencedor()