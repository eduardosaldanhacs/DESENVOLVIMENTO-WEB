var N1 = (prompt("Digite um numero: "))
var opcao = (prompt("Digite a opção: 'soma' ou 'subtração'?"))
var N2 = (prompt("Digite um segundo numero:"))

N1 = (parseInt(N1))
N2 = (parseInt(N2))

var calculo = 0
function fazerCalculo(N1, N2, opcao) {
    if (opcao == "soma") {
      calculo = N1 + N2
    } if (opcao == "subtração") { 
      calculo = N1 - N2 
        }
     return calculo 
    }

calculo = fazerCalculo(N1, N2, opcao)
document.write("A " + opcao + " entre " + N1 + " e " + N2 + " é: " + calculo)