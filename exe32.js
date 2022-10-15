/*
        32) Construir um algoritmo que calcule a média aritmética dos valores de um vetor de inteiros.

*/

function calculo_media(vetor){
    let soma = 0
    for(let i=0; i<vetor.length; i++) {
        soma += vetor[i]
    }

    let media =  soma/vetor.length
    return `A média do aluno é ${media}`

}

vetor = [1, 2, 3, 4, 5]

console.log(calculo_media(vetor))