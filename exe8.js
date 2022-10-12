/* 
    08) Pedro joga N jogos de basquete por temporada. Para saber como está ele está progredindo, ele mantém
registro de todos os as pontuações feitas por jogo. Após cada jogo ele anota no novo valor e confere se o
mesmo é maior ou menor que seu melhor e pior desempenho. Dada uma lista string = “pontuação1 pontuação2
pontuação3 etc..”, escreva uma função que ao recebê-la irá comparar os valores um a um e irá retornar um
vetor com o número de vezes que ele bateu seu recorde de maior número de pontos e quando fez seu pior
jogo. (Número do pior jogo).

*/



let pontos_jogos = [30, 40, 20, 4, 51, 25, 42, 38, 56, 0]

function avaliacao(lista_pontos){
    lista_pontos = lista_pontos
    let maiorponto = lista_pontos[0]
    let menorponto = lista_pontos[0]
    let records = 0
    let pior_jogo = 1

    lista_pontos.forEach(ponto => {
        if(ponto > maiorponto){
            maiorponto = ponto;
            records ++
        }else if(ponto < menorponto){
            menorponto = ponto
            pior_jogo ++
        }
        
    });

    return [records, pior_jogo]


}

console.log(avaliacao(pontos_jogos))

