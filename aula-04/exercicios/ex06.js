const leia = require("readline-sync");
let acumulador = 0;
let multiploDe3 =0;
let numero;
do{
    numero = leia.questionInt("Digite um número: ");
    
    
    if(numero !==0 && numero % 3 === 0){
        acumulador += numero;
        multiploDe3++;
        
    }
}while(numero !==0);

let media = acumulador/ multiploDe3
console.log(`A media de todos os números múltiplos de 3: ${media.toFixed(2)}`);