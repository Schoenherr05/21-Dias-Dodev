let tabuada = Number(prompt('escolha uma tabuada: (do 1 ao 5)'))

for(let i = tabuada; i <= tabuada + 2; i++){
    console.log("tabuada do número: " + i)
    for(let j = 0; j <=10; j++){
        console.log(i + " x " + j + " = " + (i*j))
    }
}
