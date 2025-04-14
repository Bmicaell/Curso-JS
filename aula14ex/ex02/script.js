function gerarTabela() {
    var numberIn = document.getElementById('inum').value
    var res = document.getElementById('res')
    var tabela = 0
    var soma = 0
   
    

    if(numberIn.length == 0) {
        alert('Digite número válido!')
    } else {
        res.innerHTML = ''
        for(tabela = 1; tabela <= 10; tabela++) {
            soma = Number(numberIn) * Number(tabela)
            res.innerHTML += `${numberIn} x ${tabela} = ${soma}\n` 
            
        }
    }
}