
///////ADICIONAR ELEMENTOS//////////
var lista_frutas = Array()

lista_frutas[0] = "Banana"
lista_frutas[1] = "Maça"

//incluir elementos no final do array
lista_frutas.push("Uva")
//incluir elemento no início do array
lista_frutas.unshift("Morango")

console.log(lista_frutas)
/////////////////////////////////////
///////REMOVER ELEMENTOS///////

var lista_verduras = Array()

lista_verduras[0] = "Alface"
lista_verduras[1] = "Pepino"
lista_verduras[2] = "Berinjela"
lista_verduras[3] = "Brócolis"

//excluir elemento do final do array
lista_verduras.pop()
//excluir elemento do inicio do array
lista_verduras.shift()

console.log(lista_verduras)

/////ADIOCIONAR/REMOVER EM LISTAS MULTIDIMENCIONAIS//////

var lista_coisas = Array()

lista_coisas['frutas'] = Array()
lista_coisas['pessoas'] = []
lista_coisas ['frutas'].push('Banana')

console.log(lista_coisas)
