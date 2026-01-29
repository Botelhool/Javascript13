const leia = require("readline-sync");

let a = leia.questionInt("Digite o primeiro número: ");    
let b = leia.questionInt("Digite o Segundo  número: ");
let c = leia.questionInt("Digite o terceiro  número: ");
soma = a+b 
if(soma>c){
    console.log(`A soma ${soma}  é maior ${c}`);
}
else if(a+b<c){
    console.log(`A soma ${soma}  é menor ${c}`);
}
else{
    console.log(`A soma ${soma}  é igual ${c}`)
}