var data = new Date()

/*document.write((data.getDate()) + "/" + (data.getMonth() + 1) + "/" + (data.getFullYear())) */
//getMonth só representa de 0-11, 0 jan, 11 nov, é preciso somar um para arrumar

//Muito utilizado em cronometro nas promoçoes dos sites

//adicionar //remover dias
document.write(data.toString())
data.setDate(data.getDate() + 720) //adicionando 720 dias //set = setao valores // get = recuperam valores
document.write("<hr />")
document.write(data.toString())
document.write("<br /> <br /> <hr />")


//adicionar/ remover meses
document.write(data.toString())
data.setMonth(data.getMonth() - 1) // diminuindo um mes
document.write("<hr />")
document.write(data.toString())
document.write("<br /> <br /> <hr />")

//adicionar/ remover anos
document.write(data.toString())
data.setFullYear(data.getFullYear() + 1) //adicionando um ano
document.write("<hr />")
document.write(data.toString())
document.write("<br /> <br /> <hr />")


var data1 = new Date(2017, 0, 15) //data em questão
var data2 = new Date(2023, 4, 19) //data em questão

document.write(data1.toString())
document.write("<hr />")
document.write(data1.toString())
document.write("<br /> <br /> <hr />")

//converter datas para algo que possamos calcular
document.write("Convertendo datas para algo que possamos calcular <hr />")
document.write(data1.getTime())
document.write("<hr />")
document.write(data2.getTime())
/*getTime recupera a quantidade de milissegundos que existe entre as datas de 1 de janeiro de 1970
até a data em questão
*/
document.write("<br /> <br /> <hr />")
//encontrar a qtd de milisegundos entre data1 e data2
var milisegundos_entre_datas = Math.abs(data1.getTime() - data2.getTime())
document.write(milisegundos_entre_datas)//Math.abs = recupera o valor absoluto da subtracao

//1 dia = 24 horas, cada hora tem 60 minutos, cada minuto tem 60 segundos e cada segundo tem 1000 milisegnds
var milissegundos_por_dia = (1*24*60*60*1000)
document.write("1 dia tem: " + milissegundos_por_dia + " milisegundos ")

document.write("<br /> <br /> <hr />")
document.write("A diferença entre data1 e data2 é de: " + Math.ceil(milisegundos_entre_datas / milissegundos_por_dia) + " dia(s). ")
