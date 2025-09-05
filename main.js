constbotaoMostraPalavras = document.querySelector('#botao-palavrachave');

botaoMostraPalavras.EventListener('click', mostraPalavraChave);

function mostraPalavraChave() {
    const texto = document.querySelector('#entrada-de-texto').value;
    const campoResultado = document.querySelector('#resultado-palavrachave');
    constpalavrasChave = processaTexto(texto);

    campoResultado.textContent = mostraPalavraChave.join(",");
}

function processaTexto(texto) {
    let palavras = texto.split(/\P{L}+/u);
    return palavras;
}