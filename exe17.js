/*
 17) Um funcionário irá receber um aumento de acordo com o seu plano de
trabalho, de acordo com a tabela abaixo:

Plano | Aumento
----- | -------
   A  |   10%
   B  |   15%
   C  |   20%

Faça uma função que leia o plano de trabalho e o salário atual de um funcionário e calcula e imprime o seu
novo salário. Use a estrutura switch e faça um caso default que indique que o plano é inválido.

*/

function aumento(Plano, salario_atual){
   let novo_salario;

   switch(Plano){
      case 'A':
         novo_salario = salario_atual + (salario_atual*10/100)
         break

      case 'B':
         novo_salario = salario_atual + (salario_atual*15/100)
         break
      
      case 'C':
          novo_salario = salario_atual + (salario_atual*20/100)
          break
         
      default:
         return 'Plano Inválido'

   }

   return novo_salario

}

console.log(aumento('A',1000))
console.log(aumento('B',1000))
console.log(aumento('C',1000))
console.log(aumento('D',1000))