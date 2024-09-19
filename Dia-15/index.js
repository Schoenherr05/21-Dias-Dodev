let arrayA = [10, 15, 26, 17, 90, 45, 23, 56, 88, 4]
let arrayB = [76, 23, 12, 83, 14, 88, 17, 99, 33, 12]

function numerosEmComum(arrayUm, arrayDois){
    let arrayResultado = []
    let contadorResultado = 0

    for (let i = 0; i < arrayUm.length; i++){

        for (let j = 0; j < arrayDois.length; j++){

            if (arrayUm[i] === arrayDois[j]){
                arrayResultado[contadorResultado] = arrayUm[i]
                contadorResultado++
                j = arrayDois.length
                
            }
        }
    }

    return arrayResultado
}

console.log(numerosEmComum(arrayA, arrayB))
