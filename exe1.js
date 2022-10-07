/*
  01) Crie uma função que dado dois valores (passados como parâmetros) mostre no console a soma, subtração,
multiplicação e divisão desses valores.

*/

function contas(x, y){
    this.x = x
    this.y = y
  
    console.log(`${this.x} + ${this.y} = `, this.x + this.y)
    console.log(`${this.x} - ${this.y} = `, this.x - this.y)
    console.log(`${this.x} * ${this.y} = `, this.x * this.y)
    console.log(`${this.x} / ${this.y} = `, this.x / this.y)
         
}

contas(8,5)