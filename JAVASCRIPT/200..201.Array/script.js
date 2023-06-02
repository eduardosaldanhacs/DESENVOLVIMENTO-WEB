//duas formas de escrever array:
var lista_frutas = Array()

//var lista_frutas = []


lista_frutas[0] = "Banana"
lista_frutas[1] = "Maça"
lista_frutas[2] = "Pessego"
lista_frutas[3] = "Morango"
lista_frutas[4] = "Abacaxi"


/*
//Quando nao definimos indices para o array, o proprio javascript faz isso
var lista_frutas = Array("Banana", "Maça", "Uva")
//nao definimos que banana possui indice 0, mas o JS associa isso
console.log(lista_frutas[0])
console.log(lista_frutas).length
*/

/*  variaveis tipo string o atributo length retorna a qtd de caracteres
    variaveis tipo array o atributo length retorna a qtd de elementos no array
    para o length funcionar no array é preciso denominar indices sequenciais:
ex: 1,2,3,4,5,6...
*/

console.log(lista_frutas)

