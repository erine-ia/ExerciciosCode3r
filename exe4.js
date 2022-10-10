/*
04) Crie uma função que irá receber dois valores, o dividendo e o divisor. A função deverá imprimir o resultado
e o resto da divisão destes dois valores.
*/

function divisao(dividendo, divisor){
    console.log(`O resultado da divisão ${dividendo} : ${divisor} é =>  ${Math.floor(dividendo/divisor)} `)
    console.log(`E o resto da mesma divisão é  =>  `, (dividendo%divisor))
}

divisao(21, 5)