const leia = require("readline-sync");

console.log("*".repeat(40));
console.log("            Animal JS       ");
console.log("*".repeat(40));
console.log();
let caractristica1 = leia.question("Digite a primeira caracteristica: ");
let caractristica2 = leia.question("Digite a segunda caracteristica: ");
let caractristica3 = leia.question("Digite a terceira caracteristica: ");

if(caractristica1==="vertebrado" && caractristica2 === "ave" && caractristica3==="carnivoro")
    {
        console.log("Aguia");
    }

else if(caractristica1==="vertebrado" && caractristica2 === "ave" && caractristica3==="onivoro")
    {
        console.log("Pomba");
    }

else if(caractristica1==="vertebrado" && caractristica2 === "mamifero" && caractristica3==="onivoro")
    {
        console.log("Homem");
    }

else if(caractristica1==="vertebrado" && caractristica2 === "mamifero" && caractristica3==="herbivoro")
    {
        console.log("Vaca");
    }

else if(caractristica1==="invertebrado" && caractristica2 === "inseto" && caractristica3==="hematofago")
    {
        console.log("Pulga");
    }

else if(caractristica1==="invertebrado" && caractristica2 === "inseto" && caractristica3==="herbivoro")
    {
        console.log("Lagarta");
    }

else if(caractristica1==="invertebrado" && caractristica2 === "anelideo" && caractristica3==="hematofogo")
    {
        console.log("Sangeussuga");
    }

else if(caractristica1==="invertebrado" && caractristica2 === "anelideo" && caractristica3==="onivoro")
    {
        console.log("Minhoca");
    }

