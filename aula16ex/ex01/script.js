    var valores = []

function addNumber() {
    var num = document.getElementById('itxtn').value
    var textarea = document.getElementById('ival')
    var n = Number(num)

    if(num.length == 0 || num < 0 || num > 100 || valores.includes(n) ) {
        alert('[ERRO] Valor inválido ou número ja possui na lista')
        
    }else  { 
        valores.push(n) 
        textarea.value += ` Valor ${n} adicionado.\n`
    }
}

function analisarNum() {
    var res = document.getElementById('res')
    var maiorNum = valores[0]
    var menorNum = valores[0]
    var soma = valores

    res.innerHTML = ''
    res.innerHTML += `Ao todo, temos ${valores.length} números cadastro. <br>` 

    for(var i = 0; i < valores.length; i++) {
        if(valores[i] > maiorNum) {
            maiorNum = valores[i]
        }  
        if (valores[i] < menorNum ) {
            menorNum = valores[i]
        }

        soma += valores
    }
    
    res.innerHTML += `O maior valor informado foi ${maiorNum}. <br>`
    res.innerHTML += `O menor valor informado foi ${menorNum}. <br>`
    res.innerHTML += `A soma dos valores ${soma}. <br>`

    
    
}