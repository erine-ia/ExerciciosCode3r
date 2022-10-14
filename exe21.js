/*
    21) Criar um programa para identificar o valor a ser pago por um plano de saúde dada a idade do conveniado
considerando que todos pagam R$ 100 mais um adicional conforme a seguinte tabela: 1) crianças com menos
de 10 anos pagam R$80; 2) conveniados com idade entre 10 e 30 anos pagam R$50; 3) conveniados com
idade acima de 30 e até 60 anos pagam R$ 95; e 4) conveniados acima de 60 anos pagam R$130

*/

function valorPlano(idade){
    let fixo = 100
    let plano;

    if(idade <10){
        plano = fixo + 80

    }else if(idade>=10 && idade <= 30){
        plano = fixo + 50

    }else if(idade>30 && idade <= 60){
        plano = fixo + 95

    }else if(idade >60){
        plano = fixo + 130

    }
     return `O valor a ser pago pelo conveniado é R$${plano},00`

}

console.log(valorPlano(5))
console.log(valorPlano(49))
console.log(valorPlano(60))
console.log(valorPlano(80))
console.log(valorPlano(77))