const leia = require("readline-sync");
let numero;
let acumulador =0;
do{
    numero = leia.questionInt("Digite um número: ");
    if(numero>0){
        acumulador += numero; 
    }
    
}while(numero != 0);

console.log(`A soma dos números positivos: ${acumulador}`);

