var lista_coisas = Array()

lista_coisas['frutas'] = Array()

lista_coisas['frutas'][1] = 'Banana'
lista_coisas['frutas'][2] = 'Maça'
lista_coisas['frutas'][3] = 'Morango'
lista_coisas['frutas'][4] = 'Uva'

lista_coisas['pessoas'] = []

lista_coisas['pessoas']['a'] = 'João'
lista_coisas['pessoas']['b'] = 'José'
lista_coisas['pessoas']['c'] = 'Maria'
lista_coisas['pessoas']['d'] = []


document.write(lista_coisas['frutas'][4])
document.write("<br>")
document.write(lista_coisas['pessoas']['c'])