    var valores = []

function addNumber() {
    var num = document.getElementById('itxtn').value
    var textarea = document.getElementById('ival')
    var n = Number(num)

    if(num.length == 0 || num < 0 || num > 100 ) {
        alert('[ERRO] Valor inválido ou número ja possui na lista')
        
    }
        if(valores.includes(n)){
            alert('[ERRO] Número ja possui na lista')
        } else  { 
            valores.push(n) 
            textarea.value = valores.join('\n')
        }
}