const leia = require("readline-sync");
//ler idade , identidade de gênero, pessoas desenvolvedoras,
console.log("=".repeat(20))
console.log("1-Mulher cis \n2-Homem cis \n3- Não binário \n4- Mulher trans \n5- Homem trans \n6- Outros");
console.log("=".repeat(20))
console.log("1-Backend \n2-Frontend \n3-Mobile \n4-Fullstack");
console.log("=".repeat(20))



let totalBackend = 0;
let totalMulheresFront = 0;
let totalHomensMobile40 = 0;
let totalNBFullStack30 = 0;
let totalPessoas = 0;
let somaIdades = 0;
let continua ="S";

while(true){
    
    

    const idade = leia.questionInt("Digite sua idade: ");
    somaIdades+=idade;
    totalPessoas++;
    
    identidadeGenero = leia.questionInt("Com qual genero você se identifica? ");
    tipoDev = leia.questionInt("Digite a sua especialidade: ");

    if(tipoDev ===1){
        totalBackend++;
    }
    
    
    if((identidadeGenero === 1 || identidadeGenero == 4) && tipoDev ==2){
        totalMulheresFront++;
    }


    if((identidadeGenero === 2 || identidadeGenero == 5) && tipoDev ==3 && idade> 40){
        totalHomensMobile40++;
    } 

    if((identidadeGenero === 3 && tipoDev === 4 && idade < 30)){
        totalNBFullStack30++;
    }
   

   //condição de parada 
   continua = leia.keyIn("Deseja continuar ? (S/N)").toUpperCase();
   if(continua ==="N"){
    break;
   }
    
    
}

const mediaIdade = parseInt(somaIdades/totalPessoas);

console.log(`Total de pessoas Backend: ${totalBackend}`);
console.log(`Total de Mulheres (Cis/Trans) Frontend: ${totalMulheresFront}`);
console.log(`Total de Homens (Cis/Trans) Mobile > 40: ${totalHomensMobile40}`);
console.log(`Total de Não Binários FullStack < 30: ${totalNBFullStack30}`);
console.log(`Total de respondentes: ${totalPessoas}`);
console.log(`Média de idade do grupo: ${mediaIdade}`);

