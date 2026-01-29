const leia = require("readline-sync");

//menu
console.log("=".repeat(40));
console.log("▄▄ ▄▄ ▄▄▄▄▄▄ ▄▄ ▄▄ ▄▄▄▄   ▄▄▄   ▄▄▄");
console.log("▀█▄█▀   ██   ██ ██ ██▀██ ██▀██ ██▀██");
console.log("██ ██   ██   ▀███▀ ████▀ ██▀██ ▀███▀");
console.log("=".repeat(40));
console.log("1-cachorro quente-> R$10.00\n 2-xsalada-> R$15.00 \n 3-xbacon-> R$18.00 \n 4-bauru-> R$12.00\n 5-Refrigerante R$ ->8.00 \n 6-suco de Laranja -> 13.00");



let codigo= leia.questionInt("Digite a código para escolher o produto: ");
let quantidade=leia.questionInt("Digite a quantidade: ");
let nomeDoProduto;
let preco;



switch(codigo){
    case 1:
      nomeDoProduto = "cachorro quente";
      preco = 10.00;
      break; 
    
    case 2:
      nomeDoProduto = "x-salada";
      preco = 15.00; 
      break; 
    
    case 3:
      nomeDoProduto = "x-bacon";
      preco = 18.00;
      break;
    
     case 4:
      nomeDoProduto = "bauru";
      preco = 12.00;
      break; 
      
     case 5:
      nomeDoProduto = "refrigerante";
      preco = 8.00;
      break; 
    
    case 6:
      nomeDoProduto = "suco de laranja";
      preco = 13.00;
      break; 

    default:
        console.log("Digite um valor válido");




}


let valorTotal = preco * quantidade;
const formatador = new Intl.NumberFormat("pt-BR",{
    style: "currency",
    currency:"BRL"
});

console.log(`Produto: ${nomeDoProduto} \n Valor total: ${formatador.format(valorTotal)}`);
