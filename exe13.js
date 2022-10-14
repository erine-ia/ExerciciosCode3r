/*
    13) Crie um programa que exibe se um dia é dia útil, fim de semana ou dia inválido dado o número referente ao
    dia. Considere que domingo é o dia 1 e sábado é o dia 7. Utilize a estrutura Switch.
    ,
+*/

function diaSemana(dia){
    switch(dia){
        case 1:
        case 7:
            return "Hoje é Fim de Semana";
        case 2:
        case 3:
        case 4:
        case 5:
        case 6:
            return "Hoje é dia útil!";
        default:
            return 'Este dia não é válido'

    }
}

console.log(diaSemana(7))
console.log(diaSemana(8))
console.log(diaSemana(6))
console.log(diaSemana(5))
console.log(diaSemana(4))
console.log(diaSemana(1))