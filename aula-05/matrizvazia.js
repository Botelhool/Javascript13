const leia = require("readline-sync");

//let matriz = new Array(2);

//entrada de dados da matriz
//for(let indice = 0; linha < matriz.length; linha ++){
//    matriz[indice] = Array(3);
//}
//
//
//for(let linha = 0; linha < matriz.length; linha++){
//    for(let coluna = 0; coluna[linha].length;coluna++){
//        matriz[linha][coluna]= leia.questionInt(`${linha} ${coluna}`)
//    }
//}



let matrizInteiros = Array.from({ length: 2 }, () =>   
     Array.from({ length: 3 }, 
        () => leia.questionInt("Digite um numero: ")) );

console.log(``)