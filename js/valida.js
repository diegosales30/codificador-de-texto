function validaTexto(texto) {
    let erros = [];

    if(texto.value == 0) erros.push(" Digite um texto!");

    if(/[A-Z-À-Ú-à-ú]/.test(texto.value)) erros.push(" Somente letras minúsculas e sem acento!");

    return erros;
}

function mostraErros(erros) {
    let ul = document.querySelector(".mensagens-erro");
    ul.innerHTML = "";

    erros.forEach(function(erro) {
        let li = document.createElement("li");
        li.textContent = erro;
        ul.appendChild(li);
    });
    
}