function contador() {
    let numInicial = document.getElementById("inumini").value;
    let numFinal = document.getElementById("inumfim").value;
    let numPasso = document.getElementById("inumpasso").value;
    let res = document.getElementById("res");

    if (numInicial.length == 0 || numFinal.length == 0 || numPasso.length == 0) {
        alert("Erro! Faltam dados!");
    } else {
        res.innerHTML = 'Contando: <br>'
        let i = Number(numInicial)
        let f = Number(numFinal)
        let p = Number(numPasso)
        if(p <= 0){
            alert('Passo inválido! Considerando PASSO 1')
            p = 1
        }

        if(i < f) {
            // CONTAGEM CRESCENTE
            for(let c = i; c <= f; c += p){
                res.innerText += ` ${c} \u{1F449}`
            }
        } else { 
            //CONTAGEM REGRESSIVA
            for(c = i; c >= f; c -= p) {
                res.innerHTML += ` ${c} \u{1F449}`
            }
        }
        res.innerHTML += `\u{1F3C1}`
    }

}