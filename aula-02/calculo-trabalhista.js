const leia = require("readline-sync")
//Entrada de dados
const nome = leia.question("Nome do funcionario: ")
let salarioBruto = leia.questionFloat("Digite o Salario Bruto:R$ ")
let cargaHorariaMensal = leia.questionFloat("Digite o total de horas trabalhadas no Mes: ")
let horasNoturnas = leia.questionPath("Digite a quantidade de horas noturnas trabalhadas: ")
//processamento
let  valorHora = salaBruto/cargaHorariaMensal
let adicionalNoturono = (valorHora *0.20)*horasNoturnas
let desconto = salarioBruto - (salarioBruto * 0.28)
let horaExtra = valorHora * 1.5
let salarioLiquido = (salarioBruto + adicionalNoturono + horaExtra) - desconto
//saida 
console.log(salarioLiquido)