//Digitar salário

const leia = require("readline-sync");
let nome = leia.question("Digite nomde do funcionário: ")
let salario = leia.questionFloat("Digite seu salário:R$ ")

//digitar o abono 
const abono = leia.questionFloat("Digite o valor do abono:R$ ")

//exibir o novo salario
let novoSalario = salario + abono
const fomratadorBRL = new Intl.NumberFormat('pt-BR',{
    style:'currency',
    currency: 'BRL'
})
console.log(`Funcionário: R$${nome}\n Novo salário: R$${fomratadorBRL.format(novoSalario)}\n Valor do abono:R$${abono.toFixed(2)}`)
//fim 
