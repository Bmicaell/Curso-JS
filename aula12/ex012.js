var agora = new Date()
var hora = agora.getHours() // Pega a hora atual do sistema
console.log(`Agora são exatamente ${hora} horas.`)

if(hora >= 5 && hora < 12){
    console.log('Bom dia!')
} else if (hora >= 12 && hora < 18) {
    console.log('Boa tarde!')
} else if (hora >= 18 && hora < 24) {
    console.log('Boa noite!')
} else if (hora > 0 ) {
    console.log('Boa madrugada!')
}
