/*
    20) Crie um programa para informar quais e quantas notas são necessárias para entregar o mínimo de cédulas
para um determinado valor informado pelo usuário considerando notas de R$ 100, R$ 50, R$ 10 e R$ 5 e R$ 1.
Seu programa deve mostrar apenas as notas utilizadas. Por exemplo, ao solicitar R$18, o programa deve
informar apenas a seguinte informação (note que não foram exibidas informações sobre as demais cédulas): 1
nota(s) de R$ 10. 1 nota(s) de R$ 5. 3 nota(s) de R$ 1.


*/

function cedulas(valor){
    let cem = Math.trunc(valor/100)
    let cinq = Math.trunc((valor-cem*100)/50)
    let dez = Math.trunc((valor - cem*100 - cinq*50)/10)
    let cinco = Math.trunc((valor - (cem*100) - cinq*50 - dez*10)/5)
    let um = valor -(cem*100) -(dez*10)- (cinco*5) - cinq*50
    console.log(valor)

    if(cem > 0){
        console.log(`${cem} nota(s) de R$100,00`)
    }

    if(cinq > 0){
        console.log(`${cinq} nota(s) de R$50,00`)
    }

    if(dez > 0){
        console.log(`${dez} nota(s) de R$10,00`)
    }

    if(cinco > 0){
        console.log(`${cinco} nota(s) de R$5,00`)
    }

    if(um > 0){
        console.log(`${um} nota(s) de R$1,00`)
    }
    
}

cedulas(490)
cedulas(153)