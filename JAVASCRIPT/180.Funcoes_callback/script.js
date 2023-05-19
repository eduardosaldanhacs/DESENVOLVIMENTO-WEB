function exibirArtigo(id, callbackSucesso, callbackErro) {
    //Na pratica haveria uma lógica para recuperar o arquivo com base no id, via requisição http, mas ainda nao aprendemos isso

        //Condição para saber se houve ou nao sucesso, havendo sucesso é passado o titulo e a descrição do artigo
    if (true) {                //titulo                           //descricao
        callbackSucesso ("Funções de callback em JS", "Funções de callback são muito utilizadas...")
    } else { //Caso aja algum erro
        callbackErro ("Erro ao recuperar os dados")
    }
}
var callbackSucesso = function(titulo, descricao) {
    document.write("<h1>" + titulo + "</h1>")
    document.write("<hr />")
    document.write("<p>" + descricao + "</p>")
}

var callbackErro = function (érro) {
    document.write("<p><b>Erro:</b>" + erro + "</p>")
}

exibirArtigo(1, callbackSucesso, callbackErro) 



