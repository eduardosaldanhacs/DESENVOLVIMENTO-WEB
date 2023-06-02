var lista_frutas = Array()

lista_frutas[1] = 'Maça'
lista_frutas[2] = 'Uva'
lista_frutas[3] = 'Banana'
lista_frutas[4] = 'Morango'
lista_frutas[5] = 'Pêssego'

console.log(lista_frutas.sort())
//.sort reeordena os elementos em alfanuméricos


//OBS: para ordenaar números, é preciso criar uma função
var lista_numeros = Array()

lista_numeros[0] = '12' // ou 12
lista_numeros[1] = '40' // ou 40
lista_numeros[2] = '3'
lista_numeros[3] = '7'
lista_numeros[4] = '19'
lista_numeros[5] = '1'
//nao importa se os numeros são strings, funciona igual
console.log(lista_numeros.sort(ordenaNumeros))
    function ordenaNumeros(a, b) {

    return a - b
    // < 0 = a ordenado antes de b
    // > 0 = b ordenado antes de a
    // == a ordem é mantida

    }
