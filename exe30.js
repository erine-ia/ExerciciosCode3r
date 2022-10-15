/*
    30) Escreva um algoritmo que percorre um vetor de inteiros e defina o maior e menor valor dentro do vetor.
*/

function maiorInteiro(vetor){
    let maior = Math.max.apply(null, vetor)
    let menor = Math.min.apply(null, vetor)

    return `O menor número do vetor é ${menor} e o maior é ${maior}`
}

vetor =  [10, 5, 7, 3, 1, 3, 11, 20, 6, 9]

console.log(maiorInteiro(vetor))