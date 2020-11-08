function mudaFoto(foto){
    document.getElementById("icone").src = foto;
}


/*Calculo do valor do Glass - no Form de Cadastro*/
function calc_total() {
    var qtd = document.getElementById('cQtd').value;
    qtd = qtd * 1500;
    document.getElementById('cTot').value = qtd;
}