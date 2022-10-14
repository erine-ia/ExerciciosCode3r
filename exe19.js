 /*
         19) O cardápio de uma lanchonete é o seguinte:
    ________________________________________________________
        Código   |    Descrição do Produto      |    Preço
    ---------------------------------------------------------
        100      |    Cachorro Quente           |   R$ 3,00
        200      |    Hambúrguer Simples        |   R$ 4,00
        300      |    Cheeseburguer             |   R$ 5,50
        400      |    Bauru                     |   R$ 7,50
        500      |    Refrigerante              |   R$ 3,50
        600      |    Suco                      |   R$ 2,80
    _____________|______________________________|____________

    
        Implemente uma função que receba como parâmetros o código do item pedido, a quantidade e calcule o valor
        a ser pago por aquele lanche. Considere que a cada execução somente será calculado um item. Use o
        comando switch. Crie um caso default para produto não existente
*/

function lanches(codigo, quantidade){
    let valor;
    switch(codigo){
        case 100:
            console.log('==============')
            valor = quantidade*3
            return `Cachorro Quente\nUn    R$3,00\n${quantidade}     R$${valor}`
            break

        case 200:
            console.log('==============')
            valor = quantidade*4
            return `Hambúrguer Simples\nUn    R$4,00\n${quantidade}     R$${valor}`
            break

        case 300:
            console.log('==============')
            valor = quantidade*5.5
            return `Cheeseburguer\nUn    R$5,50\n${quantidade}     R$${valor}`
            break
            
        case 400:
            console.log('==============')
            valor = quantidade*7.5
            return `Bauru\nUn     R$7,50\n${quantidade}      R$${valor}`
            break

        case 500:
            console.log('==============')
            valor = quantidade*3.5
            return `Refrigerante\nUn     R$3.50\n${quantidade}     R$${valor}`
            break

        case 600:
            console.log('==============')
            valor = quantidade*2.8
            return `Suco\nUn      R$2,80\n${quantidade}       R$${valor}`
            break

        default:
            return('Produto Inexistente')
    }

}

console.log(lanches(100,5))
console.log(lanches(200,5))
console.log(lanches(300,5))
console.log(lanches(400,5))
console.log(lanches(500,5))
console.log(lanches(600,5))
console.log(lanches(800,5))