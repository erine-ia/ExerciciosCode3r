/*
   23) Escreva um algoritmo que leia o código de um aluno e suas três notas. Calcule a média ponderada do
aluno, considerando que o peso para a maior nota seja 4 e para as duas restantes, 3. Mostre o código do
aluno, suas três notas, a média calculada e uma mensagem "APROVADO" se a média for maior ou igual a 5 e
"REPROVADO" se a média for menor que 5. Repita a operação até que o código lido seja negativo
*/

function mediaPonderada(cod_aluno, nota1, nota2, nota3){
    let situacao;
    let notas =[nota1, nota2, nota3]
    let maior = Math.max.apply(null, notas)
    let ponderada = [(maior*4)]

   notas.forEach(nota => {
    if(nota !== maior){
       ponderada.push(nota*3)
     }
   });

    let media = (ponderada[0]+ ponderada[1]+ ponderada[2])/(nota1+nota2+nota3)

    if(media>=5){
        situacao = 'APROVADO'
    }
    // return media.toFixed(2)

    
    

}

console.log(mediaPonderada(123, 2.8, 6, 3.5))