/*
    15) Um homem decidiu ir à uma revenda comprar um carro. Ele deseja comprar um carro hatch, e a revenda
possui, além de carros hatch, sedans, motocicletas e caminhonetes. Utilizando uma estrutura switch, caso o
comprador queira o hatch, retorne: “Compra efetuada com sucesso”. Nas outras opções, retorne: “Tem certeza
que não prefere este modelo?”. Caso seja especificado um modelo que não está disponível, retorne no console:
“Não trabalhamos com este tipo de automóvel aqui”.

*/

function carros(carro){
    switch(carro){
        case 'motocicleta':
        case 'sedan':
        case 'caminhonete':
            return 'Tem certeza que prefere este modelo?'
            break
        case 'hatch':
            return 'Compra efetuada com sucesso!'
            break
        default: return 'Não trabalhamos com este tipo de automovel aqui'
    }
}

console.log(carros('hatch'))
console.log(carros('sedan'))
console.log(carros('motocicleta'))
console.log(carros('bicicleta'))
console.log(carros('caminhonete'))