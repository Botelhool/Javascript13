//Menu
console.log("=".repeat(40));
console.log("calculadora com switch case");
console.log("=".repeat(40));
console.log("                            ");
console.log("Digite operação: \n (+)-Soma \n (-) -subtração\n (*)-Multiplicação \n (/)-Divisão");
console.log("=".repeat(40))
//Entrada de dados

const leia = require("readline-sync");

let num1 = leia.questionFloat("Digite o primeiro número: ");    
let num2 = leia.questionFloat("Digite o Segundo  número: ");
let operacao = leia.keyIn("Digite a operação: ")
//processamento de dados

switch(operacao){
    case "+":
    console.log(`${num1} + ${num2} = ${num1 + num2}`);
    break;

    case "-":
    console.log(`${num1} + ${num2} = ${num1 - num2}`);
    break;

    case "*":
    console.log(`${num1} + ${num2} = ${num1 * num2}`);
    break;

    case "/":
    console.log(`${num1} + ${num2} = ${num1 / num2}`);
    break;
    
    default:
        mansagem = "Digite uma operação válida"

}
