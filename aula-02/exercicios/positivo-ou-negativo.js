const leia = require("readline-sync");
 
let numero = leia.questionInt("Digite o número: ");



//números positivos  (linha 8 até 17)
if(numero >0 && numero % 2 ==0)
    {
    console.log(`O número: ${numero} é par e positivo`);
}

else if (numero > 0 && numero % 2 !=0)
    {
    console.log(`O número: ${numero} é ímpar e positivo`)
}
// números negativos (linha 18 até 25)
else if(numero <0 && numero %2 ==0)
    {
       console.log(`O número: ${numero} é par e negativo`);
}
else if(numero < 0 && numero %2 !=0)
    {
         console.log(`O número: ${numero} é ímpar e negativo`);
}

else if (numero ===0)
    {
        console.log(`O número é zero`);
    }



   
    
    
       
    

