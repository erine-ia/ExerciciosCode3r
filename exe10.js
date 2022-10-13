/* 
10) Crie uma função que verifica se um número inteiro passado como parêmetro é divisível por 3 e retorne true
ou false.
*/

function separarAlgarismos(valor){
  let val = String(valor)
  let num = [Number(val[0])]

  for(i=val[0]; i<val.length; i++){
    num.push(Number(val[i]))
    // console.log(num)
  }
  return num

}



function divisivelPor3(lista_algarismos){
  let algarismos = separarAlgarismos(lista_algarismos)
  let soma = 0;

  for(i in algarismos){
    soma = soma + algarismos[i]
    // console.log(soma)
  }
  if(soma%3 === 0){
    return `True`
  }else{
    return "false"
  }
}


console.log(divisivelPor3(3))
console.log(divisivelPor3(2))
console.log(divisivelPor3(150))