
//Menu
console.log("=".repeat(54));
console.log("██   ██ ███████ ███    ███  ██████  ██████  ██  ██████");  
console.log("██   ██ ██      ████  ████ ██    ██ ██   ██ ██ ██    ██"); 
console.log("███████ █████   ██ ████ ██ ██    ██ ██████  ██ ██    ██"); 
console.log("██   ██ ██      ██  ██  ██ ██    ██ ██   ██ ██ ██    ██");
console.log("██   ██ ███████ ██      ██  ██████  ██   ██ ██  ██████");  
console.log("=".repeat(54));

//Declarar variáveis
const leia = require("readline-sync");
let nome = leia.question("Digite seu nome: ");
let idade = leia.questionInt("Digite sua idade: ");
let doacao = leia.question("Você já realizou alguma vez doação de sangue? (sim/não) ");

if(idade <18 || idade> 69){
    console.log(`${nome} Você não está apto para doar`);
}
else if(idade >60 && doacao ==="não"){
    console.log(`pode doar sangue`);
}
else
{
    console.log("Você está apto para doar sangue");
}