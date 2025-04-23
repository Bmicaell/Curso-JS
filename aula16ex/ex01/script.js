    var valores = []

function addNumber() {
    var num = document.getElementById('itxtn').value
    var textarea = document.getElementById('ival')
    var n = Number(num)
    var input = document.getElementById('itxtn')

    if(num.length == 0 || num < 1 || num > 100 || valores.includes(n) ) {
        alert('[ERRO] Valor inválido ou número ja possui na lista')
        
    }else { 
        valores.push(n) 
        textarea.value += ` Valor ${n} adicionado.\n`
        res.innerHTML = ''
    }
    input.value = ''
    input.focus()
}

function analisarNum() {
    var res = document.getElementById('res')
    var maiorNum = valores[0]
    var menorNum = valores[0]
    var soma = 0
    var media = 0

    if(valores.length == 0) {
        window.alert('Adicione valores antes de finalizar')
    } else {
        res.innerHTML = ''
        
        for(var i = 0; i < valores.length; i++) {
            if(valores[i] > maiorNum) {
                maiorNum = valores[i]
            }  
            if (valores[i] < menorNum ) {
                menorNum = valores[i]
            }
            
            soma += valores[i]
            media = soma / valores.length
            
        }
        
        res.innerHTML += `Ao todo, temos ${valores.length} números cadastro. <p>` 
        res.innerHTML += `O maior valor informado foi ${maiorNum}. <p>`
        res.innerHTML += `O menor valor informado foi ${menorNum}. <p>`
        res.innerHTML += `A somando todos os valores, temos ${soma}. <p>`
        res.innerHTML += `A média dos valores digitados é ${media}.`
    }
    
    
}