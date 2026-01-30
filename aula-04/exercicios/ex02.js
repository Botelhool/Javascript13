let leia = require("readline-sync");

let numero;
let contadorImpar = 0;
let contadorPar =0;

for(i=1;i<=10;i++){
    numero=leia.questionInt("Digite um número inteiro: ");
    if(numero % 2 !==0){
       contadorImpar ++;
    }else{
        contadorPar ++
    }
}
    
console.log(`Número total de pares: ${contadorPar}`);
console.log(`Número total de ímpares: ${contadorImpar}`);



