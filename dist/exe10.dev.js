"use strict";

/* 
10) Crie uma função que verifica se um número inteiro passado como parêmetro é divisível por 3 e retorne true
ou false.
*/
function divisivelPorTres(numero) {
  num = String(numero);
  var soma;

  for (i = num[0]; i <= num.length; i++) {
    console.log(num[i]);
    soma = num[i];
    console.log(soma);
  }
}

divisivelPorTres('1235');