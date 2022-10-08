/*
   02) Os triângulos podem ser classificados em 3 tipos quanto ao tamanho de seus lados:
Equilátero: Os três lados são iguais. Isósceles: Dois lados iguais. Escaleno: Todos os lados são diferentes.
Crie uma função que recebe os comprimentos dos três lados de um triângulo e retorne sua classificação quanto
ao tamanho de seus lados. (Neste exemplo deve-se abstrair as condições matemáticas de existência de um
triângulo).

*/

function Triangulo(lado1, lado2, lado3){
   let lado = [lado1, lado2, lado3]
   let lados = lado.sort(function(a,b){
      return a-b;
   })
   // console.log(lados)
   
   
      if(lados[0]+lados[1] > lados[2])
      {
         if((lados[0] === lados[1]) && (lados[1] === lados[2])){
            console.log('Todos os lados são iguais. O triangulo é Equilátero')  
         
         }else if((lados[0] !== lados[1]) && (lados[1] !== lados[2])){
            console.log('Nenhum dos lados são iguais. O triangulo é Escaleno')

         }else{
            console.log('Dois lados do Triângulo possuem as mesmas medidas. Este é um triangulo Isósceles')
         }
      }else{                                                                                                                        
         console.log('Não é um Triangulo')
      }
       

}


Triangulo(120, 12, 120);