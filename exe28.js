/*
    28) Ler um vetor de números inteiros e imprimir quantos são pares e quantos são ímpares.
*/

function pareimpar(vetor){
    let npar = 0
    let nimpar =0

   for (let i = 0; i < vetor.length; i++) {
        let num = vetor[i];
        if (num%2==0){
            npar++ 
        }else{
            nimpar++
        }
    
   }
   return `Há ${npar} números pares e ${nimpar} números ímpares`
}

let vetor = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]
console.log(pareimpar(vetor))