/*
    6) Elabore duas funções que recebem três parâmetros: capital inicial, taxa de juros e tempo de aplicação. A
primeira função retornará o montante da aplicação financeira sob o regime de juros simples e a segunda
retornará o valor da aplicação sob o regime de juros compostos.

*/

function jurosSimples(c, i, t){
    let j = c + (c*i*t)
    return j


}

function jurosComposto(c, i, t){
    return c * (1 + i) ** t

}

console.log("R$" , jurosSimples(100, 10/100, 2).toFixed(2)); 
console.log("R$" ,jurosComposto(100, 10/100, 2).toFixed(2));
