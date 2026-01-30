const leia = require("readline-sync");

let numeros = [10,25,5,45,85];

let cores= Array(5);



for(let indice = 0; indice < numeros.length; indice ++){
    console.log(`Numeros: ${indice} = ${numeros[indice]}`);
}

console.log(numeros.length);
console.table(numeros)

for(let indice = 0; cores.length; indice ++){
    cores[indice] = leia.question("Digitar nome das cores:");
}

console.table(cores);

console.table(numeros.sort())

