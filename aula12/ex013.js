var agora = new Date() // Pega a data atual do sistema
var diaSem = agora.getDay() // Pega o dia da semana atual do sistema

//console.log(diaSem) // Mostra o número do dia da semana

diaSem = 0 // Para testar o default

switch(diaSem) {
    case 0:
        console.log('Domingo')
        break
    case 1:
        console.log('Segunda-feira')
        break
    case 2:
        console.log('Terça-feira')
        break
    case 3:
        console.log('Quarta-feira')
        break
    case 4:
        console.log('Quinta-feira')
        break
    case 5:
        console.log('Sexta-feira')
        break
    case 6:
        console.log('Sábado')
        break
    default:
        console.log('[ERRO] Dia inválido!')
        break

}