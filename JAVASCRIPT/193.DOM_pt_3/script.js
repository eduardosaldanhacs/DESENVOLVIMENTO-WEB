function distribuiCaracter(){
    //selecionar o valor digitado
    var caracter = document.getElementById("entrada").value //.value serve para recuperar o valor digitado
    //recuperou o valor digitado e armazenou na variavel caracter


    //limpar o campo de digitação, pois já possuimos o valor da entrada armazenado no var caracter
    document.getElementById("entrada").value = ""
    


    //limpar espaços em branco nas extremidades da string
    caracter.trim()

    //VALORES RECUPERADOS DE ELEMENTOS HTML SÃO INCORPORADAS COMO STRING
    switch(caracter) {
        case "0": //mesmo sendo números, são incorporados como string
        case "1": //string que representa o número
        case "2":
        case "3":
        case "4":    
        case "5":
        case "6":    
        case "7":
        case "8":
        case "9":
        //adicionar o caracter no campo referente a números
            document.getElementById("apenas_numeros").value += caracter //caso caracter seja um número, iremos recuperar esse caracter e atribui-lo como valor do campo número
            break;

        default:
        //adicionar o caracter no campo referente a letras
            document.getElementById("apenas_letras").value += caracter //caso caracter seja uma letra, iremos recuperar esse caracter e atribui-lo como valor do campo letras
    }
}