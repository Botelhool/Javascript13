const leia = require("readline-sync");
contadorMenor21 =0;
contadorMaior50 = 0;
 
while(true){
    let idade = leia.questionInt("Digite sua idade: ");
    
    if(idade < 0){
        break;
    } 
    
    else if (idade <21){
        contadorMenor21 ++;
    }

    else if(idade > 50){
        contadorMaior50 ++;
    }

    else{
        
        console.log(idade)
    }
    
    
}

console.log(`Total de pessoas menores de 21 anos:${contadorMenor21}`);
console.log(`Total de pessoas maiores de 50 anos:${contadorMaior50}`);