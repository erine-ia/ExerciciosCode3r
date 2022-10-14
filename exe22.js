/*
        22) Criar uma função para calcular o valor a ser pago de anuidade de uma associação. A função recebe como
parâmetro um inteiro que representa o mês (1 - janeiro, 2 - fevereiro…) que foi paga e o valor da anuidade. A
anuidade deve ser paga no mês de janeiro. Por mês, é cobrado 5% de juros (sob o regime de juros
compostos). O retorno deve ser o valor a ser pago para o respectivo mês escolhido.

*/

function anuidade(mes, valor){
    switch(mes){
        case 1:
            return valor
            break
        case 2:
            return `R$${jurosComposto(valor, 0.05, 1)}`
            break  
        case 3:
            return `R$${jurosComposto(valor, 0.05, 2)}`
            break 
        case 4:
            return `R$${jurosComposto(valor, 0.05, 3)}`
            break 
            
        case 5:
            return `R$${jurosComposto(valor, 0.05, 4)}`
            break  
        case 6:
            return `R$${jurosComposto(valor, 0.05, 5)}`
            break 
        case 7:
            return `R$${jurosComposto(valor, 0.05, 6)}`
            break  

        case 8:
            return `R$${jurosComposto(valor, 0.05, 7)}`
            break  
        case 9:
            return `R$${jurosComposto(valor, 0.05, 8)}`
            break 
        case 10:
            return `R$${jurosComposto(valor, 0.05, 9)}`
            break  

        case 11:
            return `R$${jurosComposto(valor, 0.05, 10)}`
            break  
        case 12:
            return `R$${jurosComposto(valor, 0.05, 11)}`
            break 
       default:
         return 'Parametros incorretos'
    }
}

function jurosComposto(c, i, t){
    return (c * (1 + i) ** t).toFixed(2)

}

console.log(anuidade(4, 100))