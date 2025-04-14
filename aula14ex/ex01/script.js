function contador() {
    var numInicial = document.getElementById("inumini").value;
    var numFinal = document.getElementById("inumfim").value;
    var numPasso = document.getElementById("inumpasso").value;
    var res = document.getElementById("res");

    if (numInicial.length == 0 || numFinal.length == 0 || numPasso.length == 0) {
        alert("Erro! Faltam dados!");
    } else if (numInicial  == 0 || numFinal == 0) {
       alert("Erro! Números inválidos!");
    } else if (numPasso <= 0) {
        alert("Erro! Vamos considerar passo 1!");
        numPasso = 1;
    }

    for(numInicial = 0; numInicial <= numFinal; numInicial++ ) {
        res.innerHTML += `${numInicial} \u{1F449}`; // \u{1F449} é o emoji de seta
        if(numInicial == numFinal) {
            res.innerHTML += `\u{1F3C1}`; // \u{1F3C1} é o emoji de bandeira
        }
    }
}