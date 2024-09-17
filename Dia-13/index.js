class Computador {
    tipo
    processador
    video
    armazenamento
    memoriaRAM
    ssd
    constructor(tipo, processador, video, armazenamento, memoriaRAM, ssd){
        this.tipo = tipo
        this.processador = processador
        this.video = video
        this.armazenamento = armazenamento
        this.memoriaRAM = memoriaRAM
        this.ssd = ssd
    }

    exibirInformacoes(){
        console.log("======= CONFIGURAÇÕES DO COMPUTADOR =======")
        console.log("Tipo: " + this.tipo)
        console.log("Processador: " + this.processador)
        console.log("Vídeo: " + this.video)
        console.log("Armazenamento: " + this.armazenamento)
        console.log("Memória RAM: " + this.memoriaRAM)
        console.log("SSD: " + this.ssd)
    }
}

const meuComputador = new Computador("Pc", "Intel Core 5", "Dedicado", 1000, 16, true)
meuComputador.exibirInformacoes() 