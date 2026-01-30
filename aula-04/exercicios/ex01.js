let leia = require("readline-sync");
let n1;
let n2;


do{
    n1= leia.questionInt("Digite um número: ");
    n2 = leia.questionInt("Digite outro número: ");

    if(n1 > n2){
        console.log("Erro: intervalo inválido")
    }
}while(n1 > n2);


for(let i = n1; i<=n2; i++){
    if(i % 3 === 0 && i % 5 ==0 ){
        console.log(`${i} é multiplo de 3 e 5`);
    }
    
}