/*
    31) Escrever um algoritmo que percorre um vetor de inteiros, conta quantos números negativos há nesse vetor
    e imprime a quantidade no console.


*/

function intNegativos(vetor){
    let negativos = 0

    vetor.forEach(numero => {
        if(numero<0){
            negativos++
        }
        
    });

    return `Há ${negativos} números negativos neste vetor`
}

vetor =  [10, 5, -7, 3, -1, 3, -11, -20, 6, 9]

console.log(intNegativos(vetor))